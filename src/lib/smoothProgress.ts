/**
 * NProgress / YouTube 型の進捗モデル
 * - マイルストーンで目標値を上げる
 * - 完了前は trickle で最大 ~90% まで進む
 * - 表示値は目標へイージングし、絶対に下がらない
 * - complete() のときだけ 100%
 */

export const PROGRESS_MILESTONES = {
  boot: 8,
  reactMounted: 18,
  mainChunk: 42,
  topPainted: 78,
} as const;

type Listener = (display: number) => void;

type SmoothProgressOptions = {
  trickleCeiling?: number;
  trickleIntervalMs?: number;
  ease?: number;
  initial?: number;
};

const readBootProgress = () => {
  if (typeof window === "undefined") return 0;
  const fromWindow = window.__bootProgress;
  if (typeof fromWindow === "number" && Number.isFinite(fromWindow)) {
    return Math.max(0, Math.min(99, Math.round(fromWindow)));
  }
  const el = document.getElementById("boot-percent");
  const parsed = Number(el?.textContent ?? 0);
  return Number.isFinite(parsed) ? Math.max(0, Math.min(99, parsed)) : 0;
};

export const createSmoothProgress = (options: SmoothProgressOptions = {}) => {
  const trickleCeiling = options.trickleCeiling ?? 90;
  const trickleIntervalMs = options.trickleIntervalMs ?? 320;
  const ease = options.ease ?? 0.14;
  const initial = Math.max(options.initial ?? 0, readBootProgress());

  let target = initial;
  let display = initial;
  let lastEmitted = Math.round(initial);
  let completed = false;
  let rafId = 0;
  let trickleId = 0;
  const listeners = new Set<Listener>();

  const emit = () => {
    const value = Math.max(lastEmitted, Math.min(100, Math.round(display)));
    if (value === lastEmitted && !(completed && value === 100)) {
      return;
    }
    lastEmitted = value;
    listeners.forEach((listener) => listener(value));
  };

  const setTarget = (next: number) => {
    if (completed) return;
    target = Math.max(target, display, Math.min(trickleCeiling, next));
  };

  const tick = () => {
    if (display > target) {
      target = display;
    }

    const diff = target - display;
    if (Math.abs(diff) < 0.15) {
      display = target;
    } else {
      display += diff * ease;
    }

    if (completed && display >= 99.4) {
      display = 100;
      emit();
      return;
    }

    emit();
    rafId = requestAnimationFrame(tick);
  };

  const startLoop = () => {
    if (!rafId) {
      rafId = requestAnimationFrame(tick);
    }
  };

  const startTrickle = () => {
    if (trickleId || completed) return;

    trickleId = window.setInterval(() => {
      if (completed) return;
      if (target >= trickleCeiling) return;
      const remain = trickleCeiling - target;
      const step = Math.max(0.4, remain * 0.08);
      setTarget(target + step);
    }, trickleIntervalMs);
  };

  return {
    subscribe(listener: Listener) {
      listeners.add(listener);
      listener(lastEmitted);
      return () => {
        listeners.delete(listener);
      };
    },

    start() {
      completed = false;
      const seeded = Math.max(display, readBootProgress(), PROGRESS_MILESTONES.boot);
      display = seeded;
      target = seeded;
      lastEmitted = Math.round(seeded);
      setTarget(Math.max(seeded, PROGRESS_MILESTONES.boot));
      emit();
      startLoop();
      startTrickle();
    },

    milestone(value: number) {
      setTarget(value);
      startLoop();
      startTrickle();
    },

    complete() {
      if (completed) return;
      completed = true;
      target = 100;
      if (trickleId) {
        window.clearInterval(trickleId);
        trickleId = 0;
      }
      startLoop();
    },

    getDisplay() {
      return lastEmitted;
    },

    isComplete() {
      return completed && lastEmitted >= 100;
    },

    destroy() {
      if (rafId) cancelAnimationFrame(rafId);
      if (trickleId) window.clearInterval(trickleId);
      rafId = 0;
      trickleId = 0;
      listeners.clear();
    },
  };
};

export type SmoothProgress = ReturnType<typeof createSmoothProgress>;

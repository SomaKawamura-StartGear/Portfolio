import { useEffect } from "react";
import "./AnimatedBackground.css";

/**
 * Animated Background Component
 *
 * このアニメーション背景は、Mohaiman氏の作品を参考にしています。
 * 参考作品: https://codepen.io/mohaiman/pen/MQqMyo
 * 著作権: © Mohaiman - すべての権利は原作者に帰属します。
 *
 * このアニメーション背景は、Mohaiman氏の許可を得て使用・改変しています。
 */

export const AnimatedBackground = () => {
  useEffect(() => {
    // ランダムな色を生成する関数
    const generateRandomColor = () => {
      const hue = Math.floor(Math.random() * 360); // 0-360度の色相
      const saturation = Math.floor(Math.random() * 50) + 30; // 30-80%の彩度
      const lightness = Math.floor(Math.random() * 30) + 40; // 40-70%の明度
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    // 各円にランダムな色を適用
    const circles = document.querySelectorAll(".circles li");
    circles.forEach((circle) => {
      const randomColor = generateRandomColor();
      (circle as HTMLElement).style.backgroundColor = randomColor;
    });
  }, []);

  return (
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

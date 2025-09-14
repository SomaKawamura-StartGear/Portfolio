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

import React from "react";

const Logo = (props) => (
  <svg width={232} height={232} viewBox="0 0 58 58" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#a98258" d="M48 0H10L0 16v42h58V16z" />
      <path fill="#daae86" d="M10 0L0 16h58L48 0z" />
      <path fill="#d8b18b" d="M33 54l-4-4-4 4-2-2v6h12v-6z" />
      <path fill="#f4d5bd" d="M23 0h12v16H23z" />
      <path fill="#d8b18b" d="M25 21l4 4 4-4 2 2v-7H23v7z" />
      <g fill="#000" transform="translate(4 24)">
        <path d="M17.818 19.895c0-.846.198-1.669.532-2.431a7.294 7.294 0 012.365-2.931c1.045-.763 2.352-1.27 3.785-1.27.953 0 1.857.226 2.657.602a7.193 7.193 0 012.888 2.501c.7 1.046 1.133 2.259 1.137 3.529a1.48 1.48 0 01-1.485 1.473 1.48 1.48 0 01-1.485-1.473c0-.383-.093-.819-.284-1.253a4.357 4.357 0 00-1.401-1.733c-.614-.446-1.308-.698-2.027-.698-.482 0-.946.112-1.388.319-.663.308-1.268.845-1.686 1.47-.421.624-.642 1.322-.638 1.895a1.48 1.48 0 01-1.485 1.473 1.48 1.48 0 01-1.485-1.473" />
        <g opacity={0.2}>
          <ellipse cx={2.227} cy={11.789} rx={2.227} ry={2.211} />
          <ellipse cx={46.773} cy={11.789} rx={2.227} ry={2.211} />
        </g>
        <ellipse cx={5.568} cy={3.316} rx={3.341} ry={3.316} />
        <ellipse cx={44.174} cy={3.316} rx={3.341} ry={3.316} />
      </g>
    </g>
  </svg>
);

export default Logo;

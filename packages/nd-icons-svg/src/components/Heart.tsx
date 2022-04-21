import * as React from 'react';
import { SVGProps } from 'react';

const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M20.458 4.542a5.265 5.265 0 0 0-7.444 0L12 5.556l-1.014-1.014A5.265 5.265 0 0 0 7.264 3C4.377 3 2 5.377 2 8.264 2 9.66 2.555 11 3.542 11.986L12 20.444l8.458-8.458a5.265 5.265 0 0 0 0-7.444Z"
    />
  </svg>
);

export default SvgHeart;

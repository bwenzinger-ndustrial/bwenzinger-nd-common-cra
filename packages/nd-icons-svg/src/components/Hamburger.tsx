import * as React from 'react';
import { SVGProps } from 'react';

const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 11.667h20M2 5h20M2 18.333h20" />
  </svg>
);

export default SvgHamburger;

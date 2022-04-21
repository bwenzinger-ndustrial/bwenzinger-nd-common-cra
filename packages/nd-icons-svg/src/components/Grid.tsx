import * as React from 'react';
import { SVGProps } from 'react';

const SvgGrid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 2h7.778v7.778H2V2Zm12.222 0H22v7.778h-7.778V2Zm0 12.222H22V22h-7.778v-7.778ZM2 14.222h7.778V22H2v-7.778Z"
    />
  </svg>
);

export default SvgGrid;

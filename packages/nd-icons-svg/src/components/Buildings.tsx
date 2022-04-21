import * as React from 'react';
import { SVGProps } from 'react';

const SvgBuildings = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 22V8h8v14h-8Zm0 0V2H2v20h12Zm0 0v-6h4v6h-4Zm6-14V6m-2.5 6.5v-1h1v1h-1Zm-12 6v-1h1v1h-1Zm4 0v-1h1v1h-1Zm-4-4v-1h1v1h-1Zm4 0v-1h1v1h-1Zm-4-4v-1h1v1h-1Zm4 0v-1h1v1h-1Zm-4-4v-1h1v1h-1Zm4 0v-1h1v1h-1Z" />
  </svg>
);

export default SvgBuildings;

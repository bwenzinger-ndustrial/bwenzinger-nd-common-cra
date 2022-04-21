import * as React from 'react';
import { SVGProps } from 'react';

const SvgBuilding = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16.13 5V3M7 22V5h10.956v17H7Zm3.652 0v-6h3.652v6h-3.652Zm-.456-9.5v-1h.913v1h-.913Zm3.652 0v-1h.913v1h-.913Zm-3.652-4v-1h.913v1h-.913Zm3.652 0v-1h.913v1h-.913ZM8.826 2h3.652v3H8.826V2Z" />
  </svg>
);

export default SvgBuilding;

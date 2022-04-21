import * as React from 'react';
import { SVGProps } from 'react';

const SvgProfiles = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16.545 20.364v-1.819a3.636 3.636 0 0 0-3.636-3.636H5.636A3.636 3.636 0 0 0 2 18.545v1.819m20 0v-1.819a3.636 3.636 0 0 0-2.727-3.518M15.636 4.118a3.636 3.636 0 0 1 0 7.046m-6.363.109a3.636 3.636 0 1 0 0-7.273 3.636 3.636 0 0 0 0 7.273Z" />
  </svg>
);

export default SvgProfiles;

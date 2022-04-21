import * as React from 'react';
import { SVGProps } from 'react';

const SvgTree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    stroke="#0B588A"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.222 14.222v-.5a.5.5 0 0 0-.5.5h.5Zm7.778 0h.5a.5.5 0 0 0-.5-.5v.5ZM23 22v.5a.5.5 0 0 0 .5-.5H23Zm-7.778 0h-.5a.5.5 0 0 0 .5.5V22Zm0-20v-.5a.5.5 0 0 0-.5.5h.5ZM23 2h.5a.5.5 0 0 0-.5-.5V2Zm0 7.778v.5a.5.5 0 0 0 .5-.5H23Zm-7.778 0h-.5a.5.5 0 0 0 .5.5v-.5ZM1 2v-.5a.5.5 0 0 0-.5.5H1Zm7.778 0h.5a.5.5 0 0 0-.5-.5V2Zm0 7.778v.5a.5.5 0 0 0 .5-.5h-.5ZM1 9.778H.5a.5.5 0 0 0 .5.5v-.5ZM12 18.5h-.5a.5.5 0 0 0 .5.5v-.5Zm3.222-3.778H23v-1h-7.778v1Zm7.278-.5V22h1v-7.778h-1ZM23 21.5h-7.778v1H23v-1Zm-7.278.5v-7.778h-1V22h1Zm-.5-19.5H23v-1h-7.778v1ZM22.5 2v7.778h1V2h-1Zm.5 7.278h-7.778v1H23v-1Zm-7.278.5V2h-1v7.778h1ZM1 2.5h7.778v-1H1v1ZM8.278 2v7.778h1V2h-1Zm.5 7.278H1v1h7.778v-1Zm-7.278.5V2h-1v7.778h1ZM8.778 6.5H12v-1H8.778v1ZM12 6.5h3.222v-1H12v1Zm-.5-.5v12.5h1V6h-1Zm.5 13h3.222v-1H12v1Z" />
  </svg>
);

export default SvgTree;

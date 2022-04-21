import { ButtonHTMLAttributes } from 'react';

interface ButtonPassedProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  className?: string;
  component?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
  icon?: JSX.Element | null;
}

export type NdButtonProps = ButtonPassedProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

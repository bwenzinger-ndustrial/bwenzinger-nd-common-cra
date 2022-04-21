import { themeHelper } from '@ndustrial/nd-theme-react';
import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { NdButtonProps } from './types';

const ContentDivider = styled.div`
  height: 1rem;
  width: 1px;
`;

function ButtonComponent(props: NdButtonProps) {
  const {
    children,
    className,
    component = 'button',
    disabled,
    onClick,
    icon,
    ...rest
  } = props;

  /*
    This is a workaround/alternative that seems necessary to support
    rendering the icon. Using the 'as' option provided by
    styled-component was not rendering the icon provided via the
    icon prop. I haven't dug into the styled-components source
    code, but I am guessing it does some filtering of props.
  */
  const Component = component;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore next-line
    <Component
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon}
      {icon && <ContentDivider />}
      {children}
    </Component>
  );
}

const Button = styled(ButtonComponent)<{ size?: 'large' | undefined }>`
  align-items: center;
  border-radius: 0;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  justify-content: ${({ icon }) => (icon ? 'flex-start' : 'center')};
  outline: none;
  position: relative;
  text-decoration: none;
  transition: all 0.15s ease-out;
  user-select: none;
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          font-size: ${rem(12, 14)};
          height: 48px;
          padding: 0 12px;
          text-transform: uppercase;
          ${ContentDivider} {
            height: ${rem(24, 14)};
            margin: 0 12px;
          }
          svg {
            height: ${rem(24, 14)};
            width: ${rem(24, 14)};
          }
        `;
      default:
        return css`
          font-size: ${rem(10, 14)};
          height: 32px;
          letter-spacing: 0.5px;
          padding: 0 8px;
          ${ContentDivider} {
            height: ${rem(16, 14)};
            margin: 0 8px;
          }
          svg {
            height: ${rem(16, 14)};
            width: ${rem(16, 14)};
          }
        `;
    }
  }}
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: #fff;
  svg {
    stroke: #fff;
  }
  ${ContentDivider} {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &:hover {
    background: ${({ theme }) =>
      themeHelper.blacken(theme.colors.primary, 0.2)};
  }
  &:disabled {
    background: ${({ theme }) => themeHelper.whiten(theme.colors.primary, 0.5)};
    border-color: ${({ theme }) =>
      themeHelper.whiten(theme.colors.primary, 0.5)};
  }
`;

const SecondaryButton = styled(Button)`
  border: 1px solid #eaeaea;
  svg {
    stroke: ${({ theme }) => theme.colors.primary};
  }
  ${ContentDivider} {
    background-color: #eaeaea;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    svg {
      stroke: ${({ theme }) => theme.colors.primary};
    }
    ${ContentDivider} {
      background-color: ${({ theme }) =>
        themeHelper.whiten(theme.colors.primary, 0.9)};
    }
  }
  &:disabled {
    border-color: ${themeHelper.whiten('#eaeaea', 0.5)};
    color: ${({ theme }) => themeHelper.whiten(theme.colors.text, 0.5)};
    svg {
      stroke: ${({ theme }) => themeHelper.whiten(theme.colors.primary, 0.5)};
    }
    ${ContentDivider} {
      background-color: ${themeHelper.whiten('#eaeaea', 0.5)};
    }
  }
`;

const WarningButton = styled(Button)`
  background-color: #fff;
  color: ${({ theme }) => theme.colors.failure};
  border: ${({ theme }) => `1px solid ${theme.colors.failure}`};
  svg {
    stroke: ${({ theme }) => theme.colors.failure};
  }
  ${ContentDivider} {
    background-color: rgba(225, 105, 125, 0.1);
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.failure};
    color: #fff;
    svg {
      stroke: #fff;
    }
    ${ContentDivider} {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  &:disabled {
    color: ${({ theme }) => themeHelper.whiten(theme.colors.failure, 0.5)};
    border: ${({ theme }) =>
      `1px solid ${themeHelper.whiten(theme.colors.failure, 0.5)}`};
    svg {
      stroke: ${({ theme }) => themeHelper.whiten(theme.colors.failure, 0.5)};
    }
  }
`;

const ButtonGroup = styled.div`
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  margin: -8px;
  ${PrimaryButton},
  ${SecondaryButton},
  ${WarningButton} {
    margin: 8px;
  }
`;

export { ButtonGroup, PrimaryButton, SecondaryButton, WarningButton };

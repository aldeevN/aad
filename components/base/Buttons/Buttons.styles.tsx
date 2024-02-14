// types
import { ButtonsProps } from "./Buttons.types";

// polished
import { darken, lighten } from "polished";

// styles
import styled, { css } from "styled-components";

const shared = css<ButtonsProps>`
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  line-height: 1;
  outline: none;
  border-radius: 4px;
`;

const contained = css<ButtonsProps>`
  ${shared};
  color: ${({ theme }) => theme.white};
  background-color: ${({ color }) => color};
  border: 2px solid transparent;

  &:hover {
    background-color: ${({ color }) => lighten(0.05, color)};
    border-color: ${({ color }) => lighten(0.05, color)};
  }

  &:active {
    background-color: ${({ color }) => darken(0.02, color)};
    border-color: ${({ color }) => darken(0.02, color)};
  }

  &:focus-visible {
    background-color: ${({ color }) => darken(0.02, color)};
  }
`;

const auth = css<ButtonsProps>`
  ${contained};
  height: 52px;
  color: ${({ theme }) => theme.white};
  font-family: "Raleway", Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  margin: 12px auto;
  letter-spacing: 1.4px;
  inline-size: 100%;

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 16px;
    margin-block-start: 14px;
    margin-block-end: 8px;
  }
`;

const outlined = css<ButtonsProps>`
  ${shared};
  font-family: "Raleway", Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 4px;
  background-color: transparent;
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};

  &:hover {
    border-color: ${({ color }) => lighten(0.05, color)};
  }

  &:active {
    border-color: ${({ color }) => darken(0.02, color)};
  }

  &:focus-visible {
    border-color: ${({ color }) => darken(0.02, color)};
  }
`;

const showMore = css<ButtonsProps>`
  ${contained};
  color: ${({ theme }) => theme.primary};
  font-family: "Raleway", Arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: center;

  &:hover {
    color: ${({ theme }) => lighten(0.08, theme.primary)};
  }

  @media ${({ theme }) => theme.device.mobileL} {
  }
`;

export const Button = styled.button<ButtonsProps>`
  ${({ variants }) => {
    switch (variants) {
      case "contained":
        return contained;
    }
    switch (variants) {
      case "auth":
        return auth;
    }
    switch (variants) {
      case "showMore":
        return showMore;
    }

    switch (variants) {
      case "outlined":
        return outlined;
    }
  }}
`;

//lib
import styled from "styled-components";

export const TooltipStyled = styled.div<{ isCandidate: boolean }>`
  display: inline-block;
  position: relative;
  z-index: 100;

  ${({ isCandidate }) =>
    isCandidate &&
    `
    margin-inline-start: 24px;
    margin-block-start: 11px;
  `}
`;

export const TooltipContent = styled.div<{ isCandidate: boolean }>`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  padding: 16px;
  width: 256px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  color: #112f56;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.09);

  ${({ isCandidate }) =>
    isCandidate &&
    `
    right: -152px;
    top: -78px;
    padding: 13px;
    width: 180px;
    font-family: "Raleway",sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    -webkit-letter-spacing: 0.02em;
    -moz-letter-spacing: 0.02em;
    -ms-letter-spacing: 0.02em;
    letter-spacing: 0.02em;
    color: #2C60F5;
    border-radius: 10px;
  `}
`;
export const TooltipTriangle = styled.div``;

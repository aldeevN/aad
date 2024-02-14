// lib
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
`;

export const CitcleActive = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  circle {
    stroke-dasharray: 120px;
    stroke-dashoffset: 120px;
  }

  transform: rotate(270deg);
`;
export const CitcleUnactive = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Percent = styled.span<{ color?: string }>`
  font-family: "Proxima Nova", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  color: ${({ color }) => color || "#2c60f5"};
`;

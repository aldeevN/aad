// lib
import styled from "styled-components";

export const Checkmark = styled.span`
  display: inline-block;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #2c60f5;
  text-align: center;

  padding: 14px;

  border: 1px solid #2c60f5;
  border-radius: 4px;

  &::before {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 8px 12px;
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Container = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  ${Input}:checked + ${Checkmark} {
    background-color: #2c60f5;
    color: #fff;
  }
`;

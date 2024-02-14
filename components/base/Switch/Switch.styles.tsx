// lib
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-inline-start: 17px;
  margin-block-end: 12px;
`;

export const Inner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;

  &:before,
  &:after {
    display: block;
    float: left;
    width: 50%;
    height: 38px;
    padding: 0;
    box-sizing: border-box;
  }

  &:before {
    content: attr(data-yes);
    padding-left: 8px;
    background-color: #f55d2c;
  }

  &:after {
    content: attr(data-no);
    padding-right: 15px;
    background-color: #dbdbdb;
    text-align: right;
  }
`;

export const ToggleSwitch = styled.div`
  position: relative;
  width: 80px;
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border-radius: 30px;
  margin: 0;
  border: solid 0.125rem ${({ theme }) => theme.white};
`;

export const Switch = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  margin: 4px;
  background: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 39px;
  border-radius: 30px;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in 0s;
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + ${Label} {
    ${Inner} {
      margin-left: 0;
    }

    ${Switch} {
      right: 0px;
    }
  }
`;

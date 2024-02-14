// lib
import styled from "styled-components";

export const ReactStyled = styled.div`
  .select__indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 43px;
    /* background-color: #2c60f5; */
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    margin-top: -0.5px;
  }
  .select__control {
    height: 44px;
    margin: 0;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    svg {
      transition: transform 0.3s ease;
    }
  }
  .select__control--menu-is-open .select__indicators {
    svg {
      transform: rotate(90deg);
    }
  }
  .select__placeholder {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #828282;
  }
  .select__menu-list {
    padding: 6px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
  }
  .select__option--is-focused {
    background: #f5f8ff;
    border-radius: 5px;
  }
  .select__option {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #000000;
  }
  .select__option--is-selected {
    background: #2c60f5;
    border-radius: 5px;
    color: #fff;
  }
`;

export const Label = styled.div`
  display: inline-flex;
  margin: 0 0 10px 0;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #828282;
`;

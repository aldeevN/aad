import styled, { css } from "styled-components";

// types
import { TypographyProps } from "./Typography.types";

const headline1 = css<TypographyProps>`
  text-align: center;
  font-family: "Proxima Nova", Arial, sans-serif;
  font-size: 29px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 1.5px;
  margin: 0 auto 57px;
  
`;

const headline2 = css<TypographyProps>`
  text-align: center;
  font-family: "Proxima Nova", Arial, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 23.8px;
  letter-spacing: 0.7px;
  margin: 0 auto 55px;
`;


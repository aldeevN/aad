// lib
import styled from "styled-components";

import { Button } from "../../components";

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 243px;
  font-weight: 700;
  line-height: 292px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #2c60f5;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 150px;
    line-height: 200px;
  }
`;

export const SubTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #3c5f71;
`;

export const PageBtn = styled(Button)`
  width: 270px;
  height: 52px;
  margin: 50px auto;
`;

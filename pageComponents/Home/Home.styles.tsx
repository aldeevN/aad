// lib
import styled from "styled-components";



export const HomeStyled = styled.div`
  padding: 50px 0 100px 0;
  @media ${({ theme }) => theme.device?.tablet} {
    gap: 60px 0;
    padding: 30px 0 50px 0;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px 0;
  @media ${({ theme }) => theme.device?.tablet} {
    gap: 60px 0;
  }
`;

export const HomeTitle = styled.h1`
  margin-bottom: 30px;

  font-family: "Raleway", sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: 0.02em;

  @media ${({ theme }) => theme.device?.tablet} {
    font-size: 18px;
    line-height: 120%;
    text-align: center;
  }
  @media ${({ theme }) => theme.device?.mobileL} {
    max-width: 280px;
    margin: 33px auto;
  }
`;


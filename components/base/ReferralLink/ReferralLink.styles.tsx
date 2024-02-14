// lib
import styled from "styled-components";

export const Referral = styled.div<{ color?: string }>`
  padding: 24px;
  background: ${({ color }) => color || "#2c60f5"};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Wrapper = styled.div``;
export const Title = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #ffffff;

  margin: 0 0 6px 0;
`;
export const Link = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.01em;
  color: #ffffff;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 0 20px 0;
  }
`;
export const Button = styled.button`
  text-align: center;
  background-color: transparent;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 15px;
  max-width: 251px;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    max-width: 100%;
  }
`;

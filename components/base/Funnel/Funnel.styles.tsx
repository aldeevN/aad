// lib
import styled from "styled-components";

export const FunnelStyled = styled.div``;
export const Title = styled.div`
  margin: 0 0 35px 0;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 0 20px 0;
  }
`;

export const Line = styled.div<{
  width: number | undefined;
  color: string;
  widthMb?: number;
}>`
  display: flex;
  align-items: center;
  border-radius: 100px;
  height: 17px;
  width: ${({ width }) => width}%;
  background-color: ${({ color }) => color};
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #ffffff;
  min-width: 65px;

  @media ${({ theme }) => theme.device.tablet} {
    justify-content: space-between;
    min-width: 60px;
  }
`;

export const Circle = styled.div<{
  color: string;
}>`
  border-radius: 50%;
  height: 17px;
  width: 17px;
  background-color: ${({ color }) => color};
`;

export const LineValue = styled.div`
  margin: 0 20px;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 21px;
  }
`;

export const FunnelItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
`;

export const FunnelStart = styled.div`
  width: 50%;
  display: flex;

  @media ${({ theme }) => theme.device.tablet} {

  }
`;

export const FunnelEnd = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #000000;


  @media ${({ theme }) => theme.device.tablet} {
    font-size: 10px;
  }
`;

export const Value = styled.div`
  margin: 0 0 0 15px;

  @media ${({ theme }) => theme.device.laptopM} {
    max-width: 310px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    max-width: 200px;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    margin: 0 0 0 5px;
    max-width: 100px;
  }
`;

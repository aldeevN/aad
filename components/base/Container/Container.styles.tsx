//lib
import styled from "styled-components";

export const ContainerStyled = styled.div`
  padding: 0 8.2%;
  margin: 0 auto;
  max-width: 1440px;
  flex: 1 0 auto;

  @media ${({ theme }) => theme.device.laptopM} {
    padding: 0 80px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    padding: 0 30px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 16px;
  }
`;

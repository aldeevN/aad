// lib
import styled from "styled-components";

export const SnackbarStyled = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.09);
  padding: 12px 49px 12px 32px;
  font-family: "Raleway";
  font-weight: 500;
  font-size: 22px;
  line-height: 110%;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    left: 0%;
    top: 50%;
    height: 50%;
    width: 4px;
    border-radius: 30px;
    background-color: #2c60f5;
    transform: translateY(-50%);
  }
`;

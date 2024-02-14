import styled from "styled-components";

export const MenuStyled = styled.nav<{
  isLendingMenuOpen: boolean;
}>`
  margin-block-start: 10px;

  @media ${({ theme }) => theme.device?.laptop} {
    position: absolute;
    top: 93px;
    left: 0;
    width: 100%;
    padding: 34px 8.2%;
    z-index: 20;
    background-color: #fff;
    width: 100%;
    border-top: 1px solid #e9e9e9;
    box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.8);
    display: ${({ isLendingMenuOpen }) =>
    isLendingMenuOpen ? "flex" : "none"};
  }

  @media ${({ theme }) => theme.device?.laptop} {
    margin-block-start: 0;
    top: 73px;
  }

  @media ${({ theme }) => theme.device?.mobileL} {
    padding: 34px 16px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${({ theme }) => theme.device?.laptop} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MenuItem = styled.li`
  display: inline-flex;
  align-items: flex-end;
  margin-inline-end: 20px;

  &:last-child {
    margin-inline-end: 0;
  }

  @media ${({ theme }) => theme.device?.laptopM} {
    margin-inline-end: 10px;
  }

  @media ${({ theme }) => theme.device?.laptop} {
    margin: 0 0 14px;
  }
`;

export const MenuLink = styled.a`
  position: relative;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.13px;
  letter-spacing: 0.6px;
  color: #000;
  overflow: hidden;
  padding-block-end: 10px;

  &::before {
    content: "";
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    inline-size: 100%;
    block-size: 1px;
    background-color: ${({ theme }) => theme.primary};
    transition: 0.3s ease-in-out transform;
    transform: translateX(-120%);
  }
  &:hover {
    color: ${({ theme }) => theme.primary};
    &::before {
      transform: translateX(0%);
    }
  }

  @media ${({ theme }) => theme.device?.laptopL} {
    font-size: 16px;
  }

  @media ${({ theme }) => theme.device?.laptop} {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }
`;

import styled from "styled-components";



export const AsideStyled = styled.div`
  display: flex;
  min-width: 375px;
  position: relative;
`;

export const Aside = styled.div<{
  isMenuOpen: boolean;
}>`
  width: 30.1%;
  background-color: ${({ theme }) => theme.primary};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 100%;
    width: 1000%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
  }

  @media ${({ theme }) => theme.device?.laptopL} {
    padding: 36px 1px 36px;
  }

  @media ${({ theme }) => theme.device?.laptop} {
    padding: 13px 13px 170px 13px;
    position: absolute;
    z-index: 1001;
    width: 100%;
    overflow-y: scroll;
    height: 100vh;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  }
`;

export const Main = styled.div`
  max-width: 913px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device?.laptop} {
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 400px;
  flex-grow: 1;
`;

export const Content = styled.div`
  flex: 1 0 auto;
  padding: 0 25px 40px 35px;

  @media ${({ theme }) => theme.device?.laptop} {
    padding: 0 16px 40px;
  }
`;

export const FooterWrapper = styled.div`
  padding: 36px 29px;
  flex: 0 0 auto;

  @media ${({ theme }) => theme.device?.tablet} {
    padding: 18px 0;
    background-color: ${({ theme }) => theme.secondary};
  }
`;

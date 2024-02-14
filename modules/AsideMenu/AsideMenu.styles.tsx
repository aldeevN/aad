// lib
import styled from "styled-components";


export const LendingNavigation = styled.div`
  position: fixed;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  justify-content: flex-start;
  max-width: 300px;
  width: 100%;
  font-size: 25px;
  padding: 20px;
`;

export const Logo = styled.a`
display:flex;
flex-direction:column;
padding: 25px;
`

export const Link = styled.li`
  padding: 15px 0px;
  color: black;
`


export const IconBtn = styled.div`
  @media ${({ theme }) => theme.device?.laptop} {
    display: flex;
  }
`;

// lib
import styled from "styled-components";

export const Lesson = styled.div`
  max-width: 300px;
`;
export const Time = styled.span`
  position: absolute;

  right: 8px;
  bottom: 8px;

  padding: 2px 4px;

  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #ffffff;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 4px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 0 8px 0;
`;

export const Label = styled.h3`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #112f56;
  width: 85%;
  margin: 0 0 0 8px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
`;

export const Closed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(17, 47, 86, 0.5);
  backdrop-filter: blur(12px);
  border-radius: 5px;
`;

export const List = styled.ul`
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    overflow-x: scroll;
    gap: 17px;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  & + & {
    margin: 20px 0 0 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-shrink: 0.03;
    & + & {
      margin: 0;
    }
  }
`;

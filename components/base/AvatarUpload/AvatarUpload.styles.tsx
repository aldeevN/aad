import styled from "styled-components";

export const Overlaid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
`;

export const AvatarStyled = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 94px;
  height: 94px;

  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  &:hover ${Overlaid} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;
  object-fit: cover;
`;

// lib
import styled from "styled-components";

export const SwiperStyled = styled.div`
  position: relative;
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 25px;
  }

  .swiper-pointer-events {
    font-size: 0;
  }

  .swiper-pagination-bullet {
    height: 8px;
    width: 8px;
    background: #ffffff;
    border: 1px solid #2c60f5;
    border-radius: 28px;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #2c60f5;
  }

  img {
    border-radius: 8px;
  }
`;

export const ButtonNavPrev = styled.div`
  border-radius: 50%;
  border: none;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 50px);
  transform: translateY(50%);
  left: 24px;
  z-index: 2;

  &:disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 32px;
    height: 32px;
    left: 10px;
  }
`;

export const ButtonNavNext = styled.div`
  border-radius: 50%;
  border: none;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 50px);
  transform: translateY(50%);
  right: 24px;
  z-index: 2;

  &:disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 32px;
    height: 32px;
    right: 10px;
  }
`;

// lib
import styled from "styled-components";

export const RangeSliderStyled = styled.div`
  .rc-slider-handle {
    background-color: transparent;
  }
  .rc-slider-handle-dragging {
    box-shadow: 0 0 0 5px #2c60f5 !important;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RangeSliderLabel = styled.span`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: #828282;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    line-height: 120%;
    margin: 0 0 15px 0;
  }
`;

export const RangeSliderValue = styled.span`
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  text-align: right;
  color: ${({ theme }) => theme.secondary};

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    line-height: 120%;
    margin: 0 0 15px 0;
  }
`;

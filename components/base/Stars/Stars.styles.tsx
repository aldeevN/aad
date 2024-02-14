// lib
import styled from "styled-components";
import ReactStars from "react-star-rating-component";

export const StarsStyled = styled(ReactStars)`
  margin: 0 0 0 -10px;
  .dv-star-rating-star {
    margin: 0 0 0 10px;
  }
  flex-shrink: 0;
`;

export const StarsWrapper = styled.div<{ readed?: boolean }>`
  display: flex;
  margin-block-end: 20px;
  ${({ readed }) => readed && "pointer-events: none;"}
`;

export const StarsLabel = styled.div`
  font-family: "Raleway", sans-serif;
  margin: 0 0 0 20px;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #1e406b;
  opacity: 0.8;
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
`;

export const Error = styled.p`
  font-family: "Raleway", Arial, sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 18.2px;
  letter-spacing: 0.4px;
  color: #ff8080;
  margin-block-end: 12px;

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 10px;
    margin-block-end: 0;
  }
`;


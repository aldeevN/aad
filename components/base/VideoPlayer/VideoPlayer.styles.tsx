//lib
import styled from "styled-components";

export const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  .player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  video {
    object-fit: cover;
  }
`;

import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const ModalStyled = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 43px;
  z-index: 99999;
  backdrop-filter: blur(8px);
  box-sizing: border-box;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const ModalBody = styled(motion.div)`
  z-index: 2;
  width: 596px;
  max-width: 100%;
  padding: 27px 47px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  position: relative;
  margin: auto;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100%;
  align-self: center;
  transform: translate3d(1px, -100px, -100px) rotateX(90deg);

  @media ${({ theme }) => theme.device.mobileL} {
    padding: 43px 20px 23px;
  }
`;

export const modalAnimation: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export const bodyAnimation: Variants = {
  visible: {
    transform: "translate3d(0px, 0px, 0px) rotateX(0deg)",
  },
  hidden: {
    transform: "translate3d(0px, -100px, -600px) rotateX(70deg)",
  },
};

export const Icon = styled.div`
  cursor: pointer;
  display: inline-flex;
  position: absolute;
  top: 20px;
  right: 20px;

  @media ${({ theme }) => theme.device.mobileL} {
    top: 13px;
    right: 13px;
  }
`;

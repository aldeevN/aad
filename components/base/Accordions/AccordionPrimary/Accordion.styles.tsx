import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const AccrdionStyled = styled.div``;

export const AccrdionHead = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2c60f5;
  border-radius: 10px;
  padding: 17px 24px;
  cursor: pointer;
`;

export const Icon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: 400;
  font-size: 40px;
`;

export const AccrdionTitle = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #ffffff;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 20px;
    line-height: 130%;
  }
`;

export const AccrdionBody = styled(motion.div)`
  overflow: hidden;
`;

export const Content = styled.div`
  border: 1px solid #e9e9e9;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 24px;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 24px 15px;
  }
`;

export const bodyAnimation: Variants = {
  visible: {
    opacity: 1,
    height: "auto",
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
};

export const headAnimation: Variants = {
  visible: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  hidden: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
};

export const arrowAnimation: Variants = {
  visible: {
    rotate: "0deg",
  },
  hidden: {
    rotate: "-90deg",
  },
};

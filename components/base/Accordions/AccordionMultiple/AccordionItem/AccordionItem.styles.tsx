import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const AccrdionStyled = styled.div``;

export const AccrdionHead = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  padding: 10px 0;
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
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #1e406b;
`;

export const AccrdionBody = styled(motion.div)`
  overflow: hidden;
`;

export const Content = styled.div``;

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

// lib
import { AnimatePresence } from "framer-motion";

// logic
import { useAccordion } from "../logic/useAccordion.logic";

// styles
import {
  AccrdionBody,
  AccrdionHead,
  AccrdionStyled,
  bodyAnimation,
  headAnimation,
  AccrdionTitle,
  Content,
  Icon,
  arrowAnimation,
} from "./AccordionMultiple.styles";
// types
import { AccordionProps } from "./AccordionMultiple.types";

// svg

import ArrowBigger from "../icons/arrow-bigger.svg";

export const AccordionMultiple: React.FC<AccordionProps> = ({ title, children, open, ...props }) => {
  const { handleToggle, isOpen } = useAccordion(open);

  return (
    <AccrdionStyled {...props}>
      <AccrdionHead
        exit="hidden"
        animate={isOpen ? "visible" : "hidden"}
        initial="hidden"
        transition={{
          delay: 1,
        }}
        variants={headAnimation}
        onClick={handleToggle}
      >
        <AccrdionTitle>{title}</AccrdionTitle>
        <Icon variants={arrowAnimation} exit="hidden" animate={isOpen ? "visible" : "hidden"} initial="hidden">
          <ArrowBigger />
        </Icon>
      </AccrdionHead>
      <AnimatePresence initial={false}>
        {isOpen && (
          <AccrdionBody
            exit="hidden"
            animate="visible"
            initial="hidden"
            variants={bodyAnimation}
            transition={{
              duration: 1,
            }}
          >
            <Content>{children}</Content>
          </AccrdionBody>
        )}
      </AnimatePresence>
    </AccrdionStyled>
  );
};

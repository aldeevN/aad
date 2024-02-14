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
} from "./Accordion.styles";
// types
import { AccordionProps } from "./Accordion.types";

// svg

import Arrow from "../icons/arrow.svg";

export const AccordionPrimary: React.FC<AccordionProps> = ({
  title,
  children,
  open,
  ...props
}) => {
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
        <Icon
          variants={arrowAnimation}
          exit="hidden"
          animate={isOpen ? "visible" : "hidden"}
          initial="hidden"
        >
          <Arrow />
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

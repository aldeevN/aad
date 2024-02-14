// react
import React, { useEffect, useState, FC } from "react";
import { createPortal } from "react-dom";

//types
import { ModalProps } from "./Modal.types";

// icons
import CloseBtnIcon from "./icons/close-btn.svg";

// framer-motion
import { AnimatePresence } from "framer-motion";

// custom hooks
import useModal from "./useModal.logics";

// styles
import {
  ModalBody,
  ModalOverlay,
  ModalStyled,
  modalAnimation,
  bodyAnimation,
  Icon,
} from "./Modal.styles";

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  close,
  defaultOpened = false,
  ...props
}) => {
  const { DOMElement } = useModal(close, isOpen);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && DOMElement
    ? createPortal(
        <AnimatePresence>
          {isOpen ? (
            <ModalStyled
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalAnimation}
              {...props}
            >
              <ModalOverlay onClick={close} />
              <ModalBody
                variants={bodyAnimation}
                transition={{
                  duration: 0.5,
                }}
              >
                <Icon onClick={close}>
                  <CloseBtnIcon />
                </Icon>
                {children}
              </ModalBody>
            </ModalStyled>
          ) : null}
        </AnimatePresence>,
        DOMElement
      )
    : null;
};

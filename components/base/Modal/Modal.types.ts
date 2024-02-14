import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
  defaultOpened?: boolean;
}


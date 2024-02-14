// react
import { useEffect } from "react";

const useModal = (close: () => void, isOpen: boolean) => {
  let DOMElement = null;

  if (typeof window !== "undefined") {
    DOMElement = document.getElementById("modal");
  }

  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleEscClose);
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    }
    return () => {
      window.document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, close]);

  return {
    DOMElement, close
  };
};

export default useModal;

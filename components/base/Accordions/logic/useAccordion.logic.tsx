// lib
import { useCallback, useState } from "react";

export const useAccordion = (open?: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(open || false);
  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    handleToggle,
  };
};

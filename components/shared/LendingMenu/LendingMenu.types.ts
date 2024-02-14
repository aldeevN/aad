import { HTMLAttributes } from "react";

export interface Link {
  href: string;
  label: string;
  id: number;
}

export interface MenuProps extends HTMLAttributes<HTMLElement> {
  links: Link[];
  isLendingMenuOpen: boolean;
  closeLendingBurgerMenu: () => void;
}

import { HTMLAttributes } from "react";

export interface ReferralLinkProps extends HTMLAttributes<HTMLElement> {
  title: string;
  link: string;
  color?: string;
}

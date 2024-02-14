import { HTMLAttributes } from "react";

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
  errorMessage?: string;
}

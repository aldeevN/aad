import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
  label?: string;
  isRequired?: boolean;
  tooltip?: React.ReactNode;
}

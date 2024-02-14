// styles
import React from "react";
import { SnackbarStyled } from "./Snackbar.styles";
export const Snackbar: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => {
  return <SnackbarStyled {...props}>{children}</SnackbarStyled>;
};

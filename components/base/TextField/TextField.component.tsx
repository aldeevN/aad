// react
import React, { forwardRef } from "react";

// types
import { TextFieldProps } from "./TextField.types";

// styles
import { Error, Input } from "./TextField.styles";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ errorMessage, isError, ...props }, ref) => {
    return (
      <>
        <Input isError={isError} ref={ref} {...props} />
        {isError && <Error>{errorMessage}</Error>}
      </>
    );
  }
);

TextField.displayName = "TextField";

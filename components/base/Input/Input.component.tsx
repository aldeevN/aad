// react
import React, { forwardRef } from "react";

// types
import { InputProps } from "./Input.types";

// styles
import {
  InputStyled,
  Error,
  Label,
  Required,
  Wrapper,
  Top,
} from "./Input.styles";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { errorMessage, label, isError, className, isRequired, tooltip, ...props },
    ref
  ) => {
    return (
      <Wrapper className={className}>
        <Top>
          {label && (
            <Label>
              {label}
              {isRequired && <Required>*</Required>}
            </Label>
          )}
          {tooltip}
        </Top>
        <InputStyled {...props} ref={ref} />
        {isError && <Error>{errorMessage}</Error>}
      </Wrapper>
    );
  }
);

Input.displayName = "Input";

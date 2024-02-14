// react
import React, { forwardRef } from "react";

// styles
import { Error, TextArea, Wrapper } from "./Textarea.styles";
// types
import { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isError, errorMessage, ...props }, ref) => {
    return (
      <Wrapper className={className}>
        <TextArea ref={ref} {...props} />
        {isError && <Error>{errorMessage}</Error>}
      </Wrapper>
    );
  }
);

Textarea.displayName = "Textarea";

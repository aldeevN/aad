//styles
import { Checkmark, Container, Input } from "./RadioRectangle.styles";
// types
import { RadioRectangleProps } from "./RadioRectangle.types";

export const RadioRectangle: React.FC<RadioRectangleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Container className={className}>
      <Input {...props} />
      <Checkmark>{children}</Checkmark>
    </Container>
  );
};

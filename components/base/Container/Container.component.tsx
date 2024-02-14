// styles
import { ContainerStyled } from "./Container.styles";

// types

import { ContainerProps } from "./Container.types";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

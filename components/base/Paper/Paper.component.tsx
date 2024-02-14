// styles

import { PaperStyled } from "./Paper.styles";

export const Paper: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => <PaperStyled {...props}>{children}</PaperStyled>;

import {IPaginate} from "./Paginate.types";

import { PaginateStyled } from "./Paginate.styles";

export const Paginate = ({
  marginPagesDisplayed,
  pageRangeDisplayed,
  pageCount,
  className,
  ...props
}: IPaginate): JSX.Element => {
  return (
    <PaginateStyled
      {...props}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
    />
  );
};

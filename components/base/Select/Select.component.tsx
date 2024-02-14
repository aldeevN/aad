// styles
import { ReactStyled, Label } from "./Select.styles";
import ReactSelect from "react-select";

// types

import { SelectProps } from "./Select.types";

// svg
import Arrow from "./icons/arrow.svg";

// component for react select
const IndicatorSeparator = () => {
  return null;
};

const DropdownIndicator = () => {
  return <Arrow />;
};

export const Select: React.FC<SelectProps> = ({ className, label, ...props }) => {
  return (
    <ReactStyled className={className}>
      {label && <Label>{label}</Label>}
      <ReactSelect
        instanceId="id-select"
        classNamePrefix="select"
        components={{
          IndicatorSeparator,
          DropdownIndicator,
        }}
        {...props}
      />
    </ReactStyled>
  );
};

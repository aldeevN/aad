// react
import React, { FC } from "react";

// lib
import Datepicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

// types
import { DatePickerProps } from "./DatePicker.types";

// components
import { Input } from "../Input";

// icons
import DateIcon from "./icons/date.svg";

// styles
import { DatepickerIcon } from "./DatePicker.styles";

export const DatePicker: FC<DatePickerProps> = ({
  label,
  ...props
}) => {
  return (
    <>
      <Datepicker
        {...props}
        dateFormat="dd MMMM"
        customInput={<Input errorMessage="f" label={label} />}
        locale="ru"
        calendarClassName="rasta-stripes"
      />
      <DatepickerIcon>
        <DateIcon />
      </DatepickerIcon>
    </>
  );
};

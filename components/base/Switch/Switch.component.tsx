// react
import React, { FC } from "react";

// custom hooks
import useSwitch from "./useSwitch.logics";

// types
import { ISwitchProps } from "./Switch.types";

// styles
import * as S from "./Switch.styles";

export const Switch: FC<ISwitchProps> = ({
  name,
  onChange,
  checked,
  ...props
}) => {
  const { handleSwitchToggle } = useSwitch(onChange);

  return (
    <S.Wrapper {...props}>
      <S.ToggleSwitch>
        <S.Checkbox
          type="checkbox"
          name={name}
          id={name}
          checked={checked}
          onChange={handleSwitchToggle}
        />
        <S.Label htmlFor={name}>
          <S.Inner />
          <S.Switch />
        </S.Label>
      </S.ToggleSwitch>
    </S.Wrapper>
  );
};

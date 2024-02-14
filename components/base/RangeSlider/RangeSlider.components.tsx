// styles
import { RangeSliderStyled, Flex, RangeSliderLabel, RangeSliderValue } from "./RangeSlider.styles";

import React from "react";
import Slider from "rc-slider";

// types

import { RangeSliderProps } from "./RangeSlider.types";

export const RangeSlider: React.FC<RangeSliderProps> = ({
  className,
  valueLabel,
  label,
  ...props
}) => {
  return (
    <RangeSliderStyled className={className}>
      <Flex>
        {label && <RangeSliderLabel>{label}</RangeSliderLabel>}
        {valueLabel && <RangeSliderValue>{valueLabel}</RangeSliderValue>}
      </Flex>
      <Slider
        dots
        onAfterChange={(e) => console.log(e)}
        dotStyle={{ borderColor: "#2C60F5" }}
        activeDotStyle={{ borderColor: "#2C60F5" }}
        trackStyle={{
          backgroundColor: "#2C60F5",
        }}
        handleStyle={{
          borderColor: "#2C60F5",
        }}
        railStyle={{
          backgroundColor: "#F2F2F2",
        }}
        {...props}
      />
    </RangeSliderStyled>
  );
};

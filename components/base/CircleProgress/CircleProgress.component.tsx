// react
import React, { FC } from "react";

// styles
import { CitcleActive, CitcleUnactive, Wrapper, Percent } from "./CircleProgress.styles";

// types
import { CircleProgresProps } from "./CircleProgress.types";

export const CircleProgress: FC<CircleProgresProps> = ({ percent, color = "#2C60F5", stroke, ...props }) => {
  return (
    <Wrapper {...props}>
      <CitcleActive>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="20"
            cy="20"
            r="19"
            stroke={color}
            style={{
              strokeDashoffset: 120 - (120 * percent) / 100,
            }}
          />
        </svg>
      </CitcleActive>
      <CitcleUnactive>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" stroke={  stroke || "#EDF2FF"} />
        </svg>
      </CitcleUnactive>
      <Percent color={color}>{percent}%</Percent>
    </Wrapper>
  );
};

// lib
import { useState } from "react";
// styles
import { TooltipStyled, TooltipContent, TooltipTriangle } from "./Tooltip.styles";
// svg
import TooltipIc from "./icons/tooltip.svg";
import TooltipWhiteIc from "./icons/tooltip-white.svg";

export const Tooltip: React.FC<{ children: string; isCandidate: boolean }> = ({
  children,
  isCandidate,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <TooltipStyled
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      isCandidate={isCandidate}
    >
      {isCandidate ? <TooltipWhiteIc /> : <TooltipIc />}
      {isShow && (
        <TooltipContent isCandidate={isCandidate}>
          <TooltipTriangle></TooltipTriangle>
          {children}
        </TooltipContent>
      )}
    </TooltipStyled>
  );
};

// react
import React, { FC } from "react";

// types
import { LogoProps } from "./Logo.types";

// styles
import {
  LogotypeWrapper,
  AsideLogotypeIcon,
  MobilLogotypeIcon,
  LendingLogotypeIcon,
  FooterLogotypeIcon,
  LendingMobileLogotypeIcon,
  LendingMobileLogoBlackIcon
} from "./Logo.styles";

export const Logo: FC<LogoProps> = ({ variants, ...props }) => {
  switch (variants) {
    case "aside":
      return (
        <LogotypeWrapper {...props} href="./">
          <AsideLogotypeIcon />
        </LogotypeWrapper>
      );

    case "mobile":
      return (
        <LogotypeWrapper {...props} href="./">
          <MobilLogotypeIcon />
        </LogotypeWrapper>
      );

    case "lending":
      return (
        <LogotypeWrapper {...props} href="./">
          <LendingLogotypeIcon />
        </LogotypeWrapper>
      );

    case "lending-mobile":
      return (
        <LogotypeWrapper {...props} href="/">
          <LendingMobileLogotypeIcon />
        </LogotypeWrapper>
      );

      case "lending-mobile-black":
        return (
          <LogotypeWrapper {...props} href="/">
            <LendingMobileLogoBlackIcon />
          </LogotypeWrapper>
        );

    case "footer":
      return (
        <LogotypeWrapper {...props} href="./">
          <FooterLogotypeIcon />
        </LogotypeWrapper>
      );
  }
};

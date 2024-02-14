// react
import { FC } from "react";

// next
import Link from "next/link";

// types
import { MenuProps } from "./LendingMenu.types";

// styles
import { MenuItem, MenuLink, MenuList, MenuStyled } from "./LendingMenu.styles";

export const LendingMenu: FC<MenuProps> = ({
  links,
  isLendingMenuOpen,
  ...props
}) => (
  <MenuStyled {...props} >
    <MenuList>
      {links.map(({ href, id, label }) => (
        <MenuItem key={id} >
          <Link href={href} passHref>
            <MenuLink>{label}</MenuLink>
          </Link>
        </MenuItem>
      ))}
    </MenuList>
  </MenuStyled>
);

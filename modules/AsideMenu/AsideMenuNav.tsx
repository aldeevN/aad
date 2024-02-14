"use client";
import { usePathname } from "next/navigation";
import { Link } from "./AsideMenu.styles";

type NavLink = {
    label: string;
    href: string;
};
type Props = {
    navLinks: NavLink[];
};

const AsideMenuNav = ({ navLinks }: Props) => {
    const pathname = usePathname();


    return (


        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.label}
                        className={isActive ? "active" : ""}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </>
    );
};

export { AsideMenuNav };

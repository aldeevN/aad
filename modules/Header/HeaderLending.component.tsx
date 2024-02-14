import { IconBtn, Wrapper } from "./HeaderLending.styles"
import InputPath from "../InputPath/InputPath.component"
import { useSession } from "next-auth/react";
import LendingRegistration from "@/pageComponents/Lending/LendingRegistration/LendingRegistration";



export const Header = () => {
    const { data: session } = useSession();
    const personalAccountHref = !session ? `/sign-in/[sign-in]` : "/profile";

    return (
        <>
            <Wrapper>
                <InputPath />
                <IconBtn>
                    <LendingRegistration />
                </IconBtn>
            </Wrapper>
        </>
    )
}
import React from "react"
import LendingAboutUs from "./LendingAboutUs/LendingAboutUs"
import LendingContactInfo from "./LendingContactInfo/LendingsContactInfo"

import { Wrapper, LeftCard, RightCard, RightContent } from "@/layouts/LayoutLending/LayoutLending.styles"
import { Header, AsideMenu } from "@/modules"


export const Lending = (): JSX.Element => {
    return (
        <Wrapper>
            <LeftCard>
                <AsideMenu />
            </LeftCard>
            <RightCard>
                <Header />
                <RightContent>
                    <LendingAboutUs />
                    <LendingContactInfo />
                </RightContent>
            </RightCard>
        </Wrapper>
    )
}
// react
import React, { FC, ReactNode } from "react";

// modules
import { Header, Footer } from "../../modules";

// styles
import { FooterWrapper, Content, Wrapper } from "./LayoutAside.styles";

export default function LayoutAside({ children }: { children: ReactNode }) {

    return (
        <>
            <Wrapper>
                <Header />
                <Content>{children}</Content>
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </Wrapper>
        </>
    )
}

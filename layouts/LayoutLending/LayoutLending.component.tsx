// react
import React, { ReactNode } from "react";


// styles
import { Content, Wrapper } from "./LayoutLending.styles";

export default function LayoutLending({ children }: { children: ReactNode }) {
    return (
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
    )
}
// react
import React from "react";

// next
import Link from "next/link";

// styles
import { Wrapper, Title, SubTitle, PageBtn } from "./NotFound.styles";

export const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <SubTitle>Такой страницы не существует</SubTitle>
      <Link href={`/`} passHref>
        <PageBtn variants="contained" color="#2C60F5">
          На главную
        </PageBtn>
      </Link>
    </Wrapper>
  );
};

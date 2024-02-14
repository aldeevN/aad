// react
import React from "react";

// styles
import { Wrapper, Title, SubTitle, PageBtn } from "./ServerErr.styles";

export const ServerErr = () => {
  return (
    <Wrapper>
      <Title>Ошибка сети</Title>
      <SubTitle>
        Не удалось загрузить данные. Пожалуйста, проверьте подключение к
        интернету и повторите попытку
      </SubTitle>
      <PageBtn variants="contained" color="#2C60F5">
        Повторить
      </PageBtn>
    </Wrapper>
  );
};

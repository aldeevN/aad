// styles

import {
  ButtonMore,
  Content,
  Head,
  Title,
  Wrapper,
} from "./CommentBase.styles";

// types

import { CommentBaseProps } from "./CommentBase.types";

export const CommentBase: React.FC<CommentBaseProps> = ({
  children,
  handleShowMore,
  title,
  isReachingEnd,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Head>
        <Title>{title}</Title>
      </Head>
      <Content>
        {children}
        {!isReachingEnd ? (
          <ButtonMore onClick={handleShowMore} type="submit">
            Загрузить все ответы
          </ButtonMore>
        ) : null}
      </Content>
    </Wrapper>
  );
};

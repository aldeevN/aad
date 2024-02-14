import { ReactNode } from "react";

export interface CommentBaseProps {
  title: string;
  children: ReactNode;
  handleShowMore?: () => void;
  isReachingEnd?: boolean | undefined;
}

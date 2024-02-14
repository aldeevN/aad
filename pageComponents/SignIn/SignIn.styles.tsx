// lib

import styled from "styled-components";
import { lighten } from "polished";

// components
import {
  Button,
  TextField,
  FormComponent,
  PopupLink,
} from "../../components";

export const Form = styled(FormComponent)``;


export const SignInInput = styled(TextField)``;

export const SignInSubmitBtn = styled(Button)`
  @media ${({ theme }) => theme.device?.mobileL} {
    margin-block-end: 10px;
  }
`;

export const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 10px auto 5px;

  @media ${({ theme }) => theme.device?.mobileL} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const SignInLink = styled(PopupLink)`
  font-size: 13px;
  margin-block-end: 20px;
  display: block;

  @media ${({ theme }) => theme.device?.mobileL} {
    font-size: 10px;
    margin-block-start: 10px;
    margin-block-end: 0px;
  }
`;

export const LinkBtn = styled(Button)`
  color: ${({ theme }) => theme.primary};
  line-height: 28px;
  text-align: center;

  &:hover {
    color: ${({ theme }) => lighten(0.08, theme.primary)};
  }

  @media ${({ theme }) => theme.device?.mobileL} {
    font-size: 12px;
    margin-block-start: 0;
    margin-block-end: 12px;
  }
`;

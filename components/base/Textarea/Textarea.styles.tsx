// lib
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #e9e9e9;
  border-radius: 5px;

  padding: 15px;

  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0.02em;

  resize: none;

  height: 87px;

  &::placeholder {
    color: #a3a4a3;
  }
  &:focus {
    &::placeholder {
      font-size: 0;
    }
  }
`;

export const Error = styled.div`
  margin: 12px 0 0 0;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #ff8080;
`;

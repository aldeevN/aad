// lib
import styled from "styled-components";

export const InputStyled = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  padding: 13px 16px;
  height: 52px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.04em;
  color: #112f56;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Required = styled.div`
  color: #eb5757;
`;
export const Error = styled.div`
  margin: 12px 0 0 0;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 140%;
  letter-spacing: 0.04em;
  color: #ff8080;
`;
export const Label = styled.div`
  display: inline-flex;
  margin: 0 0 10px 0;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #828282;
`;

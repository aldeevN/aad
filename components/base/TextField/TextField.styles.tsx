import styled from "styled-components";

export const Input = styled.input<{
  isError: boolean | undefined;
}>`
  width: 100%;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  letter-spacing: 1.4px;
  padding: 12px 15px;
  margin-block-start: 8px;
  margin-block-end: 12px;
  border: ${({ isError }) =>
    isError ? "solid 1px #FF8080" : "solid 1px #BDBDBD"};
  border-radius: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.subtitle};
  }

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 16px;
    padding: 6px 15px;
    margin-block-end: 3px;
  }
`;

export const Error = styled.p`
  font-family: "Raleway", Arial, sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 18.2px;
  letter-spacing: 0.4px;
  color: #ff8080;
  margin-block-end: 12px;

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 10px;
    margin-block-end: 0;
  }
`;

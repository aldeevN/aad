import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  primary: "#2C60F5",
  secondary: "#112F56",
  subtitle: "#828282",
  error: "#FF8080",
  white: "#FFF",

  device: {
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(max-width: 1024px)`,
    laptopM: `(max-width: 1280px)`,
    laptopL: `(max-width: 1439px)`,
    desktop: `(max-width: 2560px)`,
  },
};

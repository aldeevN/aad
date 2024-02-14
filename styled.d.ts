import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string,
    secondary: string,
    subtitle: string;
    error: string,
    white: string,
    device: {
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      laptopM: string;
      desktop: string;
    };
  }
}


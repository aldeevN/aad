// import { Provider } from "react-redux";
import { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useState } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
import { GlobalStyle } from "../styles/globals";
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);
  const [interval, setInterval] = useState(0)
  return (
    <>
      <SessionProvider session={pageProps.session} refetchInterval={interval} >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default App;
import {SessionProvider} from "next-auth/react";
import type {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import {wrapper} from "stores";
import {GlobalStyle} from "styles/GlobalStyle";
import {themes} from "styles/theme";
import {UserProvider} from "utils/user";
import "utils/firebase"; 

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <ThemeProvider theme={themes.dark}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);

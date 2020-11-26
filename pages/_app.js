import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import '../styles/App.scss'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  primaryColor: '#272a2f',
  secondaryColor: '#26ffe6',
  black: 'rgba(0,0,0,.87)',
  white: '#ffffff',
  grey: '#3A3A3A',
  maxWidth: '1200px',
  primaryFont: "'Poppins', sans-serif",
};

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    position: relative;
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    font-family: ${theme.primaryFont};
    position: relative;
    height: 100%;
  }
`;

const queryCache = new QueryCache()

export default function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </ReactQueryCacheProvider>
  )
}

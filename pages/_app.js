import '../styles/App.scss'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Layout from '../components/Layouts/Layout'

const theme = {
  primaryColor: '#48D1CC',
  secondaryColor: '#FFD700',
  black: 'rgba(0,0,0,.87)',
  white: '#ffffff',
  grey: '#3A3A3A',
  maxWidth: '1200px',
  primaryFont: "'Poppins', sans-serif",
};

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 56px 0 0;
    position: relative;
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    font-family: ${theme.primaryFont};
    position: relative;
    height: 100%;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

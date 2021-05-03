import { Provider } from 'next-auth/client';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import '../css/_app.css';

const theme = {
  colors: {
    primary: '#1B4965',
    primaryLight: '#8EC1E1',
    primaryDulled: '#2B74A1',
    secondary: '#B1598A',
    secondaryLight: '#E5C8D8',
    secondaryDulled: '#C482A7',
    background: '#ffffff',
    accent: '#2CB547',
    darkText: '#091720',
    lightText: '#F5F9FD',
    lightGrey: '#F7FBFF',
    midGrey: '#EFF6FB',
    darkGrey: '#9E9E9E',
    darkestGrey: '#616161',
    success: '#23CE6B',
    danger: '#F25A5A',
    dangerDulled: '#F7A1A1',
    warning: '#F6F740',
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background-color: ${theme.colors.lightGrey};
    color:  ${theme.colors.darkText};

  }
  .app {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content {
    margin: 0;
    padding: 0;
    flex: 1 0 auto;
  }
  a {
    text-decoration: none;
  }
  `;

function today({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Today</title>
          </Head>
          <div className='app'>
            <Navbar />
            <div className='content'>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default today;

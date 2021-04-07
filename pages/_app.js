import { Provider } from 'next-auth/client';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import '../css/_app.css';

const theme = {
  colors: {
    primary: '#225649',
    primaryLight: '#edf8f5',
    primaryDulled: '#007C5D',
    secondary: '#9C4F5D',
    secondaryDulled: '#BB7682',
    background: 'white',
    accent: '#E08A00',
    darkText: '#212121',
    lightText: '#fafafa',
    lightGrey: '#F5F5F5',
    midGrey: '#E0E0E0',
    darkGrey: '#9E9E9E',
    darkestGrey: '#616161',
    success: 'green',
    danger: '#dc3545',
    dangerDulled: '#F25B69',
    warning: 'yellow',
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
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

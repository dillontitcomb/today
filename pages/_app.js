import { Provider } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
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
  .app {
    min-height: 100vh;
  }
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
  `;

function today({ Component, pageProps }) {
  return (
    <div className='app'>
      <GlobalStyle />
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Today</title>
          </Head>

          {/* TODO: Create Nav Component */}
          <Navbar>
            <Link href='/'>
              <a>Today</a>
            </Link>
          </Navbar>

          <div>
            <Component {...pageProps} />
          </div>
          {/* TODO: Create Footer Component */}
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default today;

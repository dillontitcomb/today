import { Provider } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../css/style.css';

const theme = {
  colors: {
    primary: '#225649',
    primaryAccent: '#007C5D',
    secondary: '#9C4F5D',
    background: 'white',
    accent: '#E08A00',
    darkText: 'black',
    lightText: 'white',
    lightGrey: '#E3E3E3',
    midGrey: '8E8E8E',
    darkGrey: '#999999',
    success: 'green',
    danger: 'red',
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
    font-family: 'Merriweather', serif;
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
          <div>
            <div>
              <Link href='/'>
                <a>Today</a>
              </Link>
            </div>
          </div>
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

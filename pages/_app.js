import { Provider } from 'next-auth/client';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import '../css/_app.css';
import GlobalState from '../context/global/GlobalState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = {
  colors: {
    primary: '#002346',
    primaryLight: '#8EC1E1',
    primaryDulled: '#2B74A1',
    secondary: '#B1598A',
    secondaryLight: '#E5C8D8',
    secondaryDulled: '#C482A7',
    background: '#ffffff',
    accent: '#2CB547',
    darkText: '#091720',
    midText: '#333333',
    lightText: '#F5F9FD',
    lightGrey: '#F7FBFF',
    midGrey: '#DEEDF7',
    darkGrey: '#9E9E9E',
    darkestGrey: '#616161',
    success: '#007E33',
    successLight: '#00b247',
    danger: '#CC0000',
    dangerDulled: '#ff4444',
    dangerLight: '#ff5e5e',
    warning: '#FF8800',
    neutral: '#ffaa00',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body { 
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }
  .app {
    background-color: ${theme.colors.midGrey};
    color:  ${theme.colors.midText};
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content {
    background-color: ${theme.colors.midGrey};
    flex: 1 0 auto;
  }
  a {
    text-decoration: none;
  }
  `;

function today({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider session={pageProps.session}>
        <GlobalState>
          <ThemeProvider theme={theme}>
            <Head>
              <title>Today</title>
            </Head>
            <div className='app'>
              <Navbar />
              <div className='content'>
                <Component {...pageProps} />
                <ToastContainer
                  position='top-center'
                  autoClose={3000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
                />
              </div>
              <Footer />
            </div>
          </ThemeProvider>
        </GlobalState>
      </Provider>
    </>
  );
}

export default today;

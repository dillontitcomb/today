import { Provider } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import '../css/style.css';

function Today({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>
          Today, the compassionate habit tracking and productivity app
        </title>
      </Head>

      <div className='top-bar'>
        <div className='nav'>
          <Link href='/'>
            <a>Today</a>
          </Link>
        </div>
      </div>
      <div className='grid wrapper'>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default Today;

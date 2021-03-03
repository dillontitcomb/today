import Head from 'next/head';
import Link from 'next/link';
import '../css/form.css';
import '../css/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
          <Link href='/new'>
            <a>Add Person</a>
          </Link>
        </div>
      </div>
      <div className='grid wrapper'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.jsのアプリ</title>
        <meta name="description" content="これはNext.jsのアプリです" />
        <meta property="og:title" content="Next.jsのアプリ" />
        <meta property="og:description" content="これはNext.jsのアプリ" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

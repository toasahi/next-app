import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <title>Next.jsのアプリ</title>
          <meta name="description" content="これはNext.jsのアプリです" />
          <meta property="og:title" content="Next.jsのアプリ" />
          <meta property="og:description" content="これはNext.jsのアプリ" />
        </Head>
        <body className='bg-gray-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
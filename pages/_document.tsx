import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body className="bg-gray-600">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

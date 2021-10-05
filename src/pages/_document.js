/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Leo-Junkes</title>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet"/> 
            
          <link rel="icon" href="" />
          <link
            rel="shortcut icon"
            href="/imagens/imc.png"
            type="image/png"
          />
           </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}1

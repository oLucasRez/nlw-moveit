//------------------------------------------------------------------< classes >
import Document from "next/document";
//---------------------------------------------------------------< components >
import { Html, Head, Main, NextScript } from "next/document";
//===========================================================[ < MyDocument > ]
export default class MyDocument extends Document {
  //-----------------------------------------------------------------< return >
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#5965e0" />
          <meta
            name="description"
            content="Um app que te auxilia na técnica Pomodoro"
          />

          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />

          <link rel="manifest" href="manifest.json" />
        </Head>

        <body className="white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

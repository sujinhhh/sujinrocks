import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // 1. Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    // 2. Retrieve style from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    // 3. Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    // 4. Pass styleTags as prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head />
        {/*  5. Outpt the syles in the head */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0 width=device-width" />
        {this.props.styleTags}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

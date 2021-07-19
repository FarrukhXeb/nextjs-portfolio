// import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Farrukh | Lets get to Coding</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import "../styles/font-awesome.min.css";
import "../styles/flaticon.css";
import "../styles/themify-icons.css";
// import "react-modal-video/scss/modal-video.scss";
// import "../node_modules/react-modal-video/scss/modal-video.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Farrukh | Lets get to coding </title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

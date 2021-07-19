import Head from "next/head";
import React, { Fragment } from "react";

import Breadcrumbs from "../components/BreadCrumbs";
import PageNotFound from "../components/PageNotFound";

const ErroPage = () => {
  return (
    <Fragment>
      <Head>
        <title>404</title>
      </Head>
      <Breadcrumbs pageTitle={"404 Error"} pageSub={"404 Not Found"} />
      <PageNotFound />
    </Fragment>
  );
};
export default ErroPage;

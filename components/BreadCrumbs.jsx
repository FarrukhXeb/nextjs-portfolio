import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ pageSub, pageTitle }) => {
  return (
    <section className="page-title bg-animate-shape">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <h2>{pageTitle}</h2>
            <ol className="breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>{pageSub}</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="shape">
        <img src="/images/shape/shape-7.png" alt="" />
      </div>
      <div className="shape7">
        <img src="/images/shape/shape-8.png" alt="" />
      </div>
      <div className="shape8">
        <img src="/images/shape/shape-3.png" alt="" />
      </div>
      <div className="shape10">
        <img src="/images/shape/shape-5.png" alt="" />
      </div>
      <div className="shape11">
        <img src="/images/shape/shape-6.png" alt="" />
      </div>
      <div className="shape12">
        <img src="/images/shape/shape-4.png" alt="" />
      </div>
    </section>
  );
};

export default Breadcrumbs;

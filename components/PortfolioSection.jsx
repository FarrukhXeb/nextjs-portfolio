import Link from "next/link";
import React from "react";

const PorfolioSection = ({ portfolios }) => {
  return (
    <div className="wpo-protfolio-area-5 section-padding">
      <div className="container">
        <div className="col-12">
          <div className="section-title text-center">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="wpo-protfolio-item">
              <div className="row">
                {portfolios.map((portfolio) => (
                  <div key={portfolio.id} className="col col-12">
                    <div className="protfolio-rwrapper">
                      <div className="wpo-protfolio-single">
                        <div className="wpo-protfolio-img">
                          {/* <img src="images/protfolio/img-14.jpg" alt="" /> */}
                          <img
                            style={{ width: "100%", height: 470 }}
                            src={portfolio.coverImage.url}
                            alt=""
                          />
                        </div>
                        <div className="wpo-protfolio-text">
                          <h2>{portfolio.title}</h2>
                          <span>{portfolio.tags.join(" . ")}</span>
                          <Link href={`/porfolio/${portfolio.slug}`}>
                            <a>View Work</a>
                          </Link>
                        </div>
                        {/* <div className="thumb-text">
                          <span>02</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="protfolio-btn">
                <Link href="/porfolio">
                  <a>See More Work...</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorfolioSection;

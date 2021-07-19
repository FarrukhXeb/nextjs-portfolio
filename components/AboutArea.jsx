import Link from "next/link";
import React from "react";

// import PartnerSlider from "./PartnerSlider";

const AboutArea = (props) => {
  return (
    <div className={`wpo-about-area-2 ${props.ab3class}`}>
      <div className="container custom-container">
        <div className="about-s2-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="about-s2-img">
                  <img src="images/about/about.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="wpo-about-text">
                  <h2>We create products not just art</h2>
                  <p>
                    My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <Link href="/AboutPage">
                    <a className="theme-btn-s2">More About</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="wpo-client-area">
            <div className="container">
              <PartnerSlider />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutArea;

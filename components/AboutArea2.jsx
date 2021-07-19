import Link from "next/link";
import React from "react";

const AboutArea3 = () => {
  return (
    <div className="wpo-about-area-3 section-padding">
      <div className="wpo-about-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="about-s2-img">
                <img src="images/about/about.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="wpo-about-text">
                <h2>I Create Products Not Just Art</h2>
                <p>
                  My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                  viverra maecenas accumsan lacus vel facilisis.{" "}
                </p>
                <ul>
                  <li>High Quality Service</li>
                  <li>Best Price in Marketplace.</li>
                  <li>Unique Design and Development.</li>
                </ul>
                <Link href="/">
                  <a className="theme-btn-s2">Download CV</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea3;

import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="wpo-hero-style-5">
      <div className="wpo-slide-wrap">
        <div className="container">
          <div className="row">
            <div className="col col-md-8 slide-caption">
              <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">
                I’m <span>Farrukh</span> Zeb
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.8s">
                Full Stack Developer
              </p>
              <div className="bg-social wow fadeInUp" data-wow-delay="1.0s">
                <ul>
                  {/* <li>
                    <Link href="/">
                      <a>
                        <span>
                          <img src="images/icon/icon1.png" alt="" />
                        </span>
                      </a>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/">
                      <a>
                        <i className="ti-facebook"></i>
                      </a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="https://twitter.com/FarrukhZeb13">
                      <a target={"_blank"}>
                        <i className="ti-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/FarrukhXeb">
                      <a target={"_blank"}>
                        <i className="ti-github"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/farrukh-zeb-0687a8184/">
                      <a target={"_blank"}>
                        <i className="ti-linkedin"></i>
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/">
                      <a>
                        <i className="ti-instagram"></i>
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

import Slider from "react-slick";
function TestimonialSlider({ testclass }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    margin: 10,
    loop: true,
  };
  return (
    <div className={`wpo-testimonial-area wpo-testimonial-area-2 section-padding ${testclass}`}>
      <div className="container">
        <div className="col-12">
          <div className="section-title">
            <h2>Testimonial</h2>
          </div>
        </div>
        <div className="wpo-testimonial-main">
          <Slider {...settings}>
            <div className="wpo-testimonial-wrap">
              <div className="wpo-testimonial-item">
                <div className="wpo-testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida.{" "}
                  </p>
                  <div className="wpo-testimonial-item2">
                    <div className="wpo-testimonial-thumb">
                      <h4>John Harry</h4>
                      <span>CEO of Moderntern Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpo-testimonial-wrap">
              <div className="wpo-testimonial-item">
                <div className="wpo-testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida.{" "}
                  </p>
                  <div className="wpo-testimonial-item2">
                    <div className="wpo-testimonial-thumb">
                      <h4>John Harry</h4>
                      <span>CEO of Moderntern Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpo-testimonial-wrap">
              <div className="wpo-testimonial-item">
                <div className="wpo-testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida.{" "}
                  </p>
                  <div className="wpo-testimonial-item2">
                    <div className="wpo-testimonial-thumb">
                      <h4>John Harry</h4>
                      <span>CEO of Moderntern Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;

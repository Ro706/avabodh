import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Ensure these imports are correct
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsThree() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <section className="testimonials-three">
      <div
        className="testimonials-three__bg"
        style={{ backgroundImage: 'url(assets/images/backgrounds/testimonial-bg-3.jpg)' }}
      >
        <div
          className="testimonials-three__bg__shape"
          style={{ backgroundImage: 'url(assets/images/shapes/testimonial-bg-3-shape.png)' }}
        ></div>
      </div>
      <div className="container">
        <div
          className="testimonials-three__wrapper"
          style={{ backgroundImage: 'url(assets/images/shapes/testimonial-bg-3-inner.png)' }}
        >
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline bw-split-in-right">
              <span className="sec-title__tagline__border"></span>our recent Donors
            </h6>
            <h3 className="sec-title__title bw-split-in-left">What They’re Saying</h3>
          </div>

          <Slider {...settings}>
            <div className="item">
              <div className="testimonials-three__item">
                <h5 className="testimonials-three__item__name">Mike Hardson</h5>
                <span className="testimonials-three__item__designation">Customer</span>
                <div className="testimonials-three__item__ratings">
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                </div>
                <div className="testimonials-three__item__quote">
                  "Poor address a range of simply application and infrastructure this
                  of passages of available, but the majority have suffered poor
                  alteration in some form."
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-three__item">
                <h5 className="testimonials-three__item__name">Jack Turpin</h5>
                <span className="testimonials-three__item__designation">Founder</span>
                <div className="testimonials-three__item__ratings">
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                </div>
                <div className="testimonials-three__item__quote">
                  "Poor address a range of simply application and infrastructure this
                  of passages of available, but the majority have suffered poor
                  alteration in some form."
                </div>
              </div>
            </div>
            {/* Add more items as needed */}
          </Slider>
        </div>
      </div>
    </section>
  );
}

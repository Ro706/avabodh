import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

export default function Slider() {
  const sliderOptions = {
    loop: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    nav: false,
    dots: true,
    margin: 0
  };

  return (
    <section className="main-slider-four">
      <OwlCarousel className="main-slider-four__carousel careox-owl__carousel" {...sliderOptions}>
        <div className="item">
          <div className="main-slider-four__item">
            <div className="main-slider-four__bg">
              <img src="assets/images/backgrounds/slider-4-1.jpg" alt="careox" />
              <img src="assets/images/backgrounds/slider-4-1.jpg" alt="careox" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="main-slider-four__content">
                    <div className="main-slider-four__heart">
                      <img src="assets/images/shapes/slider-4-heart.png" alt="careox" />
                    </div>
                    <h2 className="main-slider-four__title">Our lives Poor Never Fade Gift Helping Organization.</h2>
                    <p className="main-slider-four__text">
                      Poor can only be as strong as our people & because of team<br />
                      have designed game-changing products.
                    </p>
                    <div className="main-slider-four__btn">
                      <Link to="/about" className="careox-btn careox-btn--base"><span>Discover More</span></Link>
                      <Link to="https://www.youtube.com/watch?v=h9MbznbxlLc" className="video-popup">
                        <i className="icofont-ui-play"></i><span className="ripple"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat block for more slides */}
        <div className="item">
          <div className="main-slider-four__item">
            <div className="main-slider-four__bg">
              <img src="assets/images/backgrounds/slider-4-2.jpg" alt="careox" />
              <img src="assets/images/backgrounds/slider-4-2.jpg" alt="careox" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="main-slider-four__content">
                    <div className="main-slider-four__heart">
                      <img src="assets/images/shapes/slider-4-heart.png" alt="careox" />
                    </div>
                    <h2 className="main-slider-four__title">Our lives Poor Never Fade Gift Helping Organization.</h2>
                    <p className="main-slider-four__text">
                      Poor can only be as strong as our people & because of team<br />
                      have designed game-changing products.
                    </p>
                    <div className="main-slider-four__btn">
                      <Link to="/about" className="careox-btn careox-btn--base"><span>Discover More</span></Link>
                      <Link to="https://www.youtube.com/watch?v=h9MbznbxlLc" className="video-popup">
                        <i className="icofont-ui-play"></i><span className="ripple"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
}

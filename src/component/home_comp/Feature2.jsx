import React from 'react'

export default function Feature2() {
  return (
    <>
        <section className="video-four" style={{ backgroundImage: 'url(assets/images/backgrounds/video-bg-4-1.jpg)' }}>
  <div className="video-four__shape-one" style={{ backgroundImage: 'url(assets/images/shapes/video-4-shape-1.png)' }}></div>
  <div className="video-four__shape-two" style={{ backgroundImage: 'url(assets/images/shapes/video-4-shape-2.png)' }}></div>
  <div className="container">
    <div className="row">
      <div className="col-lg-5 wow fadeInUp">
        <div className="video-four__area">
          <img src="assets/images/backgrounds/video-4-btn-bg.jpg" alt="careox" />
          <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="video-popup">
            <i className="icon-play-button"></i>
            <i className="ripple"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-7 d-flex align-items-center">
        <div className="video-four__content wow fadeInRight" data-wow-delay="200ms">
          <h5 className="video-four__sub-title">Education for Poor Children</h5>
          <h2 className="video-four__title">Education for Poor Children</h2>
          <p className="video-four__text">
            Lorem ipsum dolor sit amet, conse dtetur adipi sicing <br />elitare many variations.
          </p>
          <a href="about.html" className="careox-btn">
            <span>Discover More</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="pricing-one">
  <div className="container">
    <div className="sec-title text-center">
      <h6 className="sec-title__tagline bw-split-in-right">
        <span className="sec-title__tagline__border"></span>OUR PRICING PLAN
      </h6>
      <h3 className="sec-title__title bw-split-in-left">
        The Terms and Conditions<br /> Select Your Plan
      </h3>
    </div>
    <div className="row gutter-y-30">
      <div className="col-md-12 col-xl-4 wow fadeInUp" style={{ '--accent-color': '#ffa415' }} data-wow-delay="00ms">
        <div className="pricing-one__card text-center">
          <div className="pricing-one__card__top">
            <div className="pricing-one__card__top__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/pricing-1-1.jpg)' }}></div>
            <div className="pricing-one__card__icon">
              <i className="icon-zakat"></i>
            </div>
            <h4 className="pricing-one__card__title">Basic Plan</h4>
            <h3 className="pricing-one__card__price">
              $100<span>/M</span>
            </h3>
          </div>
          <ul className="list-unstyled pricing-one__card__list">
            <li><i className="icofont-close-line"></i>We Donate Now</li>
            <li><i className="icofont-check-circled"></i>Team Best Support</li>
            <li><i className="icofont-check-circled"></i>Communicate This Process</li>
            <li><i className="icofont-check-circled"></i>No Risk Guarantee</li>
          </ul>
          <a href="contact.html" className="careox-btn"><span>Get Started</span></a>
        </div>
      </div>

      <div className="col-md-12 col-xl-4 wow fadeInUp" style={{ '--accent-color': '#ff5528' }} data-wow-delay="100ms">
        <div className="pricing-one__card text-center">
          <div className="pricing-one__card__top">
            <div className="pricing-one__card__top__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/pricing-1-2.jpg)' }}></div>
            <div className="pricing-one__card__icon">
              <i className="icon-messages"></i>
            </div>
            <h4 className="pricing-one__card__title">ADVANCED PLAN</h4>
            <h3 className="pricing-one__card__price">
              $199<span>/M</span>
            </h3>
          </div>
          <ul className="list-unstyled pricing-one__card__list">
            <li><i className="icofont-check-circled"></i>We Donate Now</li>
            <li><i className="icofont-close-line"></i>Team Best Support</li>
            <li><i className="icofont-check-circled"></i>Communicate This Process</li>
            <li><i className="icofont-check-circled"></i>No Risk Guarantee</li>
          </ul>
          <a href="contact.html" className="careox-btn"><span>Get Started</span></a>
        </div>
      </div>

      <div className="col-md-12 col-xl-4 wow fadeInUp" style={{ '--accent-color': '#8139e7' }} data-wow-delay="200ms">
        <div className="pricing-one__card text-center">
          <div className="pricing-one__card__top">
            <div className="pricing-one__card__top__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/pricing-1-3.jpg)' }}></div>
            <div className="pricing-one__card__icon">
              <i className="icon-multiple-users-silhouette"></i>
            </div>
            <h4 className="pricing-one__card__title">PREMIUM PLAN</h4>
            <h3 className="pricing-one__card__price">
              $300<span>/Y</span>
            </h3>
          </div>
          <ul className="list-unstyled pricing-one__card__list">
            <li><i className="icofont-check-circled"></i>We Donate Now</li>
            <li><i className="icofont-close-line"></i>Team Best Support</li>
            <li><i className="icofont-check-circled"></i>Communicate This Process</li>
            <li><i className="icofont-close-line"></i>No Risk Guarantee</li>
          </ul>
          <a href="contact.html" className="careox-btn"><span>Get Started</span></a>
        </div>
      </div>
    </div>
  </div>
</section>
 
    </>
  )
}

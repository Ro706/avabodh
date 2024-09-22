import React from 'react';

const BenefitOne = () => {
  return (
    <section className="benefit-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="benefit-one__content wow fadeInLeft">
              <div className="sec-title text-left">
                <h6 className="sec-title__tagline bw-split-in-right">
                  <span className="sec-title__tagline__border"></span>benefits of Giving
                </h6>
                <h3 className="sec-title__title bw-split-in-left">
                  Bring More Meaning to<br /> Your Life & Family
                </h3>
              </div>
              <p className="benefit-one__content__text">
                Poor address a range of simply application and infrastructure this of passages of
                available, but the majority have suffered poor alteration in some form.
              </p>
              <div className="row gutter-y-30">
                <div className="col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="benefit-one__content__image">
                    <img src="assets/images/resources/benefit-1-1.jpg" alt="careox" />
                  </div>
                </div>
                <div className="col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="benefit-one__content__image">
                    <img src="assets/images/resources/benefit-1-2.jpg" alt="careox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="benefit-one__right wow fadeInRight" data-wow-delay="100ms">
              <li className="benefit-one__fact count-box" style={{ '--accent-color': '#ffa415' }}>
                <div
                  className="benefit-one__fact__bg"
                  style={{ backgroundImage: "url(assets/images/resources/fact-1-1.jpg)" }}
                ></div>
                <div className="benefit-one__fact__icon">
                  <i className="icon-charity-two"></i>
                </div>
                <h3 className="benefit-one__fact__count">
                  <span className="count-text" data-stop="232" data-speed="1500"></span>K
                </h3>
                <p className="benefit-one__fact__text">Poor Educate</p>
              </li>
              <li className="benefit-one__fact count-box" style={{ '--accent-color': '#ff5528' }}>
                <div
                  className="benefit-one__fact__bg"
                  style={{ backgroundImage: "url(assets/images/resources/fact-1-2.jpg)" }}
                ></div>
                <div className="benefit-one__fact__icon">
                  <i className="icon-zakat"></i>
                </div>
                <h3 className="benefit-one__fact__count">
                  <span className="count-text" data-stop="99" data-speed="1500"></span>M+
                </h3>
                <p className="benefit-one__fact__text">Donate now</p>
              </li>
              <li className="benefit-one__fact count-box" style={{ '--accent-color': '#8139e7' }}>
                <div
                  className="benefit-one__fact__bg"
                  style={{ backgroundImage: "url(assets/images/resources/fact-1-3.jpg)" }}
                ></div>
                <div className="benefit-one__fact__icon">
                  <i className="icon-interactions"></i>
                </div>
                <h3 className="benefit-one__fact__count">
                  <span className="count-text" data-stop="40" data-speed="1500"></span>K+
                </h3>
                <p className="benefit-one__fact__text">Clients Help</p>
              </li>
              <li className="benefit-one__fact count-box" style={{ '--accent-color': '#44c895' }}>
                <div
                  className="benefit-one__fact__bg"
                  style={{ backgroundImage: "url(assets/images/resources/fact-1-4.jpg)" }}
                ></div>
                <div className="benefit-one__fact__icon">
                  <i className="icon-multiple-users-silhouette"></i>
                </div>
                <h3 className="benefit-one__fact__count">
                  <span className="count-text" data-stop="35" data-speed="1500"></span>K+
                </h3>
                <p className="benefit-one__fact__text">Team Support</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitOne;

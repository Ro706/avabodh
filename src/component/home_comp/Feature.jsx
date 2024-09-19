import React from 'react';
import { Link } from 'react-router-dom';

export default function Feature() {
  return (
    <>
      <section className="feature-four">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
              <div className="feature-four__item" style={{ '--accent-color': '#ffa415' }}>
                <div className="feature-four__item__bg" style={{ backgroundImage: 'url(assets/images/resources/feature-4-1.jpg)' }}></div>
                <div className="feature-four__item__content">
                  <div className="feature-four__item__number"></div>
                  <h3 className="feature-four__item__title">Much Needed Help</h3>
                  <p className="feature-four__item__text">Start Donating</p>
                  <Link to="/about" className="feature-four__item__rm"><span className="icon-right-arrow-two1"></span></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="feature-four__item" style={{ '--accent-color': '#fc5528' }}>
                <div className="feature-four__item__bg" style={{ backgroundImage: 'url(assets/images/resources/feature-4-2.jpg)' }}></div>
                <div className="feature-four__item__content">
                  <div className="feature-four__item__number"></div>
                  <h3 className="feature-four__item__title">Help The Ecosystems</h3>
                  <p className="feature-four__item__text">Start Donating</p>
                  <Link to="/about" className="feature-four__item__rm"><span className="icon-right-arrow-two1"></span></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="feature-four__item" style={{ '--accent-color': '#8139e7' }}>
                <div className="feature-four__item__bg" style={{ backgroundImage: 'url(assets/images/resources/feature-4-3.jpg)' }}></div>
                <div className="feature-four__item__content">
                  <div className="feature-four__item__number"></div>
                  <h3 className="feature-four__item__title">Become Volunteer</h3>
                  <p className="feature-four__item__text">Start Donating</p>
                  <Link to="/about" className="feature-four__item__rm"><span className="icon-right-arrow-two1"></span></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

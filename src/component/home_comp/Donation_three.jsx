import React from 'react'
import { Link } from 'react-router-dom';
export default function Donation_three() {
  return (
    <>
    <section className="donations-three">
      <div
        className="donations-three__bg"
        style={{ backgroundImage: 'url(assets/images/backgrounds/donation-bg-3.jpg)' }}
      ></div>
      <div className="container">
        <div className="sec-title text-left">
          <h6 className="sec-title__tagline bw-split-in-right">
            <span className="sec-title__tagline__border"></span>Our Popular Causes
          </h6>
          <h3 className="sec-title__title bw-split-in-left">
            Help & Donate Now Find <br />
            The Popular Cause
          </h3>
        </div>
        <div
          className="donations-three__carousel careox-owl__carousel owl-carousel"
          data-owl-options='{
            "items": 2,
            "margin": 30,
            "loop": false,
            "smartSpeed": 700,
            "nav": false,
            "navText": ["<span class=\"icon-up-arrow-two\"></span>","<span class=\"icon-down-arrow-two\"></span>"],
            "dots": false,
            "autoplay": true,
            "responsive": {
              "0": {
                "items": 1
              },
              "500": {
                "items": 2
              }
            }
          }'
          
          
        >
          <div className="item">
            <div className="donations-three__item" style={{ '--accent-color': '#ffa415' }}>
              <div className="donations-three__item__image">
                <img src="assets/images/donation/donation-3-1.jpg" alt="careox" />
                <Link to="donation-details" className="donations-three__item__image__link"></Link>
                <div className="donations-three__item__category">Poor</div>
                <Link className="donations-three__item__rm" to="donation-details">
                  <i className="icon-right-arrow"></i>
                </Link>
              </div>
              <div className="donations-three__item__content">
                <h3 className="donations-three__item__title">
                  <Link to="donation-details">There Are Many Variations Qassages Poor</Link>
                </h3>
                <p className="donations-three__item__text">
                  We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.
                </p>
              </div>
              <div className="donations-three__item__border"></div>
              <div className="donations-three__item__bottom">
                <div className="donations-three__item__bottom__progress">
                  <div
                    className="donations-three__item__bottom__progress__inner count-bar"
                    data-percent="85%"
                  >
                    <div className="donations-three__item__bottom__progress__number count-text">85%</div>
                  </div>
                </div>
                <div className="donations-three__item__bottom__text">
                  <span>$23,000 Goals</span>
                  <span>$9,000 Donate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="donations-three__item" style={{ '--accent-color': '#ff5528' }}>
              <div className="donations-three__item__image">
                <img src="assets/images/donation/donation-3-2.jpg" alt="careox" />
                <Link to="donation-details" className="donations-three__item__image__link"></Link>
                <div className="donations-three__item__category">Raised</div>
                <Link className="donations-three__item__rm" to="donation-details">
                  <i className="icon-right-arrow"></i>
                </Link>
              </div>
              <div className="donations-three__item__content">
                <h3 className="donations-three__item__title">
                  <Link to="donation-details">It is a long established fact that a reader</Link>
                </h3>
                <p className="donations-three__item__text">
                  We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.
                </p>
              </div>
              <div className="donations-three__item__border"></div>
              <div className="donations-three__item__bottom">
                <div className="donations-three__item__bottom__progress">
                  <div
                    className="donations-three__item__bottom__progress__inner count-bar"
                    data-percent="80%"
                  >
                    <div className="donations-three__item__bottom__progress__number count-text">80%</div>
                  </div>
                </div>
                <div className="donations-three__item__bottom__text">
                  <span>$13,000 Goals</span>
                  <span>$5,000 Donate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="donations-three__item" style={{ '--accent-color': '#8742e8' }}>
              <div className="donations-three__item__image">
                <img src="assets/images/donation/donation-3-3.jpg" alt="careox" />
                <Link to="donation-details" className="donations-three__item__image__link"></Link>
                <div className="donations-three__item__category">Medical</div>
                <Link className="donations-three__item__rm" to="donation-details">
                  <i className="icon-right-arrow"></i>
                </Link>
              </div>
              <div className="donations-three__item__content">
                <h3 className="donations-three__item__title">
                  <Link to="donation-details">We Can Aenean Poor leo Nec This Enovation.</Link>
                </h3>
                <p className="donations-three__item__text">
                  We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.
                </p>
              </div>
              <div className="donations-three__item__border"></div>
              <div className="donations-three__item__bottom">
                <div className="donations-three__item__bottom__progress">
                  <div
                    className="donations-three__item__bottom__progress__inner count-bar"
                    data-percent="72%"
                  >
                    <div className="donations-three__item__bottom__progress__number count-text">72%</div>
                  </div>
                </div>
                <div className="donations-three__item__bottom__text">
                  <span>$89,000 Goals</span>
                  <span>$6,000 Donate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="donations-three__item" style={{ '--accent-color': '#44c895' }}>
              <div className="donations-three__item__image">
                <img src="assets/images/donation/donation-3-4.jpg" alt="careox" />
                <Link to="donation-details" className="donations-three__item__image__link"></Link>
                <div className="donations-three__item__category">Education</div>
                <Link className="donations-three__item__rm" to="donation-details">
                  <i className="icon-right-arrow"></i>
                </Link>
              </div>
              <div className="donations-three__item__content">
                <h3 className="donations-three__item__title">
                  <Link to="donation-details">Let’s Education for Children Good Future Life.</Link>
                </h3>
                <p className="donations-three__item__text">
                  We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.
                </p>
              </div>
              <div className="donations-three__item__border"></div>
              <div className="donations-three__item__bottom">
                <div className="donations-three__item__bottom__progress">
                  <div
                    className="donations-three__item__bottom__progress__inner count-bar"
                    data-percent="90%"
                  >
                    <div className="donations-three__item__bottom__progress__number count-text">90%</div>
                  </div>
                </div>
                <div className="donations-three__item__bottom__text">
                  <span>$29,000 Goals</span>
                  <span>$7,000 Donate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="donations-three__text wow fadeInUp">
          <span>#</span> We Give Donations Poor People Impact on Someone’s Life.{' '}
          <Link to="donation" className="careox-btn">
            <span>Donate Now</span>
          </Link>
        </div>
      </div>
    </section>
    <section className="donate-three">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="100ms">

        <div
          className="donate-three__carousel careox-owl__carousel owl-carousel"
          data-owl-options='{
            "items": 2,
            "margin": 30,
            "loop": false,
            "smartSpeed": 700,
            "nav": false,
            "navText": ["<span class=\"icon-up-arrow-two\"></span>","<span class=\"icon-down-arrow-two\"></span>"],
            "dots": false,
            "autoplay": true,
            "responsive": {
              "0": {
                "items": 1
              },
              "500": {
                "items": 2
              }
            }
          }'
          
        >
          <div className="item">
            <div className="donate-three__support">
              <img src="assets/images/resources/support-1-1.jpg" alt="careox" />
              <div className="donate-three__support__content">
                <h3 className="donate-three__support__title">Foods Support</h3>
                <div className="donate-three__support__collected">
                  <span>Collected $1.5M</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="donate-three__support">
              <img src="assets/images/resources/support-1-2.jpg" alt="careox" />
              <div className="donate-three__support__content">
                <h3 className="donate-three__support__title">Medical Support</h3>
                <div className="donate-three__support__collected">
                  <span>Collected $1.2M</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="donate-three__support">
              <img src="assets/images/resources/support-1-3.jpg" alt="careox" />
              <div className="donate-three__support__content">
                <h3 className="donate-three__support__title">Education Support</h3>
                <div className="donate-three__support__collected">
                  <span>Collected $1.4M</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="donate-three__support">
              <img src="assets/images/resources/support-1-4.jpg" alt="careox" />
              <div className="donate-three__support__content">
                <h3 className="donate-three__support__title">Sports Support</h3>
                <div className="donate-three__support__collected">
                  <span>Collected $1.1M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="200ms">
        <div className="donate-three__content">
          <div className="sec-title text-left">
            <h6 className="sec-title__tagline bw-split-in-right">
              <span className="sec-title__tagline__border"></span>HELP & DONATION
            </h6>
            <h3 className="sec-title__title bw-split-in-left">Become a Donate Now</h3>
          </div>
          <form action="#" className="donate-three__form">
            <div className="donate-three__form__amount">
              <span className="donate-three__form__amount__sign">$</span>
              <input
                type="text"
                value="200"
                name="donate_amount"
                id="donate_amount"
                placeholder="Amount"
                className="donate-three__form__amount__input"
              />
            </div>
            <div className="donate-three__form__buttons">
              <button type="button" className="donate-three__form__buttons__item">
                $<span className="donate-three__form__buttons__amount">100</span>
              </button>
              <button type="button" className="donate-three__form__buttons__item active">
                $<span className="donate-three__form__buttons__amount">200</span>
              </button>
              <button type="button" className="donate-three__form__buttons__item">
                $<span className="donate-three__form__buttons__amount">500</span>
              </button>
              <button type="button" className="donate-three__form__buttons__item">
                $<span className="donate-three__form__buttons__amount">300</span>
              </button>
              <button type="button" className="donate-three__form__buttons__item">Custom</button>
            </div>
            <div className="donate-three__form__submit">
              <button type="submit" className="careox-btn">
                <span>Donate Now</span>
              </button>
              <div className="donate-three__form__volunter">
                <img src="assets/images/resources/volunteer-image-1.png" alt="careox" />
                <img src="assets/images/resources/volunteer-image-2.png" alt="careox" />
                <img src="assets/images/resources/volunteer-image-3.png" alt="careox" />
                <div className="donate-three__form__volunter__total">+1K</div>
                <h5 className="donate-three__form__volunter__active">Active Donor’s</h5>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
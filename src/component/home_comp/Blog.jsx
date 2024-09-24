import React from 'react'

export default function Blog() {
  return (
    <>
<section className="blog-two">
  <div className="container">
    <div className="sec-title text-center">
      <h6 className="sec-title__tagline bw-split-in-right">
        <span className="sec-title__tagline__border"></span>News & articles
      </h6>
      <h3 className="sec-title__title bw-split-in-left">
        We Articles From Blog <br /> News and Story
      </h3>
    </div>
    <div
      className="blog-one__carousel careox-owl__carousel careox-owl__carousel--with-shadow careox-owl__carousel--basic-nav owl-carousel"
      data-owl-options='{
        "items": 1,
        "margin": 30,
        "loop": false,
        "smartSpeed": 700,
        "nav": false,
        "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
        "dots": true,
        "autoplay": false,
        "responsive": {
          "0": {
            "items": 1
          },
          "570": {
            "items": 2
          },
          "992": {
            "items": 3
          }
        }
      }'
    >
      <div className="item">
        <div
          className="blog-card wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="00ms"
          style={{ "--accent-color": "#ffa415" }}
        >
          <div className="blog-card__image">
            <img
              src="assets/images/blog/blog-2-1.jpg"
              alt="There are Many Variations of Available"
            />
            <a href="blog-details-right.html" className="blog-card__image__link">
              <span className="sr-only">There are Many Variations of Available</span>
            </a>
            <div className="blog-card__date">
              <i className="icofont-ui-calendar"></i>02 Sep 2024
            </div>
          </div>
          <div className="blog-card__content">
            <ul className="list-unstyled blog-card__meta">
              <li>
                <a href="blog-list-right.html">
                  <img src="assets/images/blog/blog-author-1-1.jpg" alt="careox" />
                  Admin: Lorat
                </a>
              </li>
              <li>
                <a href="blog-details-right.html">
                  <i className="icofont-comment"></i>Comment (5)
                </a>
              </li>
            </ul>
            <h3 className="blog-card__title">
              <a href="blog-details-right.html">There are Many Variations of Available</a>
            </h3>
            <p className="blog-card__text">
              We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.
            </p>
            <a href="blog-details-right.html" className="blog-card__link">
              <span className="blog-card__link__front">
                <span className="icofont-double-right"></span>
              </span>
              <span className="blog-card__link__back">
                <span className="icofont-double-right"></span>Read More
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="item">
        <div
          className="blog-card wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="100ms"
          style={{ "--accent-color": "#ff5528" }}
        >
          <div className="blog-card__image">
            <img
              src="assets/images/blog/blog-2-2.jpg"
              alt="Majority have Suffered Alteration Some"
            />
            <a href="blog-details-right.html" className="blog-card__image__link">
              <span className="sr-only">Majority have Suffered Alteration Some</span>
            </a>
            <div className="blog-card__date">
              <i className="icofont-ui-calendar"></i>02 Sep 2024
            </div>
          </div>
          <div className="blog-card__content">
            <ul className="list-unstyled blog-card__meta">
              <li>
                <a href="blog-list-right.html">
                  <img src="assets/images/blog/blog-author-1-1.jpg" alt="careox" />
                  Admin: Lorat
                </a>
              </li>
              <li>
                <a href="blog-details-right.html">
                  <i className="icofont-comment"></i>Comment (5)
                </a>
              </li>
            </ul>
            <h3 className="blog-card__title">
              <a href="blog-details-right.html">Majority have Suffered Alteration Some</a>
            </h3>
            <p className="blog-card__text">
              We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.
            </p>
            <a href="blog-details-right.html" className="blog-card__link">
              <span className="blog-card__link__front">
                <span className="icofont-double-right"></span>
              </span>
              <span className="blog-card__link__back">
                <span className="icofont-double-right"></span>Read More
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="item">
        <div
          className="blog-card wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="200ms"
          style={{ "--accent-color": "#8139e7" }}
        >
          <div className="blog-card__image">
            <img
              src="assets/images/blog/blog-2-3.jpg"
              alt="It is a long Established Fact a Reader"
            />
            <a href="blog-details-right.html" className="blog-card__image__link">
              <span className="sr-only">It is a long Established Fact a Reader</span>
            </a>
            <div className="blog-card__date">
              <i className="icofont-ui-calendar"></i>02 Sep 2024
            </div>
          </div>
          <div className="blog-card__content">
            <ul className="list-unstyled blog-card__meta">
              <li>
                <a href="blog-list-right.html">
                  <img src="assets/images/blog/blog-author-1-1.jpg" alt="careox" />
                  Admin: Lorat
                </a>
              </li>
              <li>
                <a href="blog-details-right.html">
                  <i className="icofont-comment"></i>Comment (5)
                </a>
              </li>
            </ul>
            <h3 className="blog-card__title">
              <a href="blog-details-right.html">It is a long Established Fact a Reader</a>
            </h3>
            <p className="blog-card__text">
              We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.
            </p>
            <a href="blog-details-right.html" className="blog-card__link">
              <span className="blog-card__link__front">
                <span className="icofont-double-right"></span>
              </span>
              <span className="blog-card__link__back">
                <span className="icofont-double-right"></span>Read More
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="volunteer">
  <div className="container">
    <div className="row">
      <div className="col-xl-5 d-flex align-items-center">
        <div className="volunteer__content">
          <div className="sec-title text-left">
            <h6 className="sec-title__tagline bw-split-in-right">
              <span className="sec-title__tagline__border"></span>HELP THE PEOPLE
            </h6>
            <h3 className="sec-title__title bw-split-in-left">
              Volunteers Around <br /> India
            </h3>
          </div>
          <p className="volunteer__content__text">
            Poor address a range of simply application and infrastructure this
            of passages of available, but the majority have suffered poor
            alteration in some form.
          </p>
          <a href="contact.html" className="careox-btn">
            <span>Join With Us</span>
          </a>
        </div>
      </div>
      <div className="col-xl-7">
        <div className="volunteer__area">
          <div className="volunteer__item volunteer__item--center">
            <a href="team-details.html">
              <img src="assets/images/team/volunter-1-1.jpg" alt="careox" />
            </a>
            <div className="volunteer__item__content">
              <h5 className="volunteer__item__title">
                <a href="team-details.html">Jack Turpin</a>
              </h5>
              <p className="volunteer__item__designation">Founder</p>
            </div>
          </div>
          <div className="volunteer__item">
            <a href="team-details.html">
              <img src="assets/images/team/volunter-1-2.jpg" alt="careox" />
            </a>
            <div className="volunteer__item__content">
              <h5 className="volunteer__item__title">
                <a href="team-details.html">Mark Smith</a>
              </h5>
              <p className="volunteer__item__designation">Volunteer</p>
            </div>
          </div>
          <div className="volunteer__item">
            <a href="team-details.html">
              <img src="assets/images/team/volunter-1-3.jpg" alt="careox" />
            </a>
            <div className="volunteer__item__content">
              <h5 className="volunteer__item__title">
                <a href="team-details.html">Bern Dorey</a>
              </h5>
              <p className="volunteer__item__designation">Volunteer</p>
            </div>
          </div>
          <div className="volunteer__item">
            <a href="team-details.html">
              <img src="assets/images/team/volunter-1-4.jpg" alt="careox" />
            </a>
            <div className="volunteer__item__content">
              <h5 className="volunteer__item__title">
                <a href="team-details.html">John Hines</a>
              </h5>
              <p className="volunteer__item__designation">Volunteer</p>
            </div>
          </div>
          <div className="volunteer__item">
            <a href="team-details.html">
              <img src="assets/images/team/volunter-1-5.jpg" alt="careox" />
            </a>
            <div className="volunteer__item__content">
              <h5 className="volunteer__item__title">
                <a href="team-details.html">Jason Bower</a>
              </h5>
              <p className="volunteer__item__designation">Volunteer</p>
            </div>
          </div>
          <div className="volunteer__item">
            <a href="team-details.html">
              <img src="assets/images/team/volunter-1-6.jpg" alt="careox" />
            </a>
            <div className="volunteer__item__content">
              <h5 className="volunteer__item__title">
                <a href="team-details.html">Phillip Haris</a>
              </h5>
              <p className="volunteer__item__designation">Volunteer</p>
            </div>
          </div>
          <div className="volunteer__item">
            <a href="team-details.html">
              <img src="assets/images/team/volunter-1-7.jpg" alt="careox" />
            </a>
            <div className="volunteer__item__content">
              <h5 className="volunteer__item__title">
                <a href="team-details.html">Jason Roy</a>
              </h5>
              <p className="volunteer__item__designation">Volunteer</p>
            </div>
          </div>
          <div
            className="volunteer__area__border"
            style={{
              backgroundImage: "url(assets/images/shapes/volunter-border.png)"
            }}
          ></div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

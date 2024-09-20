import React from 'react'
import { Link } from 'react-router-dom'
export default function AboutFour() {
  return (
    <>
      <section className="about-four">
            <div className="about-four__shape"><img src="assets/images/shapes/about-4-shape-1.png" alt="careox"/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-four__image wow fadeInLeft" data-wow-delay="100ms">
                            <img src="assets/images/resources/about-4-1.jpg" alt="careox"/>
                            <div className="about-four__image__one">
                                <img src="assets/images/resources/about-4-2.jpg" alt="careox"/>
                            </div>
                            <div className="about-four__image__two">
                                <img src="assets/images/resources/about-4-3.jpg" alt="careox"/>
                            </div>
                            <div className="about-four__image__three">
                                <img src="assets/images/resources/about-4-4.jpg" alt="careox"/>
                                <div className="about-four__image__text"><span>24 +</span> Years Experience</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
                        <div className="about-four__content">
                            <div className="sec-title text-left">

                                <h6 className="sec-title__tagline bw-split-in-right"><span className="sec-title__tagline__border"></span>OUR ABOUT US</h6>

                                <h3 className="sec-title__title bw-split-in-left">We Believe This Lifes About Give For Poor People.</h3>
                            </div>
                            <p className="about-four__content__text">
                                Poor address a range of simply application and infrastructure this of passages of available, but
                                the majority have suffered poor alteration in some form.
                            </p>
                            <div className="about-four__content__highlight">
                                Helped fund 589,537 Projects in 24 Countries, Benefiting over<br/> 45+k Million people.
                            </div>
                            <div className="about-four__content__border"></div>
                            <div className="about-four__content__progress">
                                <div className="about-four__content__progress__bar">
                                    <div className="about-four__content__progress__inner count-bar" data-percent="85%">
                                        <div className="about-four__content__progress__number count-text">85%</div>
                                    </div>
                                </div>
                                <div className="about-four__content__progress__text">
                                    <span>$23,000 Goals</span>
                                    <span>$9,000 Donate</span>
                                </div>
                            </div>
                            <Link to="about.html" className="careox-btn"><span>About More</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

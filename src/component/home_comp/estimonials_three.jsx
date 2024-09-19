import React from 'react'

export default function estimonials_three() {
  return (
    <>
      <section className="testimonials-three">
  <div
    className="testimonials-three__bg"
    style={{ backgroundImage: "url(assets/images/backgrounds/testimonial-bg-3.jpg)" }}
  >
    <div
      className="testimonials-three__bg__shape"
      style={{ backgroundImage: "url(assets/images/shapes/testimonial-bg-3-shape.png)" }}
    ></div>
  </div>
  <div className="container">
    <div
      className="testimonials-three__wrapper"
      style={{ backgroundImage: "url(assets/images/shapes/testimonial-bg-3-inner.png)" }}
    >
      <div className="sec-title text-center">
        <h6 className="sec-title__tagline bw-split-in-right">
          <span className="sec-title__tagline__border"></span>our recent Donors
        </h6>
        <h3 className="sec-title__title bw-split-in-left">What They’re Saying</h3>
      </div>

      {/* Testimonial Thumb */}
      <ul
        className="testimonials-three__carousel-thumb careox-slick__carousel"
        data-slick-options={JSON.stringify({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          centerMode: true,
          asNavFor: ".testimonials-three__carousel",
          focusOnSelect: true,
          dots: false,
          centerPadding: 0,
          arrows: false,
          responsive: [{ breakpoint: 767, settings: { slidesToShow: 3 } }]
        })}
      >
        {/* Testimonial Items */}
        {[
          "assets/images/resources/testi-2-1.jpg",
          "assets/images/resources/testi-2-2.jpg",
          "assets/images/resources/testi-2-3.jpg",
          "assets/images/resources/testi-2-4.jpg",
          "assets/images/resources/testi-2-5.jpg",
          "assets/images/resources/testi-2-6.jpg",
          "assets/images/resources/testi-2-7.jpg"
        ].map((src, idx) => (
          <li key={idx} role="presentation">
            <span className="testimonials-three__meta-thumb">
              <img src={src} alt="careox" />
            </span>
          </li>
        ))}
      </ul>

      {/* Testimonial Carousel */}
      <div
        className="testimonials-three__carousel careox-slick__carousel"
        data-slick-options={JSON.stringify({
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: ".testimonials-three__carousel-thumb",
          autoplay: true,
          dots: false,
          centerPadding: 0,
          arrows: true,
          nextArrow: '<button class="next"><i class="icon-right-arrow-two1"></i></button>',
          prevArrow: '<button class="prev"><i class="icon-right-arrow-two"></i></button>'
        })}
      >
        {/* Testimonial Items */}
        {[
          { name: "Mike Hardson", designation: "Customer", quote: "Poor address a range of simply application and infrastructure...", rating: 5 },
          { name: "Jack Turpin", designation: "Founder", quote: "Poor address a range of simply application and infrastructure...", rating: 5 },
          { name: "Jasmin Weiss", designation: "Co Founder", quote: "Poor address a range of simply application and infrastructure...", rating: 5 },
          { name: "Mark Smith", designation: "Reviewer", quote: "Poor address a range of simply application and infrastructure...", rating: 5 },
          { name: "David Cooper", designation: "Customer", quote: "Poor address a range of simply application and infrastructure...", rating: 5 },
          { name: "Ian Bell", designation: "Reviewer", quote: "Poor address a range of simply application and infrastructure...", rating: 5 },
          { name: "Will Mark", designation: "Customer", quote: "Poor address a range of simply application and infrastructure...", rating: 5 }
        ].map((testimonial, idx) => (
          <div className="item" key={idx}>
            <div className="testimonials-three__item">
              <h5 className="testimonials-three__item__name">{testimonial.name}</h5>
              <span className="testimonials-three__item__designation">{testimonial.designation}</span>
              <div className="testimonials-three__item__ratings">
                {Array.from({ length: testimonial.rating }).map((_, starIdx) => (
                  <i className="icofont-star" key={starIdx}></i>
                ))}
              </div>
              <div className="testimonials-three__item__quote">{testimonial.quote}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </>
  )
}

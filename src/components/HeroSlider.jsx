// HeroSlider.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useState } from "react";

// import HeroDropdown from "./HeroDropdown";
// import HeroShapes from "./HeroShapes";

const slides = [
  {
    title: "Experience Hajj with Ease & Devotion",
    text: "The story of Islam begins with the birth of Muhammad ibn Abdullah in Mecca, a city in the Arabian Peninsula. A global civilization.",
    img: "assets/img/hero/hero_4_1.jpg",
  },
  {
    title: "Experience the Beauty of Quran Recitation",
    text: "The story of Islam begins with the birth of Muhammad ibn Abdullah in Mecca, a city in the Arabian Peninsula. A global civilization.",
    img: "assets/img/hero/hero_4_2.jpg",
  },
  {
    title: "A Divine Call to Peace, Unity, Path",
    text: "The story of Islam begins with the birth of Muhammad ibn Abdullah in Mecca, a city in the Arabian Peninsula. A global civilization.",
    img: "assets/img/hero/hero_4_3.jpg",
  },
];

const HeroSlider = () => {
    
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  useEffect(() => {
    // any additional init (e.g. custom animations) can go here
  }, []);

  return (
    <div className="th-hero-wrapper hero-4" id="hero">
      <Swiper
        className="th-slider hero-slider-4"
        effect="fade"
        modules={[EffectFade, Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ el: ".slider-pagination", clickable: true }}
        loop
        fadeEffect={{ crossFade: true }} // ✅ add this
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="hero-inner">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="hero-style4">
                      <span
                        className="sub-title"
                        data-ani="slideindown"
                        data-ani-delay="0.2s"
                      >
                        <img
                          src="assets/img/theme-img/sub-title4.svg"
                          alt="subtitle"
                        />
                      </span>
                      <h1
                        className="hero-title"
                        data-ani="slideinup"
                        data-ani-delay="0.4s"
                      >
                        {slide.title}
                      </h1>
                      <p
                        className="hero-text"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        {slide.text}
                      </p>
                      <div
                        className="btn-group justify-content-center justify-content-xl-start mt-50"
                        data-ani="slideinup"
                        data-ani-delay="0.8s"
                      >
                        <a href="popular-courses.html" className="th-btn">
                          <span
                            className="btn-text"
                            data-back="Our Packages"
                            data-front="Our Packages"
                          ></span>
                        </a>
                        <a
                          href="https://www.youtube.com/watch?v=ueIOUTyRS84"
                          className="th-btn black-btn popup-video"
                        >
                          <i className="fas fa-play me-2"></i>
                          <span
                            className="btn-text"
                            data-back="Listen Holy Quran"
                            data-front="Listen Holy Quran"
                          ></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className="hero-img-area"
                      data-ani="slideinright"
                      data-ani-delay="0.2s"
                    >
                      <div className="hero-image">
                        <img src={slide.img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom pagination / tabs */}
      
             {/* custom pagination / tabs */}
      {/* <div className="slider-controller">
        <div className="slider-pagination" />
        <div className="hero-thumb">
          {slides.map((_, i) => (
            <button key={i} className={`tab-btn${i === 0 ? " active" : ""}`}>
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div> */}

      {/* prayer times dropdown */}
      {/* <HeroDropdown /> */}

      {/* floating shapes */}
      {/* <HeroShapes /> */}
    </div>
  );
};

export default HeroSlider;

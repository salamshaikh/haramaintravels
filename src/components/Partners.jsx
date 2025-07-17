import React from 'react';

const partnerLogos = [
  'brand_1_1.svg',
  'brand_1_2.svg',
  'brand_1_3.svg',
  'brand_1_4.svg',
  'brand_1_5.svg',
  'brand_1_6.svg',
  'brand_1_1.svg',
  'brand_1_2.svg',
  'brand_1_3.svg',
];

const Partners = () => {
  return (
    <div className="overflow-hidden space overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">PARTNERS</span>
          <h2 className="sec-title">Our Valuable Partners</h2>
        </div>
        <div className="slider-area text-center">
          <div
            className="swiper th-slider"
            id="brandSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"476":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"6"}}}'
          >
            <div className="swiper-wrapper">
              {partnerLogos.map((logo, idx) => (
                <div className="swiper-slide" key={idx}>
                  <div className="brand-card">
                    <div className="brand-img">
                      <img src={`/assets/img/brand/${logo}`} alt="partner logo" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

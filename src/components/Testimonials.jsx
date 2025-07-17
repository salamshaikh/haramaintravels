import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Ahmed Qureshi',
    designation: 'Umrah Pilgrim – Mumbai',
    image: 'testi_1_1.png',
    text:
      'Haramain Travels made my Umrah journey truly unforgettable. From visa processing to hotel arrangements in Makkah and Madinah, everything was seamless. I felt spiritually fulfilled and completely cared for.',
  },
  {
    name: 'Sana Fatima',
    designation: 'Hajj Pilgrim – Hyderabad',
    image: 'testi_1_2.png',
    text:
      'I was nervous about my first Hajj trip, but Haramain Travels guided me every step of the way. Their team was always available, kind, and organized. May Allah reward them for helping so many pilgrims like me.',
  },
  {
    name: 'Mohammed Irfan',
    designation: 'Family Group Leader – Bengaluru',
    image: 'testi_1_3.png',
    text:
      'We traveled as a family of 8 for Umrah and Haramain Travels exceeded our expectations. Clean hotels, reliable transport, and friendly local support in Saudi Arabia. Highly recommend their group packages!',
  },
];


const Testimonials = () => {
  return (
    <section className="testi-area2 overflow-hidden space" id="testi-sec">
      <div className="container">
        <div className="title-area text-center mb-5">
          <span className="sub-title">TESTIMONIALS</span>
          <h2 className="sec-title">Let's Hear From Our Valued Umrah & Hajj Pilgrims</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
          }}
          pagination={{
            el: '.slider-pagination',
            type: 'fraction',
            clickable: true,
          }}
          breakpoints={{
            1200: { slidesPerView: 2 },
          }}
          className="testiSlide2"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testi-box p-4 rounded shadow-sm bg-white position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      src={`/assets/img/testimonial/${item.image}`}
                      alt={item.name}
                      className="rounded-circle me-3"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="mb-0">{item.name}</h5>
                      <small className="text-muted">{item.designation}</small>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/assets/img/shape/logo.png"
                      alt="Logo"
                      style={{ width: '180px' }}
                    />
                  </div>
                </div>
                <p className="mb-4">{item.text}</p>
                <div className="testi-quote">
                  <i className="fa fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Controls */}
        <div className="text-center mt-4">
          <div className="slider-controller d-inline-flex align-items-center gap-4">
            <button className="slider-arrow default slider-prev btn btn-outline-dark rounded-circle">
              <i className="fa fa-arrow-left"></i>
            </button>
            <div className="slider-pagination text-dark"></div>
            <button className="slider-arrow default slider-next btn btn-outline-dark rounded-circle">
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

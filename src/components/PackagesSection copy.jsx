import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const packages = [
  [
  {
    "img": "cousrse_2_1.jpg",
    "title": "July Umrah Package",
    "text": "A spiritual journey with comfort and care, designed for convenience from Delhi.",
    "features": [
      "Direct IndiGo Flight (From Delhi)",
      "Airport-Hotel-Haram Transfers",
      "Umrah Visa + Travel Insurance",
      "Buffet Meals (Tasty & Hygienic)",
      "Laundry Service",
      "5L Zamzam",
      "Umrah Kit",
      "Shared rooms (5-6 per room)",
      "Quality hotels in Makkah & Madinah",
      "24/7 Shuttle to Haram"
    ],
    "price": "INR 80,000",
    "duration": "16 Days",
    "dates": "19 July – 03 August 2025"
  },
  {
    "img": "cousrse_2_2.jpg",
    "title": "Deluxe Umrah Package",
    "text": "Premium Umrah experience with Saudia flights and deluxe hotel stays.",
    "features": [
      "Direct Saudia Flight (Delhi – Jeddah)",
      "Hotels in Makkah (550m) & Madinah (150m)",
      "Umrah Visa + Travel Insurance",
      "Laundry Service",
      "Ziyarah",
      "Airport-Hotel-Haram Transfers",
      "Buffet Meals",
      "5L Zamzam",
      "Umrah Kit",
      "Accommodation Sharing 4/5 Pax in 1 Room"
    ],
    "price": "INR 99,000",
    "duration": "16 Days",
    "dates": "23 August – 07 September 2025"
  }
]

  // {
  //   img: 'cousrse_2_1.jpg',
  //   title: 'Economy Hajj Package',
  //   text: 'Perfect for budget-conscious pilgrims seeking a comfortable, spiritual journey.',
  //   features: [
  //     'Economy hotels within 5–7 km from Haram',
  //     'Air-conditioned transport & group guidance',
  //     'Shared accommodation in Mina & Arafat',
  //     'Religious guidance from experienced scholars',
  //     'Full board meals (Buffet & Boxed Meals)',
  //   ],
  //   price: 'INR 7,50,000',
  //   duration: '22 Days',
  //   dates: '10 June – 01 July 2025',
  // },
  // {
  //   img: 'cousrse_2_2.jpg',
  //   title: 'Silver Hajj Package',
  //   text: 'A comfortable and upgraded Hajj experience with extra convenience.',
  //   features: [
  //     '3-star hotel within 2–3 km from Haram',
  //     'Private air-conditioned buses for transportation',
  //     'Upgraded tents in Mina with air conditioning',
  //     'Full board meals with diverse cuisine',
  //     'Support from expert Islamic scholars',
  //   ],
  //   price: 'INR 2,00,000',
  //   duration: '24 Days',
  //   dates: '08 June – 01 July 2025',
  // },
  // {
  //   img: 'cousrse_2_3.jpg',
  //   title: 'Gold Hajj Package',
  //   text: 'A luxurious Hajj experience for pilgrims seeking premium comfort.',
  //   features: [
  //     '5-star hotels near Haram & Masjid Nabawi',
  //     'VIP air-conditioned transport & dedicated staff',
  //     'Private, air-conditioned tents in Mina',
  //     'Open buffet with international cuisine',
  //     'Exclusive sessions & personalized guidance',
  //   ],
  //   price: 'INR 10,00,000',
  //   duration: '25 Days',
  //   dates: '06 June – 01 July 2025',
  // },
];

const PackagesSection = () => {
  return (
    <div className="space overflow-hidden positive-relative">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">SPECIAL PACKAGES</span>
          <h2 className="sec-title">Our Best Packages</h2>
        </div>
        <div className="slider-area">
          <div className="th-slider has-shadow">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.slider-next',
                prevEl: '.slider-prev',
              }}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="swiper-wrapper"
            >
              {packages.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="cousrse-box">
                    <div className="box-img global-img">
                      <img src={`/assets/img/cousrse/${item.img}`} alt={item.title} />
                      <span className="tag">
                        <i className="fa-sharp fa-solid fa-heart"></i>12K
                      </span>
                    </div>
                    <div className="box-wrapp">
                      <h3 className="box-title">
                        <a href="#packages">{item.title}</a>
                      </h3>
                      <p className="box-text">{item.text}</p>
                    </div>
                    <div className="meta">
                      <span className="icon">
                        <i className="fa-solid fa-plane-departure"></i> Saudi Airlines
                      </span>
                      <div className="divider"></div>
                      <div className="icon">
                        <i className="fa-sharp fa-light fa-clock"></i> Tour Guide
                      </div>
                      <div className="divider"></div>
                      <div className="icon">
                        <i className="fa-regular fa-hotel"></i> Hotel Class: {item.title.includes('Gold') ? '5★' : item.title.includes('Silver') ? '3★' : '2★'}
                      </div>
                    </div>

                    <div className="box-content">
                      <div className="available-list">
                        <ul>
                          {item.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="package-info mt-3 mb-2">
                        <p><strong>Duration:</strong> {item.duration}</p>
                        <p><strong>Dates:</strong> {item.dates}</p>
                      </div>
                      <div className="btn-group justify-content-between">
                        <h4 className="price">{item.price}</h4>
                        <a
                          className="th-btn"
                          href={`https://wa.me/918979086182?text=I'm interested in booking the ${encodeURIComponent(item.title)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper Arrows */}
            <button className="slider-arrow style2 slider-prev">
              <i className="fa-thin fa-arrow-left-long"></i>
            </button>
            <button className="slider-arrow style2 slider-next">
              <i className="fa-thin fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;

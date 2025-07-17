import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: 'service_4_1.svg',
      number: '01',
      title: 'Hajj Package',
      description: 'All-inclusive Hajj tours with expert guides, VIP accommodations, and seamless rituals in the holiest sites.',
      price: '₹3,20,000',
      duration: '25 Days',
      dates: '15 June – 10 July 2025',
    },
    {
      icon: 'service_4_2.svg',
      number: '02',
      title: 'Umrah Package',
      description: 'Flexible Umrah packages round the year with visa processing, flights, hotel, meals, and ground transport.',
      price: '₹80,000',
      duration: '16 Days',
      dates: '19 July – 03 August 2025',
    },
    {
      icon: 'service_4_3.svg',
      number: '03',
      title: 'Health Check-Up Support',
      description: 'Pre-departure medical check-up assistance and travel health advisory to ensure a safe journey.',
      price: 'Included',
      duration: 'Pre-Trip',
      dates: 'Before Departure',
    },
    {
      icon: 'service_4_4.svg',
      number: '04',
      title: 'Community Services',
      description: 'Educational sessions, spiritual counseling, and group sessions for spiritual readiness and bonding.',
      price: 'Free',
      duration: 'Ongoing',
      dates: 'Monthly Events',
    },
    {
      icon: 'service_4_5.svg',
      number: '05',
      title: 'Badal Hajj',
      description: 'Badal Hajj arrangements for deceased or ill individuals with proper documentation and certified pilgrims.',
      price: '₹1,25,000',
      duration: 'Performed by Proxy',
      dates: 'Hajj Season 2025',
    },
    {
      icon: 'service_4_6.svg',
      number: '06',
      title: 'Al Aqsa Tour',
      description: 'Faith-filled guided tours to Masjid Al-Aqsa in Palestine with historical insights and spiritual focus.',
      price: '₹1,50,000',
      duration: '10 Days',
      dates: '01 – 10 Nov 2025',
    },
  ];

  return (
    <section className="service-area space" id="service-sec">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-xxl-4">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title">SERVICES</span>
              <h2 className="sec-title">What We Offer</h2>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <a href="#service-sec" className="th-btn th-icon">
                <span className="btn-text" data-back="All Services" data-front="All Services"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="row gy-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-6 col-xl-4" key={index}>
              <div className="service-box3">
                <div className="box-inner">
                  <div className="box-icon">
                    <img src={`/assets/img/icon/${service.icon}`} alt={`${service.title} Icon`} />
                  </div>
                  <div className="box-number">{service.number}</div>
                </div>
                <div className="service-content">
                  <h3 className="box-title">
                    <a href="#service-sec">{service.title}</a>
                  </h3>
                  <p className="box-text">{service.description}</p>

                  {/* Dynamic Info */}
                  {/* <ul className="service-meta list-unstyled mb-3">
                    <li><strong>Price:</strong> {service.price}</li>
                    <li><strong>Duration:</strong> {service.duration}</li>
                    <li><strong>Dates:</strong> {service.dates}</li>
                  </ul> */}

                  {/* Buttons */}
                  <div className="d-flex justify-content-between align-items-center">
                    {/* <a href="#service-sec" className="line-btn">
                      Read More <i className="fa-light fa-arrow-right-long ms-2"></i>
                    </a> */}
                    <a
                      href={`https://wa.me/918979086182?text=I'm interested in the ${encodeURIComponent(service.title)}.`}
                      className="th-btn small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

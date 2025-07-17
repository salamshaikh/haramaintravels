import React, { useState } from 'react';

const AboutSection = () => {

  return (
    <div className="about-area overflow-hidden space" id="about-sec">
      <div className="container">
        <div className="row gy-5">
          {/* Left side – Text and Images */}
          <div className="col-xl-6">
            <div className="ps-xxl-3">
              <div className="title-area">
                <span className="sub-title">About Us</span>
                <h2 className="sec-title">
                  Journey to the Sacred – <span>With Haramain Travels</span>
                </h2>
              </div>
              <div className="img-box3 pe-xl-5 me-xl-2">
                <div className="img-box3-area">
                  <div className="img3 global-img">
                    <img src="/assets/img/normal/about_2_2.jpg" alt="About" />
                  </div>
                  <div className="img-wrapp">
                    <div className="img1 global-img">
                      <img src="/assets/img/normal/about_2_1.jpg" alt="About" />
                    </div>
                    <div className="img2 global-img">
                      <img src="/assets/img/normal/about_2_3.jpg" alt="About" />
                    </div>
                  </div>
                </div>
                <div className="discount-wrapp">
                  <div className="logo">
                    <img src="/assets/img/small-logo2.svg" alt="logo" />
                  </div>
                  <div className="discount-tag">
                    <span className="discount-anime">Haramain Travels • Umrah & Hajj</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side – Description, Features, CTA, Video */}
          <div className="col-xl-6 mb-30 mb-xl-0">
            <p className="mt-n2 mb-15 fs-18">
              Haramain Travels is committed to making your pilgrimage spiritually uplifting and completely hassle-free.
              With years of experience in organizing Hajj & Umrah tours, we ensure that every step of your journey is seamless and sacred.
            </p>
            <p className="fs-18">
              From visa processing to luxury accommodation near the Haramain, our dedicated team supports you before, during, and after your pilgrimage — because for us, your journey is our responsibility.
            </p>

            {/* Feature Icons */}
            <div className="about-wrapper2 mt-40">
              {[
                {
                  title: 'Comfort-Focused Umrah Packages',
                  text: 'Designed for spiritual enrichment and physical ease throughout your sacred journey.',
                },
                {
                  title: 'Trusted Visa & Travel Experts',
                  text: 'End-to-end support with documentation, insurance, and flight arrangements.',
                },
                {
                  title: 'Premium Accommodation',
                  text: 'Handpicked hotels in Makkah & Madinah with shuttle access to Haram.',
                },
                {
                  title: '24x7 Support During Travel',
                  text: 'Our team is always one call away — on WhatsApp or on-ground.',
                },
              ].map((item, i) => (
                <div key={i} className="about-feature ">
                  <div className="box-icon">
                    <img src={`/assets/img/icon/about_2_${i + 1}.svg`} alt="Icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">{item.title}</h3>
                    <p className="box-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA + Call */}
            <div className="btn-group mt-40 mb-20 mb-xl-0">
              <a href="#services" className="th-btn style2">
                <span className="btn-text" data-back="Discover More" data-front="Discover More"></span>
              </a>
              <div className="call-info">
                <div className="call-icon">
                  <a href="tel:+918979086182">
                    <i className="fa-solid fa-phone-volume"></i>
                  </a>
                </div>
                <div className="media-body">
                  <span className="call-label">24/7 Support</span>
                  <p className="call-link">
                    <a href="tel:+918979086182">+91 89790 86182</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Video Lightbox */}
           {/* ✅ Replacement for Video Lightbox */}
          <div className="video-wrapp" style={{ backgroundImage: "url('/assets/img/shape/about-shape2.png')" }}>
            <div
              className="video-image style2"
              style={{ backgroundImage: "url('/assets/img/bg/video_bg_2.jpg')" }}
            >
              <a
                href="https://www.youtube.com/watch?v=ueIOUTyRS84"
                target="_blank"
                rel="noopener noreferrer"
                className="play-btn"
              >
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

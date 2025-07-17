import React from 'react';

const Footer = () => {
  return (
    <footer
      className="footer-wrapper footer-layout3"
      style={{
        backgroundImage: "url(/assets/img/bg/footer_bg_3.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">

            {/* About + Social */}
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="#hero">
                      <img src="/assets/img/logo.png" alt="haramain-travels" />
                    </a>
                  </div>
                  <p className="about-text">
                    Haramain Travels is your trusted partner for spiritual journeys. We offer premium Hajj and Umrah services with a commitment to comfort, care, and guidance every step of the way.
                  </p>
                  <div className="th-social">
                    <span className="title">Follow Us:</span>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://wa.me/918979086182" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <ul className="menu">
                  <li><a href="#services">Umrah Packages</a></li>
                  <li><a href="#services">Hajj Services</a></li>
                  <li><a href="#services">Visa & Flight Booking</a></li>
                  <li><a href="#services">Local Transportation</a></li>
                  <li><a href="#services">Hotel Accommodation</a></li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <ul className="menu">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#faq">FAQs</a></li>
                  <li><a href="#packages">July 2025 Umrah</a></li>
                  <li><a href="#contact">Contact Support</a></li>
                  <li><a href="#contact">Terms & Policies</a></li>
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Support</h3>
                <ul className="menu">
                  <li><a href="#contact">Help Center</a></li>
                  <li><a href="#faq">How to Book</a></li>
                  <li><a href="#contact">Talk to Us</a></li>
                  <li><a href="#contact">Payment Assistance</a></li>
                  <li>
                    <a href="https://wa.me/918979086182" target="_blank" rel="noopener noreferrer">
                      WhatsApp Chat
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Recent Trips</h3>
                <div className="sidebar-gallery">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div className="gallery-thumb" key={num}>
                      <img src={`/assets/img/widget/gallery_1_${num}.jpg`} alt={`Trip ${num}`} />
                      <a
                        href={`/assets/img/widget/gallery_1_${num}.jpg`}
                        className="gallery-btn popup-image"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="copyright-wrap"
        style={{
          backgroundImage: "url(/assets/img/bg/copyright_shape_1.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          <div className="row gy-2 align-items-center">
            <div className="col-lg-5">
              <p className="copyright-text">
                &copy; 2025 Haramain Travels. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#disclaimer">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="th-header header-layout6">
      {/* Top Header */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-md-between align-items-center gy-2">
            <div className="col-auto d-none d-md-block">
              <div className="header-links">
                <ul>
                  <li><i className="far fa-phone"></i><a href="tel:+918979086182">+91-8979086182</a></li>
                  <li className="d-none d-xl-inline-block">
                    <i className="far fa-location-dot"></i>Unit No. 2, Golden Pearl Guest House, Medical Road, Aligarh, UP – 202001
                  </li>
                  <li><i className="far fa-envelope"></i><a href="mailto:info@haramaintravels.in">info@haramaintravels.in</a></li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-links">
                <ul>
                  <li>
                    <div className="header-social">
                      <span className="social-title">Follow Us:</span>
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Menu */}
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container">
            <div className="row gx-20 justify-content-between align-items-center">
              {/* Logo */}
              <div className="col-auto">
                <div className="header-logo ">
                  <a href="#hero">
                    <img src="assets/img/logo.png" alt="Haramain Logo" />
                  </a>
                  <span className="shape"></span>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-auto">
                <div className="row align-items-center">
                  <div className="col-auto">
                    {/* Desktop Menu */}
                    <nav className="main-menu d-none d-lg-inline-block">
                      <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#booking">Booking</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#donate">Donate</a></li>
                        <li><a href="#contact">Contact</a></li>
                      </ul>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                      onClick={() => setMenuOpen(!menuOpen)}
                      aria-label="Toggle Menu"
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>

                  {/* CTA Button */}
                  <div className="col-auto d-none d-xl-block">
                    <div className="header-button">
                      <a href="#booking" className="th-btn style2 th-icon">
                        <span className="btn-text" data-back="Book Now" data-front="Book Now"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="mobile-menu d-lg-none mt-3">
                <ul>
                  <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
                  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                  <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                  <li><a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a></li>
                  <li><a href="#booking" onClick={() => setMenuOpen(false)}>Booking</a></li>
                  <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
                  <li><a href="#donate" onClick={() => setMenuOpen(false)}>Donate</a></li>
                  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;

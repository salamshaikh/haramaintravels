import React from 'react';
import CountUp from 'react-countup';

const DonationBanner = () => {
  return (
    <section
      className="donation-area5 overflow-hidden mb-4"
      data-pos-for=".footer-layout3"
      data-sec-pos="bottom-half"
    >
      <div className="container">
        <div className="donation-area3">
          <div className="row align-items-center justify-content-center justify-content-xl-between">

            {/* Counter Block */}
            <div className="col-xl-4">
              <div className="donate-counter-area2">
                <span className="text">Goal:</span>
                <h3 className="box-number">
                  Rs &nbsp;
                  <span className="counter-number">
                    <CountUp end={8000000} duration={3} separator="," />
                  </span>
                </h3>

                <span className="text">Raised:</span>
                <h3 className="box-number">
                  Rs &nbsp;
                  <span className="counter-number">
                    <CountUp end={6000000} duration={3} separator="," />
                  </span>
                </h3>

                <div className="feature-circle">
                  <div className="progressbar" data-path-color="#03060E">
                    <div className="circle" data-percent="75">
                      <div className="circle-num"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text & Button */}
            <div className="col-xl-4">
              <div className="title-area text-center">
                <span className="sub-title style2">Donation Today</span>
                <h2 className="sec-title text-white">support us, for rebuild the mosque</h2>
              </div>
              <div className="mt-40 text-center">
                <a href="#booking" className="th-btn style1">
                  <span className="btn-text" data-back="Donate Now" data-front="Donate Now"></span>
                </a>
              </div>
            </div>

            {/* Image Block */}
            <div className="col-xl-4">
              <div className="donation-image">
                <div className="img1" data-bg-src="assets/img/shape/donate-shape4.png">
                  <img src="assets/img/normal/donation-img.jpg" alt="donation" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationBanner;

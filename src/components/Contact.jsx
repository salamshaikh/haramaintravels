import React from 'react';

const Contact = () => {
  return (
    <div>
      
      {/* ============ Contact Info Area ============ */}
      <div className="space">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4 col-lg-6">
              <div className="contact-media">
                <div className="icon-btn"><i className="fa-solid fa-location-dot"></i></div>
                <div className="media-body">
                  <h5 className="box-title">Our Office</h5>
                  <p className="box-text">
                    Unit No. 2, Golden Pearl Guest House,
                    Medical Road, Aligarh, UP – 202001
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="contact-media">
                <div className="icon-btn"><i className="fa-solid fa-phone-volume"></i></div>
                <div className="media-body">
                  <h5 className="box-title">Call Us</h5>
                  <p className="box-text">
                    <a href="tel:+918979086182">+91-8979086182</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="contact-media">
                <div className="icon-btn"><i className="fa-solid fa-envelope"></i></div>
                <div className="media-body">
                  <h5 className="box-title">Email</h5>
                  <p className="box-text">
                    <a href="mailto:info@haramaintravels.in">info@haramaintravels.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Contact Form ============ */}
      <div className="space-bottom">
        <div className="container">
          <div className="row gx-0 gy-4">
            <div className="col-xl-6">
              <form className="contact-form2 input-smoke ajax-contact">
                <h3 className="h2">Send Us a Message</h3>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="name" placeholder="Your Name*" required />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="tel" className="form-control" name="number" placeholder="Phone Number*" required />
                  </div>
                  <div className="form-group col-12">
                    <input type="email" className="form-control" name="email" placeholder="Email Address*" required />
                  </div>
                  <div className="form-group col-12">
                    <select name="service" className="form-select nice-select" required>
                      <option value="" disabled selected hidden>Select Service</option>
                      <option value="umrah-economy">Umrah Economy Package</option>
                      <option value="umrah-premium">Umrah Premium Package</option>
                      <option value="hajj-economy">Hajj Economy Package</option>
                      <option value="hajj-gold">Hajj Gold Package</option>
                      <option value="ziyarat-tour">Ziyarat Tour</option>
                      <option value="visa">Visa Assistance</option>
                      <option value="flight">Flight Booking</option>
                      <option value="hotel">Hotel Booking</option>
                    </select>
                  </div>
                  <div className="form-group col-12">
                    <textarea name="message" cols="30" rows="4" className="form-control" placeholder="Your Message*" required></textarea>
                  </div>
                  <div className="form-btn col-12">
                    <button className="th-btn" type="submit">
                      <span className="btn-text" data-back="Send Message" data-front="Send Message"></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-6">
              <div className="contact-image">
                <img src="assets/img/normal/contact-image.jpg" alt="Contact Haramain Travels" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Google Map ============ */}
      <div className="contact-map">
        <iframe
          title="Haramain Travels Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.361618540435!2d78.07410347593784!3d27.18254524876813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747c7fc9e2c00d%3A0xa4d42076e37830a1!2sMedical%20Road%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001%2C%20India!5e0!3m2!1sen!2sin!4v1721036000000"
          style={{ width: '100%', height: '500px', border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="contact-icon">
          <img src="assets/img/icon/location-dot.svg" alt="location marker" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

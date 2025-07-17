import React from 'react';

const faqList = [
  {
    question: 'What packages do you offer for Hajj and Umrah?',
    answer:
      'Haramain Travels offers Economy, Premium, and Customized packages for both Hajj and Umrah, which include visa processing, flights, hotel accommodations near Haram, and guided Ziyarat tours.',
  },
  {
    question: 'Are flights and hotel bookings included in your packages?',
    answer:
      'Yes, all our Hajj and Umrah packages include round-trip flight bookings, premium or budget hotel options in Makkah and Madinah, and full ground transport within Saudi Arabia.',
  },
  {
    question: 'Can I customize my travel itinerary or package?',
    answer:
      'Absolutely. We offer tailored packages to suit individual and group needs. You can customize your dates, hotel class, transport preferences, and even add Ziyarat or tourist extensions.',
  },
  {
    question: 'Do you assist with Saudi visa processing?',
    answer:
      'Yes, our team takes care of the entire visa application process including documentation, submission, and follow-up for both Hajj and Umrah pilgrims.',
  },
  {
    question: 'Is group travel available for families or communities?',
    answer:
      'Yes. We specialize in group bookings for families, mosques, and community organizations. Our packages include group coordination, private buses, and multilingual guides.',
  },
  {
    question: 'What is your cancellation or refund policy?',
    answer:
      'Refunds are subject to visa processing status, airline policies, and accommodation bookings. Our support team ensures transparent guidance for cancellations and rescheduling.',
  },
  {
    question: 'Do you provide ground support in Saudi Arabia?',
    answer:
      'Yes, we have dedicated staff and partners in Makkah and Madinah who assist pilgrims with check-ins, transport, group coordination, and any urgent needs during the trip.',
  },
  {
    question: 'Can elderly or physically challenged pilgrims travel with you?',
    answer:
      'Yes. We offer wheelchair-accessible services, slow-paced itineraries, medical assistance, and on-ground caretakers for elderly or differently-abled pilgrims.',
  },
];


const FAQSection = () => {
  return (
    <div className="faq-sec overflow-hidden space" id="faq-sec">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-xl-5">
            <div className="title-area pe-xxl-5 me-xxl-5">
              <span className="sub-title">FAQ’S</span>
              <h2 className="sec-title">Frequently Asked Questions About Our Programs</h2>
            </div>
            <p className="pe-xl-5 me-xl-5">
              Have any questions? Don’t hesitate to contact us! From the Holy Mosques to seamless airport transfers and
              personalized support. Islam granted women rights to education, inheritance, and financial independence
              over 1,400 years ago. Women are honored and respected in Islamic teachings.
            </p>
            <div className="btn-group mt-55">
              <a href="#booking" className="th-btn">
                <span className="btn-text" data-back="Get Free Consultation" data-front="Get Free Consultation" />
              </a>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="col-xl-7 mt-35 mt-xl-0">
            <div className="faq-area">
              <div className="accordion-area accordion" id="faqAccordion">
                {faqList.map((faq, index) => (
                  <div
                    className={`accordion-card ${index === 1 ? 'active' : ''}`}
                    key={`faq-${index}`}
                  >
                    <div className="accordion-header" id={`heading-${index}`}>
                      <button
                        className={`accordion-button ${index === 1 ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${index}`}
                        aria-expanded={index === 1 ? 'true' : 'false'}
                        aria-controls={`collapse-${index}`}
                      >
                        <span>{index + 1}.</span> {faq.question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${index}`}
                      className={`accordion-collapse collapse ${index === 1 ? 'show' : ''}`}
                      aria-labelledby={`heading-${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Illustration Image */}
        <div className="shape-mockup d-none d-xxl-block" data-bottom="7%" data-left="20%">
          <img src="/assets/img/normal/faq-img.png" alt="faq illustration" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Inquiry and Consultation',
    text: 'Reach out to our team via phone or WhatsApp to discuss the best Umrah or Hajj package for your needs.',
  },
  {
    number: '02',
    title: 'Documentation Submission',
    text: 'Send us your passport copy, photos, PAN card, and required documents for visa processing and booking.',
  },
  {
    number: '03',
    title: 'Payment and Confirmation',
    text: 'Make payment through secure channels. You’ll receive an official booking confirmation and travel itinerary.',
  },
  {
    number: '04',
    title: 'Perform Your Holy Pilgrimage',
    text: 'Travel with peace of mind. Enjoy our guided services and focus fully on your spiritual journey.',
  },
];

const ProcessSteps = () => {
  return (
    <section className="process-area space overflow-hidden position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-7">
            <div className="title-area text-center">
              <span className="sub-title">HOW IT WORKS</span>
              <h2 className="sec-title">Embarking Your Sacred Umrah Venture Since 2003</h2>
            </div>
          </div>
        </div>

        {/* Step Cards */}
        <div className="row gy-4">
          {steps.map((step, idx) => (
            <div className="col-md-6 col-xl-3 process-card_wrapp" key={idx}>
              <div className="process-card">
                <span className="number">{step.number}</span>
                <div className="box-content">
                  <h2 className="box-title">{step.title}</h2>
                  <p className="box-text">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="shape-mockup jump d-none d-xl-block" data-top="14%" data-right="10%">
        <img src="/assets/img/shape/shape-13.svg" alt="shape" />
      </div>
    </section>
  );
};

export default ProcessSteps;

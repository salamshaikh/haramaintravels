import React, { useState } from 'react';
import CountUp from 'react-countup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const serviceOptions = [
  { value: 'umrah-economy', label: 'Umrah Economy Package' },
  { value: 'umrah-premium', label: 'Umrah Premium Package' },
  { value: 'hajj-economy', label: 'Hajj Economy Package' },
  { value: 'hajj-gold', label: 'Hajj Gold Package' },
  { value: 'visa-assistance', label: 'Visa Assistance' },
  { value: 'flight-booking', label: 'Flight Booking' },
  { value: 'hotel-booking', label: 'Hotel Booking (Makkah/Madinah)' },
  { value: 'ziyarat-tour', label: 'Ziyarat Tour (Optional)' },
];

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    passport: '',
    service: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.number.trim() || form.number.length < 10) newErrors.number = 'Valid phone number is required';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.passport.trim()) newErrors.passport = 'Passport number is required';
    if (!form.service) newErrors.service = 'Please select a service';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix form errors.");
      return;
    }

    const fullName = form.name.trim().split(' ');
    const firstName = fullName[0];
    const lastName = fullName.slice(1).join(' ') || 'Client';
    const selectedService = serviceOptions.find(opt => opt.value === form.service);

    const zohoData = new FormData();
    zohoData.append('First Name', firstName);
    zohoData.append('Last Name', lastName);
    zohoData.append('Email', form.email);
    zohoData.append('Mobile', form.number);
    zohoData.append('City', form.address);
    zohoData.append('Description', `
      Service: ${selectedService?.label || ''}
      Passport No: ${form.passport}
    `);

    // Required Zoho hidden fields
    zohoData.append('xnQsjsdp', 'bf783a3b8d3d87e1d7263f744d301e258b1b414a38a8dc5043142ddf30dc67ad');
    zohoData.append('xmIwtLD', '555b903c7fbf65f646063e230e255a5b698f6ab0100917f4956706f966756634196a6ce3f033ed8c5dd60d4506bff9c4');
    zohoData.append('actionType', 'TGVhZHM=');
    zohoData.append('returnURL', 'https://haramaintravels.in/thank-you');

    fetch('https://crm.zoho.in/crm/WebToLeadForm', {
      method: 'POST',
      body: zohoData,
      mode: 'no-cors'
    })
      .then(() => {
        toast.success("Submitted to Zoho successfully!");
        setForm({
          name: '',
          email: '',
          number: '',
          address: '',
          passport: '',
          service: null,
        });
        setErrors({});
      })
      .catch(() => {
        toast.error("Failed to submit to Zoho. Please try again.");
      });
  };

  return (
    <section className="overflow-hidden py-5 my-5" data-pos-for=".video-area" data-sec-pos="top-half">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">
        <div className="package-area">
          <div className="package-wrapp">
            <form onSubmit={handleSubmit} className="package-form">
              <div className="title-area mb-40">
                <span className="sub-title style2">YOUR PATH TO UMRAH SERENITY</span>
                <h2 className="sec-title">Book Your Pilgrims</h2>
              </div>

              <div className="row gx-16">
                {[
                  { name: 'name', placeholder: 'Full Name' },
                  { name: 'email', placeholder: 'Enter Email', type: 'email' },
                  { name: 'number', placeholder: 'Phone Number', type: 'tel' },
                  { name: 'address', placeholder: 'Your Address' },
                  { name: 'passport', placeholder: 'Passport Number' }
                ].map(({ name, placeholder, type = 'text' }) => (
                  <div key={name} className="form-group col-md-6">
                    <input
                      type={type}
                      className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                      name={name}
                      placeholder={placeholder}
                      value={form[name]}
                      onChange={handleChange}
                    />
                    {errors[name] && <div className="invalid-feedback d-block">{errors[name]}</div>}
                  </div>
                ))}

                <div className="form-group col-12 mb-4">
                  <select
                    className={`form-control text-dark tw-w-full tw-px-4 tw-py-2 tw-border tw-rounded-md ${
                      errors.service ? 'tw-border-red-500' : 'tw-border-gray-300'
                    }`}
                    style={{
                      color: '#000',
                      backgroundColor: '#fff',
                    }}
                    name="service"
                    value={form.service || ''}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, service: e.target.value }))
                    }
                  >
                    <option value="">Select Services</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <div className="invalid-feedback d-block">{errors.service}</div>
                  )}
                </div>

                <div className="form-btn col-12 mt-3">
                  <button type="submit" className="th-btn style1 w-100">
                    <span className="btn-text" data-back="Apply Now" data-front="Apply Now"></span>
                  </button>
                </div>
              </div>
            </form>

            <div className="package-counter-wrapp mt-40">
              {[
                { value: 98, suffix: '%', label: 'Customer Satisfaction' },
                { value: 450, suffix: 'k', label: 'Umrah Pilgrims' },
                { value: 250, suffix: 'k', label: 'Hajj Pilgrims' },
                { value: 45, suffix: '%', label: 'Awards Agency' },
              ].map((item, idx) => (
                <div className="counter-box" key={idx}>
                  <div className="box-number">
                    <CountUp end={item.value} duration={2} />{item.suffix}
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">{item.label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

import React, { useState, useEffect } from 'react';

// Define the form configuration for each visa type
const formConfigurations = {
  Morocco: {
    fee: 'Aed335',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo',
      'E statement'
    ]
  },
  Vietnam: {
    fee: 'Aed130',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo',
      'E statement'
    ]
  },
  Cambodia: {
    fee: 'Aed180',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo',
      'E statement'
    ]
  },
  Qatar: {
    fee: 'Aed135 + 50 insurance mandatory',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo',
      'E statement'
    ]
  },
  Bahrain: {
    fee: 'Aed125',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo',
      'E statement'
    ]
  },
  Oman: {
    fee: 'Aed75',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo',
      'E statement'
    ],
    entry: 'Single Entry'
  },
  Malaysia: {
    fee: 'Aed175',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo',
      'E statement'
    ],
    entry: 'Single Entry'
  },
  'United Kingdom 6 months': {
    fee: 'Aed950',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo'
    ],
    submission: 'Consulate submission 6 months case'
  },
  'United Kingdom 2 years': {
    fee: 'Aed2400',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo'
    ],
    submission: 'Consulate submission 2 Years case'
  },
  Saudi: {
    fee: 'Aed450',
    requirements: [
      'Passport copy',
      'Emirates ID',
      'Visa page',
      '1 photo'
    ],
    entry: 'Multi Entry 1 year'
  }
};

// Component to render the form
const DynamicVisaForm = ({ visaType }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });
  const [visaConfig, setVisaConfig] = useState(null);

  useEffect(() => {
    // Set visa form configuration based on visaType prop
    if (formConfigurations[visaType]) {
      setVisaConfig(formConfigurations[visaType]);
    }
  }, [visaType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add logic to handle form submission, e.g., sending data to an API
  };

  if (!visaConfig) {
    return <div>Select a valid visa type.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      {visaConfig && (
        <>
          <div>
            <label>Visa Type:</label>
            <p>{visaType}</p>
          </div>
          <div>
            <label>Fee:</label>
            <p>{visaConfig.fee}</p>
          </div>
          <div>
            <label>Requirements:</label>
            <ul>
              {visaConfig.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {visaConfig.entry && (
            <div>
              <label>Entry:</label>
              <p>{visaConfig.entry}</p>
            </div>
          )}
          {visaConfig.submission && (
            <div>
              <label>Submission:</label>
              <p>{visaConfig.submission}</p>
            </div>
          )}
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicVisaForm;

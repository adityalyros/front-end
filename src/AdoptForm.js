// AdoptForm.js
import React, { useState } from 'react';
import './AdoptForm.css';


const AdoptForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    questionnaire: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, such as saving data to indexed DB
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adopt A Pet</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <label htmlFor="questionnaire">Questionnaire:</label>
      <textarea
        id="questionnaire"
        name="questionnaire"
        value={formData.questionnaire}
        onChange={handleChange}
        required
      />
      <button type="submit">Request for Adoption</button>
    </form>
  );
};

export default AdoptForm;

// AdoptionSection.js
import React from 'react';
import AdoptForm from './AdoptForm';

const AdoptionSection = () => {
  const handleAdoptClick = () => {
    // Handle adopt button click
  };

  return (
    <section>
      <h2>Adoption Section</h2>
      <AdoptForm/>
      <button onClick={handleAdoptClick}>Adopt</button>
      {/* Additional adoption section content */}
    </section>
  );
};

export default AdoptionSection;

// GiveAwaySection.js
import React from 'react';
import GiveAwayForm from './GiveAwayForm';
import PetList from './Components/PetList';

const GiveAwaySection = () => {
  const handleGiveAwayClick = () => {
    // Handle give away button click
  };

  return (
    <section>
      <h2>Give Away Section</h2>
      <PetList/>
      <GiveAwayForm/>
      <button onClick={handleGiveAwayClick}>Give Away</button>
      {/* Additional give away section content */}
    </section>
  );
};

export default GiveAwaySection;

// PetList.js
import React, { useState } from 'react';
import './PetList.css'

const PetList = () => {
  const [pets, setPets] = useState([
    { id: 1, name: 'Max', breed: 'Labrador', age: 3 },
    { id: 2, name: 'Bella', breed: 'Poodle', age: 2 },
    // Add more pets as needed
  ]);

  const renderPets = () => {
    return pets.map((pet) => (
      <div key={pet.id} className="pet">
        <h3>{pet.name}</h3>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Age:</strong> {pet.age}</p>
      </div>
    ));
  };

  return (
    <div className="pet-list">
      <h2>Available Pets</h2>
      {renderPets()}
    </div>
  );
};

export default PetList;

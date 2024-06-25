import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import villainous from '../data/Villainous';

function VillanousRandomSelector() {
  const [selectedVillain, setSelectedVillain] = useState(null);

  const selectRandomVillain = () => {
    const randomIndex = Math.floor(Math.random() * villainous.length);
    setSelectedVillain(villainous[randomIndex]);
  };

  return (
    <>
      <div>VillanousRandomSelector</div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button onClick={selectRandomVillain}>Seleccionar Villano Aleatorio</button>
      {selectedVillain && (
        <div key={selectedVillain.id}>
          <h3>{selectedVillain.name}</h3>
        </div>
      )}
    </>
  );
}

export default VillanousRandomSelector;
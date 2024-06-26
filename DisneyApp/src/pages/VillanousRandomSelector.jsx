import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import villainous from '../data/Villainous';
import './villainousRandomSelector.css'


const imageBasePath = "src/assets/avatar/"

function VillanousRandomSelector() {
  const [selectedVillain, setSelectedVillain] = useState(villainous);

  const selectRandomVillain = () => {
    const randomIndex = Math.floor(Math.random() * villainous.length);
    setSelectedVillain(villainous[randomIndex]);
  };
  
  return (
    <>
      <h1>Random Selector</h1>
     

      <button>
        <Link to="/">Home</Link>
      </button>

      <button onClick={selectRandomVillain}>Seleccionar Villano Aleatorio</button>

      {selectedVillain && (
        <div key={selectedVillain.id}>
          <h3>{selectedVillain.name}</h3>
          <img
            src={`${imageBasePath}${selectedVillain.image}`}
            alt={selectedVillain.name} />
        </div>
        
      )}
    </>
  );
}

export default VillanousRandomSelector;
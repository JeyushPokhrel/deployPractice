import React, { useState } from 'react';

const RoseGarden = ({ setStep }) => {
  const [memory, setMemory] = useState('');

  // Define the rose "memory" for each rose clicked
  const showMemory = (memoryText) => {
    setMemory(memoryText);
  };

  // Generate a dynamic number of roses to fill the screen
  const numRoses = 50; // Number of roses to fill the screen

  return (
    <div className="rose-garden">
      {Array.from({ length: numRoses }).map((_, index) => (
        <div 
          key={index} 
          className="rose" 
          onClick={() => showMemory(`Memory #${index + 1}`)}
        >
          🌹
        </div>
      ))}

      {/* Display memory when a rose is clicked */}
      {memory && <p className="memory">{`Our special memory: ${memory}`}</p>}

     
    </div>
  );
}

export default RoseGarden;

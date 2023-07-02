import React, { useState } from 'react';
import './App.css';
import { hexColors } from './colors';

function App() {
  const [boxColors, setBoxColors] = useState(hexColors);

  const shuffleColors = () => {
    const shuffledColors = [...hexColors].sort(() => Math.random() - 0.5);
    setBoxColors(shuffledColors);
  };

  return (
    <div className="grid-container">
      {boxColors.map((hexColor, index) => (
        <div
          key={index}
          className={`item${index}`}
          style={{ backgroundColor: hexColor }}
          onClick={shuffleColors}
        >
          {`${index+1}`}
        </div>
      ))}
    </div>
  );
}

export default App;

import React from 'react';
import ironhack from '../ironhack.png.webp';

function Homepage() {
  return (
    <div className="App">
      <div id="ironhack">
        <img src={ironhack} alt="ironhack" />
        <h1>Welcome to the Fastest Material-UI Workshop</h1>
      </div>
    </div>
  );
}

export default Homepage;

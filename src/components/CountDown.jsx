// src/components/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(10); // Set your countdown time here

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer); // Cleanup interval on unmount
    }
  }, [timeLeft]);

  return (
    <div className="countdown">
      <h2>Countdown to Our Special Day:</h2>
      <p>{timeLeft} seconds remaining...</p>
    </div>
  );
};

export default Countdown;

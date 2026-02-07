import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [timer, setTimer] = useState('');

  useEffect(() => {
    const countdownDate = new Date("Feb 14, 2026 00:00:00").getTime(); // Target date

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimer("It's time for our special moment!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimer(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="countdown">
      <h2>Countdown to Our Next Special Moment</h2>
      <div>{timer}</div>
    </div>
  );
}

export default Countdown;

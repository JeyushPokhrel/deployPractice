import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Message from './components/Message';
import RoseGarden from './components/RoseGarden';
// import Countdown from './components/CountDown';
import Footer from './components/Footer';

function App() {
  const [step, setStep] = useState(0); // 0: Landing, 1: Message, 2: Roses,  4: Countdown

  return (
    <div className="App">
      {step === 0 && <LandingPage setStep={setStep} />}
      {step === 1 && <Message setStep={setStep} />}
      {step === 2 && <RoseGarden setStep={setStep} />}
      {step === 4 && <Countdown />}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

const LandingPage = ({ setStep }) => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>A Rose for You, My Love</h1>
        <p>On Rose Day, I want to remind you how much you mean to me.</p>
        <button onClick={() => setStep(1)}>Unfold My Love</button>
      </div>
    </div>
  );
}

export default LandingPage;

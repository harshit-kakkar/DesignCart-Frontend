import React from 'react';
import './landingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-page-choice">
        <div className="choice-predesigned">
          <p>Explore the pre designed products
          <br></br>
          Shop now</p>
        </div>
        <div className="choice-create">
          <p>Design your own T-shirt</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

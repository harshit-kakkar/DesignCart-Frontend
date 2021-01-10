import React from 'react';
import './landingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-page-choice">
        <div className="choice-predesigned">
          <div>
            <p>Explore the pre designed products</p>
          </div>
          <div className="shop-now">
            <p>
              Shop now
            </p>
          </div>
        </div>
        <div className="choice-create">
          <div>
            <p>Design your own T-shirt</p>
          </div>
          <div className="try-now">
            <p>Try now</p>
          </div>
        </div>
      </div>
      <div className="design-steps-container">
        <div className="design-steps-heading">
          <p>Create your personalized T-shirt in just 3 steps</p>
        </div>
        <div>
          heys
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

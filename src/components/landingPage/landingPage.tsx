import React from 'react';
import './landingPage.css';
import yellow_tick from '../../assets/yellow_tick_1.png'

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
          <p><b>Create your personalized T-shirt in just 3 steps</b></p>
        </div>
        <div className="design-steps">
          <div className="design-step">
            <img className="yellow-tick-img" alt="DesignCart" src={yellow_tick}></img>
            <p className="design-step-text">Upload pic/logo</p>
          </div>
          <div className="design-step">
            <img className="yellow-tick-img" alt="DesignCart" src={yellow_tick}></img>
            <p className="design-step-text">Give some tagline</p>
          </div>
          <div className="design-step">
            <img className="yellow-tick-img" alt="DesignCart" src={yellow_tick}></img>
            <p className="design-step-text">Checkout</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;

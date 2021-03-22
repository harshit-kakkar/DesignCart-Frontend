import React from 'react';
import './landingPage.css';
import yellow_tick from '../../assets/yellow_tick_1.png'
import social_img from '../../assets/social_fb_insta_twitter.jpg'

interface ProductJson{
  id: number, 
  name: string, 
  price: string
}
let sampleProductJson: Array<ProductJson>  = [{ id : 1, name: "Minions T-shirt", price: "200"}, {id : 2, name: "Match T-shirt", price: "350"}, {id : 3, name: "Tagline T-shirt", price: "250"},
{ id : 1, name: "Minions T-shirt", price: "200"}, {id : 2, name: "Match T-shirt", price: "350"}, {id : 3, name: "Tagline T-shirt", price: "250"}]

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
          <h1>Create your personalized T-shirt in just 3 steps</h1>
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

      <div className="featured-products-container">
        <h1 className="featured-products-header">Featured Products</h1>
      
      <div className="featured-products">

        {/* TODO: Create a separate component for product card and replace the below div with it. */}

        {sampleProductJson.map((item, i) => <div className="featured-product"><img alt="Product" src="https://profile-images-hispace.s3.ap-south-1.amazonaws.com/2aa94cdf2bb341df8c089a79d3219f89.jpeg"></img><br></br> {item.name}</div>)}
      </div>
      </div>  


      <div className="footer">
        <div>
          <span> Connect with us : </span>
          <img className="social-media-img" alt="Social Media" src={social_img}></img>
        </div>
        <div>
          <span>© 2021 designcart.com </span>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;

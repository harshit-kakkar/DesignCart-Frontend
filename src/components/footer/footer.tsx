import React from 'react';
import './footer.css';
import social_img from '../../assets/social_fb_insta_twitter.jpg'


function Footer() {
  return (

    <div className="footer">
        <div>
            <span> Connect with us : </span>
            <img className="social-media-img" alt="Social Media" src={social_img}></img>
        </div>
        <div>
            <span>© 2021 designcart.com </span>
        </div>
    </div>

  );
}

export default Footer;
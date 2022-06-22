import React from "react";
import logoIcon from "../../images/bg-logo-alt2.svg";
import fbIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer_top'>
        <img className='Footer_logo' src={logoIcon} alt='Brand Logo' />
        <ul className='Footer_links'>
          <li>Features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
      </div>

      <div className='Footer_icons'>
        <img src={fbIcon} alt='Facebook' />
        <img src={twitterIcon} alt='Twitter' />
      </div>
    </footer>
  );
};

export default Footer;

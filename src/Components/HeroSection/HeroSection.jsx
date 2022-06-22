import React from "react";
import heroImg from "../../images/illustration-hero.svg";
const HeroSection = () => {
  return (
    <section id='Hero Section' className='HeroSection'>
      <div className='HeroSection_heroImg'>
        <img src={heroImg} alt='hero Img' />
        <div className='HeroSection_heroImg-backdrop'>d</div>
      </div>
      <div className='HeroSection_heroContent'>
        <h1> A Simple Bookmark Manager</h1>
        <p>
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className='HeroSection_heroContent-btn'>
          <button> Get it on Chrome</button>
          <button> Get it on Firefox</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

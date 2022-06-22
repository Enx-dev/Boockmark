import React from "react";
import dotLine from "../../images/bg-dots.svg";
const Card = ({ title, subtitle, src }) => {
  return (
    <div className='Card'>
      <div className='Card_top'>
        <img src={src} alt={title} />
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      <img className='Card_line' src={dotLine} alt='divide line' />
      <div className='Card_footer'>
        <button>Add & Install Extention</button>
      </div>
    </div>
  );
};

export default Card;

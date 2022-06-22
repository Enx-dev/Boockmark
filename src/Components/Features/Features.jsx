import React, { useState } from "react";
import tab1Img from "../../images/illustration-features-tab-1.svg";
import tab2Img from "../../images/illustration-features-tab-2.svg";
import tab3Img from "../../images/illustration-features-tab-3.svg";
import featuresData from "./data.json";
const Features = () => {
  const [content, setContent] = useState(featuresData[0]);
  const [active, setActive] = useState(0);

  const toggleContent = (n) => {
    setContent(featuresData[n]);
    setActive(n);
  };

  return (
    <section id='Features Section' className='Features'>
      <div className='Features_head'>
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className='Features_links'>
        <ul>
          <li onClick={() => toggleContent(0)}>
            <div
              className={`${
                active === 0
                  ? "border-b-4 w-fit lg:w-full text-black h-full border-b-softRed"
                  : "w-fit text-grayishBlue"
              }`}>
              Simple Bookmarking
            </div>
          </li>
          <li onClick={() => toggleContent(1)}>
            <div
              className={`${
                active === 1
                  ? "border-b-4 w-fit lg:w-full text-black h-full border-b-softRed"
                  : "w-fit text-grayishBlue"
              }`}>
              Speedy Searching
            </div>
          </li>
          <li onClick={() => toggleContent(2)}>
            <div
              className={`${
                active === 2
                  ? "border-b-4 w-fit lg:w-full text-black h-full border-b-softRed"
                  : "w-fit text-grayishBlue"
              }`}>
              Easy Sharing
            </div>
          </li>
        </ul>
      </div>
      <div className='Features_foot'>
        <div className='Features_foot-img'>
          <img
            src={
              content.id === "1"
                ? tab1Img
                : content.id === "2"
                ? tab2Img
                : tab3Img
            }
            alt='tab 1'
          />
          <div></div>
        </div>
        <div className='Features_foot-content'>
          <h2>{content.title}</h2>
          <p>{content.content}</p>
          <button> More Info</button>
        </div>
      </div>
    </section>
  );
};

export default Features;

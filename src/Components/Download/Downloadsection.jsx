import React from "react";
import Card from "./Card";
import chromeImg from "../../images/logo-chrome.svg";
import firefoxImg from "../../images/logo-firefox.svg";
import operaImg from "../../images/logo-opera.svg";

const Downloadsection = () => {
  return (
    <section className='Download'>
      <div className='Download_head'>
        <h1>Download the extension</h1>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className='Download_cards'>
        <Card
          src={chromeImg}
          title=' Add to Chrome'
          subtitle='Minimum version 62'
        />
        <Card
          src={firefoxImg}
          title=' Add to Firefox'
          subtitle='Minimum version 55'
        />
        <Card
          src={operaImg}
          title=' Add to Opera'
          subtitle='Minimum version 46'
        />
      </div>
    </section>
  );
};

export default Downloadsection;

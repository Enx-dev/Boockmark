import React from "react";
import Accodian from "./Accodian";
import faqData from "./faq.json";
const Faq = () => {
  return (
    <section id="FAQ's Section" className='Faq'>
      <div className='Faq_top'>
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className='Faq_accodian'>
        {faqData.map((faq) => (
          <Accodian
            key={faq.Question}
            Question={faq.Question}
            Answer={faq.Answer}
          />
        ))}
      </div>
      <button>More Info</button>
    </section>
  );
};

export default Faq;

import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
const Accodian = ({ Question, Answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={() => setShow((prev) => !prev)} className='Faq_Question'>
        {Question}
        {!show ? (
          <ChevronDownIcon className='w-6' />
        ) : (
          <ChevronUpIcon className='w-6 text-softRed' />
        )}
      </div>
      {show && <div className='Faq_Answer'>{Answer}</div>}
    </>
  );
};

export default Accodian;

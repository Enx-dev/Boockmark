import React from "react";
import { createPortal } from "react-dom";
import fbIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import closeIcon from "../../images/icon-close.svg";
import logoIcon from "../../images/bg-alt.svg";
import { useEffect } from "react";
import { useCallback } from "react";
const Menu = ({ setShowDropDown }) => {
  // Closes dropdown on esc key presses
  const EscClose = useCallback(
    (e) => {
      if (e.key === "Escape") {
        setShowDropDown(false);
      }
    },
    [setShowDropDown]
  );

  useEffect(() => {
    const doc = document.getElementById("menu");
    doc.focus();
    window.addEventListener("keydown", EscClose);
    return () => window.removeEventListener("keydown", EscClose);
  }, [EscClose]);

  // * get back to this logoIcon
  return createPortal(
    <div className='Navbar_dropdown'>
      <div className='Navbar_dropdown_head'>
        <img src={logoIcon} alt='Brand Logo' />
        <img
          onClick={() => setShowDropDown(false)}
          src={closeIcon}
          alt='close menu'
        />
      </div>
      <ul className='Navbar_dropdown_body'>
        <li>features</li>
        <li>pricing</li>
        <li>contact</li>
        <li>
          <button>login</button>
        </li>
      </ul>
      <div className='Navbar_dropdown_footer'>
        <img src={fbIcon} alt='facebook' />
        <img src={twitterIcon} alt='twitter' />
      </div>
    </div>,
    document.getElementById("menu")
  );
};

export default Menu;

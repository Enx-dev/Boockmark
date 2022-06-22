import React from "react";
import logoIcon from "../../images/logo-bookmark.svg";
import menuIcon from "../../images/icon-hamburger.svg";
import Menu from "./Menu";
import { useState } from "react";
const Navbar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  return (
    <nav className='Navbar'>
      <img className='Navbar_logo' src={logoIcon} alt='Brand Logo' />
      {!showDropdown && (
        <img
          onClick={() => setShowDropDown(true)}
          className='Navbar_menuIcon'
          src={menuIcon}
          alt='closed menu'
        />
      )}
      <ul className='Navbar_links'>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li>
          <button className='Navbar_links-btn'>Login</button>
        </li>
      </ul>
      {showDropdown && <Menu setShowDropDown={setShowDropDown} />}
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import logo from "../images/anas.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <header className="header">
          <div className="header__content">
            <div className="header__logo-container">
              <div className="header__logo-img-cont">
                <img src={logo} alt="logo" className="header__logo-img" />
              </div>
              <span className="header__logo-sub">Muhammad Anas Khan</span>
            </div>
            <div className="header__main">
              <ul className={open ? "header__links" : "header__links"}>
                <li className="header__link-wrapper">
                  <a href="index.html" className="header__link">
                    Home
                  </a>
                </li>
                <li className="header__link-wrapper">
                  <a href="index.html#about" className="header__link">
                    About
                  </a>
                </li>
                <li className="header__link-wrapper">
                  <a href="index.html#projects" className="header__link">
                    Projects
                  </a>
                </li>
                <li className="header__link-wrapper">
                  <a href="index.html#contact" className="header__link">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="header__main-ham-menu-cont">
                <a href="#1" onClick={handleClick}>
                  <GiHamburgerMenu />
                </a>
                {/* {open ? (
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg"
                    alt="hamburger menu"
                    className="header__main-ham-menu"
                  />
                ) : (
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg"
                    alt="hamburger menu close"
                    className="header__main-ham-menu-close d-none"
                  />
                )} */}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;

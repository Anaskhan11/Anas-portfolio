import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="main-footer">
        <div className="main-container">
          <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
              <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
              </h2>
              <div className="main-footer__social-cont">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/muhammad-anas-khan-3a48b2240/"
                >
                  <img
                    className="main-footer__icon"
                    src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
                    alt=" Linkedin Profile"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Anaskhan11?tab=repositories"
                >
                  <img
                    className="main-footer__icon"
                    src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                    alt=" Github Profile"
                  />
                </a>
              </div>
            </div>
            <div className="main-footer__row main-footer__row-2">
              <h2 className="heading heading-sm text-lt">Muhammad Anas Khan</h2>
              <p className="main-footer__short-desc">
                A Full Stack focused Web Developer building the MERN Stack
                Websites.
              </p>
            </div>
          </div>
          <div className="main-footer__lower">
            © Copyright . Made by
            <a rel="noreferrer" target="_blank" href="index.html">
              Muhammad Anas Khan
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

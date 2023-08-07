import React from "react";
import Typed from "react-typed";
const Home = () => {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">
            Hey, I'm{" "}
            <Typed
              strings={["Muhammad Anas Khan"]}
              typeSpeed={250}
              backSpeed={100}
              loop
            />
          </h1>

          <div className="home-hero__info">
            <p className="text-primary">
              MERN Stack Developer Building web application using MERN Stack.
            </p>
          </div>
          <div className="home-hero__cta">
            <a href="index.html#projects" className="btn btn--bg">
              Projects
            </a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a
              href="https://www.linkedin.com/in/muhammad-anas-khan-3a48b2240/"
              className="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
                alt="Anas Linkedin Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>

          <div className="home-hero__social">
            <a
              href="https://github.com/Anaskhan11?tab=repositories"
              className="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                alt="Github Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse" />
        </div>
      </section>
    </>
  );
};

export default Home;

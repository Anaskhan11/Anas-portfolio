import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  I'm a <strong>Full Stack Developer</strong> building the MERN
                  Stack Websites and Web Applications.Check out some of my work
                  in the 
                  <strong> Projects</strong> section.
                </p>
              </div>
              <a
                href="index.html#contact"
                className="btn btn--med btn--theme dynamicBgClr"
              >
                Contact
              </a>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <div className="skills">
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">Bootstrape</div>
                <div className="skills__skill">Javascript</div>
                <div className="skills__skill">React js</div>
                <div className="skills__skill">Node js</div>
                <div className="skills__skill">Express js</div>
                <div className="skills__skill">Mongo DB</div>
                <div className="skills__skill">Git</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

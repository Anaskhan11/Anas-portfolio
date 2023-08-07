import React from "react";
import ecom from "../images/ecom.jpeg";
import hos from "../images/hos.jpeg";
import mi from "../images/mi.PNG";
import net from "../images/net.png";
import spo from "../images/spo.png";
const Project = () => {
  return (
    <>
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </span>
          </h2>
          <div className="projects__content">
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={ecom}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Ecommerce </h3>
                <p className="projects__row-content-desc">
                  Your one-stop online marketplace for premium products,
                  seamless shopping, and unbeatable deals. Feature:: add product
                  to cart , securely paymet , user Authentication
                </p>
                <strong style={{ fontSize: "1.4rem" }}>
                  Github Link ::
                  <a href="https://github.com/Anaskhan11/ECOM" target="_black">
                    https://github.com/Anaskhan11/ECOM
                  </a>
                </strong>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={hos}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">
                  Hospital Management System
                </h3>
                <p className="projects__row-content-desc">
                  This Application consists of the following modules. Patients
                  Module Doctor Module Appointment Module Registration &
                  Authentication
                </p>
                <strong style={{ fontSize: "1.3rem" }}>
                  Github Link ::
                  <a
                    href="https://github.com/Anaskhan11/Hospital_Management_System"
                    target="_black"
                  >
                    https://github.com/Anaskhan11/Hospital_Management_System
                  </a>
                </strong>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={mi}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">MIUI Clone</h3>
                <p className="projects__row-content-desc">
                  Our MIUI Store Clone, created using React JS in the front end,
                  is a simple application designed to help me practice my
                  Reactskills. It mimics the MIUI Store, where you can explore
                  and download different apps and resources.
                </p>
                <strong style={{ fontSize: "1.3rem" }}>
                  Github Link ::
                  <a href="https://github.com/Anaskhan11/MIUI" target="_black">
                    https://github.com/Anaskhan11/MIUI
                  </a>
                </strong>

                <strong style={{ fontSize: "1.3rem" }}>
                  Live Link ::
                  <a href="https://miui-clone-app.netlify.app" target="_black">
                    https://miui-clone-app.netlify.app
                  </a>
                </strong>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={net}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Netflix Clone</h3>
                <p className="projects__row-content-desc">
                  Crown is a web template that I created targeting the
                  restaurant and food industry which anyone can use to present
                  their business online.
                </p>
                <strong style={{ fontSize: "1.3rem" }}>
                  Github Link ::
                  <a
                    href="https://github.com/Anaskhan11/Netflix-Clone"
                    target="_black"
                  >
                    https://github.com/Anaskhan11/Netflix-Clone
                  </a>
                </strong>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={spo}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Spotify Clone</h3>
                <p className="projects__row-content-desc">
                  Our Spotify Clone, created using React JS in the front end, is
                  a simple application designed to help me practice my
                  Reactskills.
                </p>
                <strong style={{ fontSize: "1.3rem" }}>
                  Github Link ::
                  <a
                    href="https://github.com/Anaskhan11/SpotifyClone"
                    target="_black"
                  >
                    https://github.com/Anaskhan11/SpotifyClone
                  </a>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

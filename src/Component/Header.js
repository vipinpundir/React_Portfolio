import React, { useState } from "react";
import "./Header.css";
import HeaderSection from "./HeaderSection";
import ProjectCom from "./ProjectCom";
import ContactCom from "./ContactCom";
import EducationSection from "./EducationSection";
import vipinPic from "../Images/logos/vipin2.jpeg";
import gitlogo from "../Images/logos/github.png";
import linkedinlogo from "../Images/logos/linkedin.png";
import whatsapplogo from "../Images/logos/whatsapp.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-css">
      {/* redirect to top  */}
      <a href="/" className="top-arrow">↑</a>
      {/* <div className="header-img-css container1">
      </div> */}
      <div className="container1">
        <div class="profile-card">
          <div class="card-header">
            <img src={vipinPic} alt="Maria Telma" class="profile-img" />
          </div>
          <h2 class="name">Vipin Pundir</h2>
          <p class="role">Frontend Web Developer</p>
          <p class="description">
            I'm a web developer passionate about creating dynamic websites and
            web applications.
          </p>
          <p class="connect-text">connect with me</p>
          <div class="social-icons">
            <a className="" href="https://www.linkedin.com/in/vipinpundir29">
              {" "}
              <img src={linkedinlogo} alt="vipin-linkedin-profile" />{" "}
            </a>
            <a className="" href="https://github.com/vipinpundir">
              {" "}
              <img src={gitlogo} alt="vipin-linkedin-profile" />{" "}
            </a>
            <a className="" href="https://wa.me/6398099946">
              {" "}
              <img src={whatsapplogo} alt="vipin-whatsapp-profile" />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="hamburger-menu">
          <input
            onClick={() => setMenuOpen(!menuOpen)}
            id="c"
            type="checkbox"
          ></input>
          <div className="hamegurger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <div
            className={`Navbar ${menuOpen ? "menu-items-open" : "menu-items"}`}
          >
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#portfolio">projects</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              {/* <li>< a href="/Blog" >blog</a></li> */}
            </ul>
          </div>
        </div>

        <HeaderSection />
        <EducationSection />
        <ProjectCom />
        <ContactCom />
      </div>
    </div>
  );
};

export default Header;

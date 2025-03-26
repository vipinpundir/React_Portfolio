import React from "react";
import './HeaderSection.css';
import { Link } from "react-router-dom";
import htmllogo from '../Images/logos/html-5.png'
import csslogo from '../Images/logos/css-3.png'
import bootlogo from '../Images/logos/bootstrap.png'
import jslogo from '../Images/logos/js.png'
import reactlogo from '../Images/logos/react.png'
import reduxlogo from '../Images/logos/redux.png'
import apilogo1 from '../Images/logos/api.png'
import postlogo from '../Images/logos/postman.svg'
import gitlogo from '../Images/logos/git.png'
import githublogo from '../Images/logos/github2.png'
import nodelogo from '../Images/logos/nodejs.png'
import pylogo from '../Images/logos/python.png'
import sqllogo from '../Images/logos/mysql.png'
import mongologo from '../Images/logos/mongo.png'
import expresslogo from '../Images/logos/express-js.png'
import nextjslogo from '../Images/logos/nextjs.png'
import tslogo from '../Images/logos/typescript.png'
import taillogo from '../Images/logos/tailwind.png'

const HeaderSection = () => {
    const skillsLogos = [
        { img: pylogo, name: "Python" },
        { img: htmllogo, name: "HTML" },
        { img: csslogo, name: "CSS" },
        { img: bootlogo, name: "Bootstrap" },
        { img: taillogo, name: "Tailwind CSS" },
        { img: jslogo, name: "JavaScript" },
        { img: tslogo, name: "TypeScript" },
        { img: reactlogo, name: "React.js" },
        { img: nextjslogo, name: "Next.js" },
        { img: reduxlogo, name: "Redux" },
        { img: gitlogo, name: "Git" },
        { img: githublogo, name: "GitHub" },
        { img: postlogo, name: "Postman" },
        { img: apilogo1, name: "API Integration" },
        { img: nodelogo, name: "Node.js" },
        { img: expresslogo, name: "Express.js" },
        { img: sqllogo, name: "MySQL" },
        { img: mongologo, name: "MongoDB" },
    ]

    return (

        <div className="main-section">

            <div className="name-section">
                <p className="mini-heading">WEB DEVELOPER</p>
                <h1 className="heading1" >VIPIN PUNDIR</h1>
                <p className="mt-10">Hi, I'm Vipin Pundir, a dedicated and innovative Front-End Developer with a passion for creating responsive, user-friendly web applications. I hold a Bachelor of Technology in Computer Science Engineering from the College of Engineering Roorkee, graduating in 2024. With hands-on experience in HTML, CSS, JavaScript, React, Node.js, and more, I specialize in building scalable and high-performance web applications. Currently working as a Frontend Developer, I am continuously expanding my skill set, including deployment on AWS and backend development with Django and Node.js</p>
            </div>

            <div className="name-about">
                <span className="name-about-left">
                    <p>E-Mail :  <span><a href="mailto:vipinpundir29@gmail.com">vipinpundir29@gmail.com</a></span> </p>
                    <p>Linkedin : <span> <a href="https://www.linkedin.com/in/vipinpundir29">in/vipinpundir29</a></span> </p>
                    <p>Degree :  <span>Bachelor of Technology (B.Tech)</span> </p>
                </span>
                <span className="name-about-right">
                    <p>Phone :  <span>6398099946</span> </p>
                    <p>Birthday : <span> 30 May 2003</span> </p>

                </span>

            </div>

            <div className="btn">  <button type="submit" >  <Link to="/Contact" >Hire Me</Link> </button>  </div>

            <hr className="hr_tag" />

            <div className="skills">
                <div className="skills-headings">
                    <p className="mini-heading">TECHNICAL </p>
                    <h1 className="main-heading" >SKILLs</h1>
                </div>
                <div className="skills-logos">
                    {skillsLogos.map((logo, index) => (<li key={index} > <img src={logo.img} alt="skills logo" /> <p>{logo.name}</p> </li>))}
                </div>
            </div>

            <hr className="hr_tag" />

            <div className="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>
        </div>

    );
}


export default HeaderSection;
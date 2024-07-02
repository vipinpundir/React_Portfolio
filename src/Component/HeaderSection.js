import React from "react";
import './HeaderSection.css';
// import desLogo from '../Images/logos/web-design.png';
// import resLogo from '../Images/logos/responsive-website.png';
// import apiLogo2 from '../Images/logos/api2.png';
// import devLogo from '../Images/logos/developer.png';
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
                <p>Hi, I'm Vipin Pundir, a dedicated and innovative Front-End Developer with a passion for creating responsive, user-friendly web applications. Currently pursuing a Bachelor of Technology in Computer Science Engineering at the College of Engineering Roorkee, I have hands-on experience with HTML, CSS, JavaScript, React, Node.js, and more.</p>
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

            {/* <hr className="hr_tag" /> */}

{/* 
            <div className="services">

                <div className="name-section">
                    <p className="mini-heading">WHAT I DO</p>
                    <h1 className="main-heading" >SERVICES</h1>
                </div>

            </div>


            <div className="box">
                <div className="box-left">
                    <span> <img src={desLogo} alt='' /> </span>
                    <h2>Web Desing</h2>
                    <p> I am skilled in web designing, with experience in creating visually appealing and user-friendly websites. </p>
                </div>
                <div className="box-right">
                    <span> <img src={devLogo} alt='' /> </span>
                    <h2>Development</h2>
                    <p> Experienced in building and maintaining websites and web applications using HTML, CSS, JavaScript and React js. </p>
                </div>
            </div>

            <div className="box">
                <div className="box-left">
                    <span> <img src={apiLogo2} alt='' /> </span>
                    <h2>API Integration</h2>
                    <p>Proficient in seamlessly integrating third-party APIs to enhance web applications, optimizing performance.</p>
                </div>
                <div className="box-right">
                    <span> <img src={resLogo} alt='' /> </span>
                    <h2>Fully Responsive</h2>
                    <p> I specialize in creating fully responsive websites and web applications that provide a seamless user experience across all devices. </p>
                </div>
            </div> */}

            <hr className="hr_tag" />

            <div className="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>
        </div>


    );
}


export default HeaderSection;
import React from "react";
import './HeaderSection.css';
import icon1 from '../Images/web-design.png';
import icon2 from '../Images/developer.png';
import icon4 from '../Images/responsive-website.png';
import {  Link } from "react-router-dom";

const HeaderSection = () => {
    return (

        <div className="main-section">

            <div className="name-section">
                <p className="mini-heading">WEB DEVELOPER</p>
                <h1 className="main-heading" >VIPIN PUNDIR</h1>
                <p>Hi, My name is vipin Pundir. I am a web developer mainly front-end developer.  I have worked in preneurship for two months as an front-end developer and I'm pre final year B.Tech(CSE) student at college of engineering roorkee. </p>
            </div>

            <div className="name-about">
                <span className="name-about-left">
                    <p>E-Mail :  <span>vipinpundir29@gmail.com</span> </p>
                    <p>Linkedin : <span>vipin-pundir-4ba310219</span> </p>
                    <p>Degree :  <span>Under Graduate</span> </p>
                </span>
                <span className="name-about-right">
                    <p>Phone :  <span>6398099946</span> </p>
                    <p>Birthday : <span> 30 May 2003</span> </p>

                </span>

            </div>


            <div className="btn">  <button type="submit" >  <Link to="/Contact" >Hire Me</Link> </button>  </div>
            

            <hr className="hr_tag" />

            <div className="services">

                <div className="name-section">
                    <p className="mini-heading">WHAT I DO</p>
                    <h1 className="main-heading" >SERVICES</h1>
                </div>

            </div>


            <div className="box">
                <div className="box-left">
                    <span> <img src={icon1} alt='' /> </span>
                    <h2>Web Desing</h2>
                    <p> I am skilled in web designing, with experience in creating visually appealing and user-friendly websites. </p>
                </div>
                <div className="box-right">
                    <span> <img src={icon2} alt='' /> </span>
                    <h2>Development</h2>
                    <p> Experienced in building and maintaining websites and web applications using HTML, CSS, JavaScript and React js. </p>
                </div>
            </div>

            <div className="box">
                <div className="box-left">
                    <span> <img src={icon4} alt='' /> </span>
                    <h2>Fully Responsive</h2>
                    <p> I specialize in creating fully responsive websites and web applications that provide a seamless user experience across all devices. </p>
                </div>
                {/* <div className="box-right">
                    <span> <img src={icon3} alt='' /> </span>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi illum perspiciatis quam! Amet at sunt eveniet rem eaque nihil?</p>
                </div> */}
            </div>

            <hr className="hr_tag" />

            <div className="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>
        </div>


    );
}


export default HeaderSection;
import React from "react";
import './Header_Section.css';
import icon1 from '../Images/web-design.png';
import icon2 from '../Images/developer.png';
import icon3 from '../Images/photograph.png';
import icon4 from '../Images/responsive-website.png';

const Header_Section = () => {
    return (

        <div className="main-section">

            <div className="name-section">
                <p className="mini-heading">WEB DEVELOPER</p>
                <h1 className="main-heading" >VIPIN PUNDIR</h1>
                <p>Hi, My name is vipin Pundir. I am a Front-End developer,and etiam accumsan scelerisque rhoncus. Nulla quis laorey velit drana. Pelteqle quisu velleopha retra congue. Nulla quis laoreet velit. Pelteqle quisu velleopha retra congue. Lorem ipsum nolan sithe cons eturadip liscing elit. Donec hendrerit sapien coner the consequat erose viverra at. Quality quis laorey velit. Pelteqle quisu velleopha retra the congue.</p>

            </div>

            <div class="name-about">
                <span class="name-about-left">
                    <p>E-Mail :  <span>vipinpundir29@gmail.com</span> </p>
                    <p>Linkedin : <span>vipin-pundir-4ba310219</span> </p>
                    <p>Degree :  <span>Under Graduate</span> </p>
                </span>
                <span class="name-about-right">
                    <p>Phone :  <span>6398099946</span> </p>
                    <p>Birthday : <span> 30 May 2003</span> </p>
                    {/* <p>Website :  <span> vipinpundir29.com </span> </p> */}

                </span>

            </div>

            <div class="btn"><button type="submit">Hire Me</button></div>

            <hr className="hr_tag" />

            <div class="services">

                <div class="name-section">
                    <p className="mini-heading">WHAT I DO</p>
                    <h1 className="main-heading" >SERVICES</h1>
                </div>

            </div>


            <div class="box">
                <div class="box-left">
                    <span> <img src={icon1} alt='' /> </span>
                    <h2>Web Desing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi illum perspiciatis quam! Amet at sunt eveniet rem eaque nihil?</p>
                </div>
                <div class="box-right">
                    <span> <img src={icon2} alt='' /> </span>
                    <h2>Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi illum perspiciatis quam! Amet at sunt eveniet rem eaque nihil?</p>
                </div>
            </div>

            <div class="box">
                <div class="box-left">
                    <span> <img src={icon3} alt='' /> </span>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi illum perspiciatis quam! Amet at sunt eveniet rem eaque nihil?</p>
                </div>
                <div class="box-right">
                    <span> <img src={icon4} alt='' /> </span>
                    <h2>Fully Responsive</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi illum perspiciatis quam! Amet at sunt eveniet rem eaque nihil?</p>
                </div>
            </div>

            {/* <div class="box">
                <div class="box-left">
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi illum perspiciatis quam! Amet at sunt eveniet rem eaque nihil?</p>
                </div>
                <div class="box-right">
                    <h2>Fully Responsive</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi illum perspiciatis quam! Amet at sunt eveniet rem eaque nihil?</p>
                </div>
            </div> */}

            <hr className="hr_tag" />

            <div class="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>
        </div>


    );
}


export default Header_Section;
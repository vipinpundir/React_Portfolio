import React from "react";
import './Footer.css';
import gitlogo from '../Images/github.png';
import linkedinlogo from '../Images/linkedin.png';
import instagramlogo from '../Images/instagram.png';



const Footer = () => {
    return (
        <div className="footer-css">

            {/* <div className="footer-1">
                <img src={gitlogo} alt='vipin-linkedin-profile' href="https://github.com/vipinpundir" />
                <img src={linkedinlogo} alt='vipin-linkedin-profile' href="https://www.linkedin.com/in/vipin-pundir-4ba310219/" />
                <img src={instagramlogo} alt='vipin-instagram-profile' />
            </div> */}

            <div className="footer-1">
               <a className=""  href="https://www.linkedin.com/in/vipin-pundir-4ba310219/" > <img src={linkedinlogo} alt='vipin-linkedin-profile'/>  </a> 
                <a className="" href="https://github.com/vipinpundir"> <img src={gitlogo} alt='vipin-linkedin-profile'/>  </a>
                <a className="" href="https://www.instagram.com/vipin_pundir001/">  <img src={instagramlogo} alt='vipin-instagram-profile' />  </a>
            </div>


            <div className="footer-2">

                <div className="footer-2-1">

                    <div><h6>LOCATION </h6> <p>Roorkee,INDIA</p></div>
                    <div><h6>E-MAIL </h6> <p>vipinpudir29@gmail.com</p></div>
                    <div><h6>PHONE </h6> <p>+91 6398099946</p></div>

                </div>

                <div className="footer-2-2">
                    <a  target='blank' href="https://drive.google.com/drive/folders/1CRGX99KMxNVtvz0n2aVMahnI-l9B1TPn?usp=sharing"> <h6>Download CV</h6> </a>
                </div>

            </div>

        </div>
    );
}

export default Footer;
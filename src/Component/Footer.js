import React from "react";
import './Footer.css';
import gitlogo from '../Images/logos/github.png';
import linkedinlogo from '../Images/logos/linkedin.png';
import whatsapplogo from '../Images/logos/whatsapp.svg';



const Footer = () => {
    return (
        <div className="footer-css">

            <div className="footer-1">
               <a className=""  href="https://www.linkedin.com/in/vipinpundir29" > <img src={linkedinlogo} alt='vipin-linkedin-profile'/>  </a> 
                <a className="" href="https://github.com/vipinpundir"> <img src={gitlogo} alt='vipin-linkedin-profile'/>  </a>
                <a className="" href="https://wa.me/6398099946">  <img src={whatsapplogo} alt='vipin-whatsapp-profile' />  </a>
            </div>

        </div>
    );
}

export default Footer;
import React from 'react'
import './Contact_com.css';


const Contact_com = () => {
    return (
        <div className='contact_com'>
            <p className='mini-heading'>LOCATION</p>
            <h1 className="main-heading"> CONTACT ME</h1>
            <p>If you’d like to talk about a project, our work or anything else then get in touch.</p>
            <br></br>
            <p className='heading-p'>Phone : <span>6398099946</span> </p>
            <p className='heading-p'>Email : <span>vipinpundir29@gmail.com</span> </p>
            <p className='heading-p'>Address : <span>Roorkee, Uttarakhand, India , Pin Code:-247667</span> </p>
            <hr className='hr_tag'></hr>
                <p className='heading-p'>Get in touch</p>
            <div className='contact-form'>
                <input type="text" placeholder='Your Name' required ></input>
                <input type="Email" placeholder='Your Email' required ></input> <br></br>
                <input type="PhoneNumber" placeholder='Your Number' required ></input>
                <input type="text" placeholder='Subject' required ></input>
                <textarea placeholder='Message' required></textarea>
            </div>

            <div class="btn"><button type="submit">Send Message</button></div>

            <hr className='hr_tag'></hr>


            <div class="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>

        </div>
    )
}

export default Contact_com;
import React from 'react'
import './ContactCom.css';


const ContactCom = () => {
    return (
        <div className='ContactCom' id='contact'>
            <p className='mini-heading'>LOCATION</p>
            <h1 className="main-heading"> CONTACT ME</h1>
            <p>If you’d like to talk about a project, our work or anything else then get in touch.</p>
            <br></br>
            <p className='heading-p'>Phone : <span>6398099946</span> </p>
            <p className='heading-p'>Email : <span>vipinpundir29@gmail.com</span> </p>
            <p className='heading-p'>Address : <span>Roorkee, Uttarakhand, India , Pin Code:-247667</span> </p>
            <br /> <br />
            <p className='heading-p'>Get in touch</p>

            <form action="https://formspree.io/f/xzbwdonz" method="POST" >

                <div className='contact-form' >
                    <input type="text" name='Name' placeholder='Full Name' required ></input>
                    <input type="Email" name='Email' placeholder='Email' required ></input> <br></br>
                    <input type="Number" name='Contact_Number' placeholder='Contact Number' required ></input>
                    <input type="text" name='Subject' placeholder='Subject' required ></input>
                    <textarea name='Message' placeholder='Message' required></textarea>
                </div>

                <div className="btn"><button type="submit">Send Message</button></div>

            </form>

            <hr className='hr_tag'></hr>


            <div className="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>

        </div>
    )
}

export default ContactCom;
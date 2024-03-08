import React from 'react'
import './ProjectCom.css'
import resimg from '../Images/projects/resto.jpg'
import traimg from '../Images/projects/trav.jpg'
import libimg from '../Images/projects/lib.jpg'
import busimg from '../Images/projects/bus.jpg'
import expimg from '../Images/projects/expen.jpg'
import newsimg from '../Images/projects/news.jpg'
import hackaimg from '../Images/projects/hakathon.jpg'
import elearimg from '../Images/projects/e-lear.png'
import chatimg from '../Images/projects/chat.png'


const ProjectCom = () => {


    const data = [
        {
            link: 'https://fordeploymentchat-app.onrender.com',
            title: 'Chat Application',
            desc : 'Real-time chat application developed using the MERN Stack with Socket.IO.',
            img : chatimg

        },
        {
            link: 'https://elearning360.netlify.app',
            title: 'E-Learning',
            desc : 'E-Learning web application developed using the MERN Stack with Socket.IO.',
            img : elearimg

        },
        {
            link: 'https://github.com/vipinpundir/headlinehub',
            title: 'HeadlineHub',
            desc : 'News web application developed using React, utilizing the News API service for fetching data.',
            img : newsimg

        },
        {
            link: 'https://vipinexpense.netlify.app',
            title: 'Expense Tracker ',
            desc : 'Web app for tracking expenses, developed using HTML, CSS, JavaScript, and React.',
            img : expimg

        },
        {
            link: 'https://coerhackthon.netlify.app/',
            title: 'COER Hackathon 2k22',
            desc : 'Hackathon website developed using HTML, CSS, JavaScript, and Bootstrap.',
            img : hackaimg
        },
        {
            link: 'https://vipinfoodweb.netlify.app',
            title: 'Restaurant website',
            desc : 'Restaurant website developed using HTML, CSS, and JavaScript.',
            img : resimg
        },
        {
            link: 'https://vipintravelweb.netlify.app',
            title: 'Travelling website',
            desc : 'Traveling website developed using HTML, CSS and JavaScript.',
            img : traimg
        },
        {
            link: 'https://coerlibrary.netlify.app',
            title: 'Digital Library ',
            desc : ' Digital Library website developed using HTML, CSS, and Bootstrap.',
            img : libimg
        },
        {
            link: 'https://vipinbusinessweb.netlify.app',
            title: 'Business website',
            desc : 'Business website developed using HTML, CSS, and Bootstrap.',
            img : busimg
        },
       
    ]

    function card(value,index) {
        return (
            <div className="project" key={index} >
                <div className='project-text'>
                    <div className='project-inner-img' >
                     <img src={value.img} alt='' />
                    </div>
                    <div className='project-inner-text'>
                        <h3> {value.title} </h3>
                        <p> {value.desc} </p>
                    </div>
                    <div className="btn">  <button type="submit" > <a  href={value.link}>View Project</a> </button>  </div>

                    
                </div>
            </div>
        )
    }



    return (
        <div className='ProjectCom'>
            <p className='mini-heading'>TAKE A LOOK AT</p>
            <h1 className='main-heading'>PROJECTS</h1>

            <div className="projects">
                {data.map(card)}
            </div>

            <hr className='hr_tag'></hr>


            <div className="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>

        </div>

    )
}

export default ProjectCom;
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
import workmanagerimg from '../Images/projects/work-manager.jpg'


const ProjectCom = () => {


    const data = [
        {
            liveLink: 'https://work-manager-seven.vercel.app/',
            gitLink: 'https://github.com/vipinpundir/work-manager',
            title: 'Work Manager',
            desc : 'Work Manager is a full-stack  web application built with Next.js and TypeScript.',
            img : workmanagerimg
            
        },
        {
            liveLink: 'https://fordeploymentchat-app.onrender.com',
            gitLink: 'https://github.com/vipinpundir/chat-app',
            title: 'Chat Application',
            desc : 'Real-time chat application developed using the MERN Stack with Socket.IO.',
            img : chatimg
            
        },
        {
            liveLink: 'https://learnhub360.netlify.app',
            gitLink: 'https://github.com/vipinpundir/MERN-LearningPlatform',
            title: 'E-Learning',
            desc : 'E-Learning web application developed using the MERN Stack with Socket.IO.',
            img : elearimg

        },
        {
            liveLink: 'https://github.com/vipinpundir/headlinehub',
            gitLink: 'https://github.com/vipinpundir/headlinehub',
            title: 'HeadlineHub',
            desc : 'News web application developed using React, utilizing the News API service for fetching data.',
            img : newsimg

        },
        {
            liveLink: 'https://github.com/vipinpundir/todo-app',
            gitLink: 'https://github.com/vipinpundir/todo-app',
            title: 'ToDo Web Application',
            desc : 'To-Do Web Application, developed using HTML, CSS, JavaScript, and React.',
            img : expimg

        },
        {
            liveLink: 'https://coerhackthon.netlify.app/',
            gitLink: 'https://github.com/vipinpundir/hackmaster',
            title: 'COER Hackathon 2k22',
            desc : 'Hackathon website developed using HTML, CSS, JavaScript, and Bootstrap.',
            img : hackaimg
        },
        {
            liveLink: 'https://vipinfoodweb.netlify.app',
            gitLink: 'https://github.com/vipinpundir/Restaurant-Web',
            title: 'Restaurant website',
            desc : 'Restaurant website developed using HTML, CSS, and JavaScript.',
            img : resimg
        },
        {
            liveLink: 'https://vipintravelweb.netlify.app',
            gitLink: 'https://github.com/vipinpundir/Trave-Web',
            title: 'Travelling website',
            desc : 'Traveling website developed using HTML, CSS and JavaScript.',
            img : traimg
        },
        {
            liveLink: 'https://coerlibrary.netlify.app',
            gitLink: 'https://github.com/vipinpundir/college-e-library',
            title: 'Digital Library ',
            desc : ' Digital Library website developed using HTML, CSS, and Bootstrap.',
            img : libimg
        },
        {
            liveLink: 'https://vipinbusinessweb.netlify.app',
            gitLink: 'https://github.com/vipinpundir/Business-Web',
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
                    <div className="btn">  <button type="submit" > <a target='blank' href={value.liveLink}>Live Link</a> </button>  </div>
                    <div className="btn btn2">  <button type="submit" > <a target='blank' href={value.gitLink}>Github Link</a> </button>  </div>
                    
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
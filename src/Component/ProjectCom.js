import React from 'react'
import './ProjectCom.css'
import resimg from '../Images/project01.jpg'
import traimg from '../Images/project02.jpg'
import libimg from '../Images/project03.jpg'
import busimg from '../Images/project04.jpg'
import expimg from '../Images/project05.jpg'
import newsimg from '../Images/project06.jpg'


const ProjectCom = () => {


    const data = [
        {
            link: 'https://drive.google.com/drive/folders/1OpBIVZG2YRu1byqvHrvdv07jzcNHzjEe?usp=sharing',
            title: 'HeadlineHub',
            desc : 'It is News web developed using React and utilizes the News API service to fetch the news data.',
            img : newsimg

        },
        {
            link: 'https://vipinexpense.netlify.app',
            title: 'Expense Tracker ',
            desc : 'This is a Expense Tracker web application developed using HTML, CSS, JS and REACT.',
            img : expimg

        },
        {
            link: 'https://vipinfoodweb.netlify.app',
            title: 'Restaurant website',
            desc : 'This is a restaurant website developed using HTML, CSS, and JS.',
            img : resimg
        },
        {
            link: 'https://vipintravelweb.netlify.app',
            title: 'Travelling website',
            desc : 'This is a Travelling website developed using HTML and CSS.',
            img : traimg
        },
        {
            link: 'https://coerlibrary.netlify.app',
            title: 'Digital Library ',
            desc : 'This is a Digital Library website developed using HTML, CSS, and BOOTSTRAP.',
            img : libimg
        },
        {
            link: 'https://vipinbusinessweb.netlify.app',
            title: 'Business website',
            desc : 'This is a Business website developed using HTML, CSS, and BOOTSTRAP.',
            img : busimg
        },
       
    ]

    function card(value,index) {
        return (
            <div className="project" key={index} >
                <div className='project-text'>
                    .<div className='project-inner-img' >
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
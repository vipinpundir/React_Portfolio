import React from 'react'
import './Project_com.css'


const Project_com = () => {
    return (
        <div className='project_com'>
            <p className='mini-heading'>TAKE A LOOK AT</p>
            <h1 className='main-heading'>PROJECTS</h1>

            <div className="projects">
                <div className="project1">
                    <div className='project-text'>
                        <h2>Project 01</h2>
                        <h4>Restaurant Web</h4>
                    </div>
                </div>
                <div className="project2">
                    <div className='project-text'>
                        <h2>Project 02</h2>
                        <h4>Travelling Web</h4>
                    </div>
                </div>


                <div className="project3">
                    <div className='project-text'>
                        <h2>Project 03</h2>
                        <h4>Digital Library Web</h4>
                    </div>
                </div>
                <div className="project4">
                    <div className='project-text'>
                        <h2>Project 04</h2>
                        <h4>Business Web</h4>
                    </div>
                </div>


                <div className="project5">
                    <div className='project-text'>
                        <h2>Project 05</h2>
                        <h4>Expense Tracker Web</h4>
                    </div>
                </div>
                {/* <div className="project6">
                    <div className='project-text'>
                        <h2>Project 06</h2>
                        <h4>Expense Tracker Web</h4>
                    </div>
                </div> */}
            </div>

            <hr className='hr_tag'></hr>


            <div class="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>

        </div>

    )
}

export default Project_com;
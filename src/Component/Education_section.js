import React from "react";
import './Education_section.css';

const Education_section = () => {
    return (
        <div className="education_section_css">
            <div className="education_section_head"  >
                <p className="mini-heading">RESUME</p>
                <h1 className="main-heading" >EXPERIENCE</h1>
            </div>

            <div className="education_section_container">

                <div className="education_section">
                    <h3 className="main-heading-Edu">FRONTEND DEVELOPER</h3>
                    <p>Preneurship ( Internship ) </p>
                    <p>April 2022 - Present (3 months)</p>
                    <p>work from home</p>
                </div>

            </div>


            <hr className="hr_tag" ></hr>

                <div className="education_section_head"  >
                    <p className="mini-heading">RESUME</p>
                    <h1 className="main-heading" >EDUCATION</h1>
                </div>
                
            <div className="education_section_container">

                <div className="education_section">
                    <h3 className="main-heading-Edu">BACHELOR OF TECHNOLOGY WITH (COMPUTER SCIENCE ENGINEERING)</h3>
                    <p>2020 - 2024</p>
                    <p>College of Engineering Roorkee (COER) </p>
                </div>


                <div className="education_section">
                    <h3 className="main-heading-Edu">HIGHER SECONDARY SCHOOL</h3>
                    <p>2018 - 2020</p>
                    <p>Mahamana Malviya Inter College Muzaffarnagr</p>
                    <p>UP Board</p>
                </div>


                <div className="education_section">
                    <h3 className="main-heading-Edu">SECONDARY SCHOOL</h3>
                    <p>2016 - 2018</p>
                    <p>R.S.D. Public School, Muzaffarnagar </p>
                    <p>UP Board</p>
                </div>

            </div>

            <hr className="hr_tag" ></hr>

            <div class="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>


        </div>
    );
}




export default Education_section;
import React from "react";
import './EducationSection.css';

const EducationSection = () => {
    return (
        <div id="edu" className="EducationSection_css ">

            <div className="EducationSection_head"  >
                <p className="mini-heading">RESUME</p>
                <h1 className="main-heading" >EXPERIENCE</h1>
            </div>

            <div className="EducationSection_container">

                <div className="EducationSection">
                    <h3 className="main-heading-Edu">Front-end Developer</h3>
                    <p>RDCPL Pvt Ltd. </p>
                    <p>September, 2024 - Present</p>
                    <p>Patna, Bihar, India · Remote</p>
                </div>
                <div className="EducationSection">
                    <h3 className="main-heading-Edu">Web Development</h3>
                    <p>Celebal Technologies ( Internship ) </p>
                    <p>June, 2023 - August, 2023</p>
                    <p>Jaipur, Rajasthan, India · Remote</p>
                </div>

            </div>


            <hr className="hr_tag" ></hr>

            <div className="EducationSection_head"  >
                <p className="mini-heading">RESUME</p>
                <h1 className="main-heading" >EDUCATION</h1>
            </div>

            <div className="EducationSection_container">

                <div className="EducationSection">
                    <h3 className="main-heading-Edu">BACHELOR OF TECHNOLOGY WITH (COMPUTER SCIENCE ENGINEERING)</h3>
                    <p>2020 - 2024</p>
                    <p>College of Engineering Roorkee (COER) </p>
                </div>


                <div className="EducationSection">
                    <h3 className="main-heading-Edu">HIGHER SECONDARY SCHOOL</h3>
                    <p>2020</p>
                    <p>Mahamana Malviya Inter College Muzaffarnagr</p>
                    <p>UP Board</p>
                </div>


                <div className="EducationSection" id="ak" >
                    <h3 className="main-heading-Edu">SECONDARY SCHOOL</h3>
                    <p>2018</p>
                    <p>R.S.D. Public School, Muzaffarnagar </p>
                    <p>UP Board</p>
                </div>

            </div>

            <hr className="hr_tag" ></hr>

            <div className="footer"><p> &copy; 2022 <span className="name">Vipin</span> . All Rights Reserved.</p></div>


        </div>
    );
}




export default EducationSection;
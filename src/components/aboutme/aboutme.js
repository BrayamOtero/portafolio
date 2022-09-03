import React from "react";
import "./aboutme.css"
import CardAbout from "./cardinfo";
import CV from "../../assets/cv.pdf"
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { VscGithub } from 'react-icons/vsc'


const Aboutme = () => {
    return (
        <section className="aboutme">
            <h1 className="about_title"> About Me</h1>
            <div className="about_main">
                <div className="about_description">
                    <p>I am a final semester student of electronic engineering and telecommunications. I have more than a year of experience in developing high-performance mobile, web and business applications. I like to learn design patterns and good programming practices to deliver a scalable and flexible application. I am passionate about learning and experiencing new technologies for the development of applications or solving everyday problems. In addition, I am an academic researcher on the topic of artificial intelligence applied to communication networks.</p>
                </div>
                <div className="about_card_space">
                    <CardAbout
                        title="Expirience"
                        description="1+ year working." />
                    <CardAbout
                        title="Projects"
                        description="10+ completed projects." />
                    <div className="about_btn">
                        <a href={CV} className="btn_cv_dl">Download Resume</a>
                    </div>
                    <div className="social_zone">                        
                        <a href='https://github.com/BrayamOtero' className="icon_social"> <VscGithub  size={30} /> </a> 
                        <a href='https://www.linkedin.com/in/brayam-david-otero-pomeo-bb6590114/'  className="icon_social"> <RiLinkedinBoxLine  size={30} /> </a>                        
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Aboutme
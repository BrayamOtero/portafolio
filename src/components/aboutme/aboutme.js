import React, {useState} from "react";
import "./aboutme.css"
import CardAbout from "./cardinfo";
import CV from "../../assets/cv.pdf"
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { VscGithub } from 'react-icons/vsc'
import CardSkill from "./cardSkill";

const Aboutme = () => {
    const [showMore, setShowMore] = useState(false);
    const onClick = () => setShowMore(!showMore)

    return (
        <section id="aboutme" className="aboutme">
            <h1 className="about_title"> About Me</h1>
            <div className="about_main">
                <div className="about_description">
                    <p>I am a final semester student of electronic engineering and telecommunications. I have more than a year of experience in developing high-performance mobile, web and business applications. I like to learn design patterns and good programming practices to deliver a scalable and flexible application. I am passionate about learning and experiencing new technologies for the development of applications or solving everyday problems. In addition, I am an academic researcher on the topic of artificial intelligence applied to communication networks.</p>
                </div>
                <div className="about_card_space">
                    <div className="card_expirience">
                        <CardAbout
                            title="Expirience"
                            description="1+ year working." />
                    </div>
                    <div className="card_projects">
                        <CardAbout
                            title="Projects"
                            description="10+ completed projects." />
                    </div>
                    <div className="about_btn">
                        <a href={CV} className="btn_cv_dl">Download Resume</a>
                    </div>
                    <div className="social_zone">
                        <a href='https://github.com/BrayamOtero' className="icon_social"> <VscGithub size={30} /> </a>
                        <a href='https://www.linkedin.com/in/brayam-david-otero-pomeo-bb6590114/' className="icon_social"> <RiLinkedinBoxLine size={30} /> </a>
                    </div>
                </div>
            </div>
            <h1>My Skills</h1>
            <div className="skills_main">
                <div className="skills_language">
                    <CardSkill content={
                            [
                                { name: 'Java', per: '85' },
                                { name: 'Python', per: '70' },
                                { name: 'Javascript', per: '50' },                                
                                { name: 'Kotlin', per: '25' },
                            ]
                        }
                        title='Programming Languages' />
                </div>

                <div className="skills_frameworks">
                    <CardSkill content={
                            [
                                { name: 'SpringBoot', per: '80' },
                                { name: 'JavaEE', per: '80' },
                                { name: 'React', per: '60' },
                                { name: 'Angular', per: '50' },
                                { name: 'PrimeFaces', per: '50' },
                                { name: 'Thymeleaf', per: '40' },
                            ]
                        }
                        title='Frameworks/Libraries' />                    
                </div>
                <div className="skills_db">
                    <CardSkill content={
                            [
                                { name: 'SQL Server', per: '80' },
                                { name: 'MySQL', per: '70' },
                                { name: 'PostgreSQL', per: '70' },
                                { name: 'MongoDB', per: '60' },
                            ]
                        }
                        title='Data Bases' />                     
                </div>                
                {showMore ? 
                <><div className="skills_deploy">
                        <CardSkill content={[
                            { name: 'IIS', per: '80' },
                            { name: 'Heroku', per: '50' },
                            { name: 'Google Cloud', per: '50' },
                            { name: 'Wildfly', per: '70' },
                            { name: 'Tomcat', per: '50' },
                        ]}
                            title='Deploy Envioremnt/Server' />

                    </div><div className="skills_testing">
                            <CardSkill content={[
                                { name: 'JMeter', per: '80' },
                                { name: 'JUnit', per: '50' },
                            ]}
                                title='Testing/Performance' />
                        </div></>
                : null}
                <div className="skills_see_more">
                    <button className="btn_see_more" onClick={onClick}>{showMore ? "Show Less" : "Show More"}</button>
                </div>
            </div>
        </section>
    );
}
export default Aboutme
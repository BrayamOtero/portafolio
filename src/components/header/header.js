import React from "react";
import "./header.css"
import PHOTO from "../../assets/images/p1.jpeg"

const Header = () => {
    return (
        <header>
            <div id="home" className="container header__container">
                <div className="info__header">
                    <h4>Hi I'm</h4>
                    <h1>Brayam Otero</h1>
                    <h3>Full Stack Developer focused on JAVA Backend</h3>
                    <p className="info__brief">I have developed <u>high performance</u> web and mobile applications.</p>
                </div>
                <div className="me">
                    <img src={PHOTO} alt="me" />
                </div>                
            </div>
        </header>
    );
}
export default Header
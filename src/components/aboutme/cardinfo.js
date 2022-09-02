import React from "react";
import "./aboutme.css";

const CardAbout = ({ title, description }) => {
    return (
        <article className="about_card">
            <div className="about_info_card">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </article>
    );
};
export default CardAbout;

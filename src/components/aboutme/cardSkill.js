import React from "react";
import "./aboutme.css";

const CardSkill = ({ title, content }) => {
    return (
        <div className="skills_card">
            <h4>{title}</h4>
            <ul>
                {content.map(item => {
                    return (
                        <li>
                            <div className="skills_item">
                                <p>  {item.name}</p>
                                <div className="progressBar">
                                    <div className="bar">
                                        <span style={{ width: `${item.per}%` }} className="bar_completed"></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}                
            </ul>
        </div>
    );
};
export default CardSkill;
import React from "react";
import "./nav.css"

const Navbar = () => (
    <nav>
        <div className="logo">
            <a href="#">Home</a>
        </div>
        <ul>            
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
)
export default Navbar
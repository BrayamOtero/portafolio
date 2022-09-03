import React from "react";
import "./nav.css"

const Navbar = () => (
    <nav>
        <div className="logo">
            <a href="#home">Home</a>
        </div>
        <ul>            
            <li><a href="/#aboutme">Portafolio</a></li>
            <li><a href="/#aboutme">Contact</a></li>
            <li><a href="/#aboutme">About</a></li>
        </ul>
    </nav>
)
export default Navbar
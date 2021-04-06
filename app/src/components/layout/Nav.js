import React from "react";
import { Link } from "react-router-dom";

import Star from "./../../content/images/star.svg";

const Nav = () => {
    return (
        <nav style={{backgroundColor: "#3d2d2d"}}>
            <div className="container">
                <ul style={{ listStyleImage: `url('${Star}')`}}>
                    <li><Link to="/" className="text-decoration-none text-white">Home</Link></li>
                    <li><Link to="/menu" className="text-decoration-none text-white">Menu</Link></li>
                    <li><Link to="/profile" className="text-decoration-none text-white">Profil</Link></li>
                    <li><Link to="/contact" className="text-decoration-none text-white">Kontakt</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
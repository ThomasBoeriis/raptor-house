import React from "react";
import Logo from "../../content/images/logo.png"

import { TiStar } from "react-icons/ti";


const Header = () => {

    return (
        <header className="container-fluid p-4" style={{borderTop: '5px solid maroon', borderBottom: '2px solid maroon', height: 200, backgroundColor: '#bf945d'}}>
            <h1 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <TiStar style={{color:"maroon"}} /> 
                Raptor 
                <img alt="logo" src={Logo} className="px-3 d-none d-md-inline" /> 
                House 
                <TiStar  style={{color:"maroon"}}/>
            </h1>
        </header>
    )
}

export default Header;
import React from "react";
import Headerimg from "./horrorscopeheader.png";
import "./style.css"

function Header() {
    return (
        <div className="landing-header">
            <a href="/"><img className="landing-logo" src={Headerimg} /></a>
            <div className="social">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
            <br></br>       
        </div>

    );
}



export default Header;
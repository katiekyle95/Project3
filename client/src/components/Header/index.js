import React from "react";
import Headerimg from "./horrorscopeheader.png";
import "./style.css"

function Header() {
    return (
        <div className="landing-header">
            <img className="landing-logo" src={Headerimg} />
            <div className="social">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
            </div>
            <br></br>       
        </div>

    );
}



export default Header;
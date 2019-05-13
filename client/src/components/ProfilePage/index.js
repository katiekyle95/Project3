import React, { Component } from "react";
import "./style.css";

class ProfilePage extends Component {
    render() {
        return (
            <div className="all">
            <h1 id="prof-title"><span className="username">USERNAME</span>'S HORROR SCOPE</h1>
            <div className="rate-this-movie">
                    <h2 id="rate-this">Recommended Movies</h2>
            </div>
            <div class="scrolling-wrapper-flexbox">
                <div className="scroll-card"><h2>Card</h2></div>
                <div className="scroll-card"><h2>Card</h2></div>
                <div className="scroll-card"><h2>Card</h2></div>
                <div className="scroll-card"><h2>Card</h2></div>
                <div className="scroll-card"><h2>Card</h2></div>
                <div className="scroll-card"><h2>Card</h2></div>
            </div>
            </div>
        );
    }
}

export default ProfilePage;
import React, { Component } from "react";
import "./style.css";
import Brood from "./../RecCards/brood.jpg";


function WatchedCard(props) {
    return (
        <div className="watched-card-space"> 
                <a href="#">  
                    <img className="watched-poster" src={ Brood }></img>
                    <br></br>
                    <span className="watched-name">The Brood</span>
                </a>
        </div>
    )
}

function ToWatchCard(props) {
    return (
        <div className="watched-card-space"> 
                <a href="#">  
                    <img className="watched-poster" src={ Brood }></img>
                    <br></br>
                    <span className="watched-name">The Brood</span>
                </a>
        </div>
    )
}

function ProfileTitle(props) {
    var username = props.userName;
    return (
        <h1 id="prof-title"><span className="username">{username}</span>'s HORROR SCOPE</h1>
    );
}


class ProfilePage extends Component {

    
    
    handleMovieClicked = () => {
        var {id} = this.props.movie;
        window.location = '/movie/' + id;
    };
   
    render() {
        return (
            <React.Fragment>
            <div className="all">
            <ProfileTitle />
            <div className="rate-this-movie">
                    <h2 id="rate-this">Watched</h2>
            </div>
            <div class="scrolling-wrapper-flexbox">
                <WatchedCard />
                <WatchedCard />
                <WatchedCard />
                <WatchedCard />
                <WatchedCard />
                <WatchedCard />
            </div>
            <div id="spacer"></div>
            <div className="rate-this-movie">
                    <h2 id="rate-this">To Watch</h2>
            </div>
            <div class="scrolling-wrapper-flexbox">
                <ToWatchCard />
                <ToWatchCard />
                <ToWatchCard />
                <ToWatchCard />
                <ToWatchCard />
            
            </div>
            <div id="spacer"></div>
            </div>
            
            </React.Fragment>
        );
    }
}

export default ProfilePage;
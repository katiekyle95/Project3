import React, { Component } from "react";
import "./style.css";
import Brood from "./brood.jpg";

class RecCard extends Component {

    handleMovieClicked = () => {
        var {id} = this.props.movie;
        window.location = '/movie/' + id;
    };

    render() {
        return ( 
                <div className="card-space"> 
                <a onClick={this.handleMovieClicked}>  
                    <img className="rec-poster" src={ Brood }></img>
                    <br></br>
                    <span className="rec-name">The Brood</span>
                </a>
                </div>
               
            
        );
    }
}

export default RecCard;
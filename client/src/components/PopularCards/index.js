import React, { Component } from "react";
import "./style.css";
import Wicker from "./wicker.jpg";
import Star from "./../MoviePage/star.png";

class PopCards extends Component {

    handleMovieClicked = () => {
        var {id} = this.props.movie;
        window.location = '/movie/' + id;
    };
    

    render() {

        var {title, overview, release_date,poster_path} = this.props.movie;
        var year = release_date.substring(0,4);
        var posterImg = 'http://image.tmdb.org/t/p/w185' + poster_path;

        return (
           <div className="card">
                <img className="result-poster" src={posterImg}></img>
                <div className="card-text">
                    <div className="card-title">
                        <a onClick={this.handleMovieClicked}>
                            <span className="movie-name">{title}</span>
                        </a>
                        <h2>(<span className="movie-year">{year}</span>)</h2>
                    </div>
                    
                    <div className="card-ratings">
                    
                    <div className="rating">
                            <h3>Quality:</h3>
                            <h2><img src={Star}></img><span className="quality-average">4.9</span></h2>
                        </div>
                        <div className="rating">
                            <h3>Entertainment:</h3>
                            <h2><img src={Star}></img><span className="ent-average">4.6</span></h2>
                        </div>
                        <div className="rating">
                            <h3>Scariness:</h3>
                            <h2><img src={Star}></img><span className="scariness-average">3</span></h2>
                        </div> 
                    </div>
                    
                    <p><span className="movie-overview">{overview}</span></p>
                <div className="spacer"></div>
                <div className="add-buttons">
                    <button className="add-watched">Watched</button>
                    <button className="add-to-watch">To Watch</button>
                </div>
                
                </div>
                
                
           </div> 
        );
    }
}

export default PopCards;
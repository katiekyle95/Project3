import React, { Component } from "react";
import "./style.css";
import Wicker from "./wicker.jpg";
import Star from "./star.png";
import Comments from "./../Comments";
import StarRatingComponent from 'react-star-rating-component';
import RecCard from "./../RecCards";


function StarRate(props) {


    return (
        <div id="reviewStars-input">
            <input id="star-4" type="radio" name="reviewStars"/>
            <label title="gorgeous" for="star-4"></label>
        
            <input id="star-3" type="radio" name="reviewStars"/>
            <label title="good" for="star-3"></label>
        
            <input id="star-2" type="radio" name="reviewStars"/>
            <label title="regular" for="star-2"></label>
        
            <input id="star-1" type="radio" name="reviewStars"/>
            <label title="poor" for="star-1"></label>
        
            <input id="star-0" type="radio" name="reviewStars"/>
            <label title="bad" for="star-0"></label>
        </div>
    )
}

function StarQual(props) {
    return (
        <div className="rating-label">
            <h3>Quality: </h3>
            <StarRatingComponent 
                name="qualityRating" 
                starCount={5}
                value={props.starRating}
                onStarClick={props.onStarClick}
                starColor={'#cc3333'}
                emptyStarColor={'#bbb'}
                renderStarIcon={() => <span><i className="fas fa-star "></i></span>}
            />
        </div>
    )
}

function StarEnt(props) {
    return (
        <div className="rating-label">
            <h3>Entertainment: </h3>
            <StarRatingComponent 
                name="entertainmentRating" 
                starCount={5}
                value={props.starRating}
                onStarClick={props.onStarClick}
                starColor={'#cc3333'}
                emptyStarColor={'#bbb'}
                renderStarIcon={() => <span><i className="fas fa-star "></i></span>}
            />
        </div>
    )
}

function StarScare(props) {
    return (
        <div className="rating-label">
            <h3>Scariness: </h3>
            <StarRatingComponent 
                name="scareRating" 
                starCount={5}
                value={props.starRating}
                onStarClick={props.onStarClick}
                starColor={'#cc3333'}
                emptyStarColor={'#bbb'}
                renderStarIcon={() => <span><i className="fas fa-star "></i></span>}
            />
        </div>
    )
}

function SeeComments(props) {
    return (
        <button className="see-comments" onClick={props.onClick}><span id="num-comments">X</span> Comments</button>
    )
}

function AddButtonsA(props) {
    
    
      return (
        
        <div className="add-buttonsa">
            <button className="add-watched">Watched</button>
            <button className="add-to-watch">To Watch</button>            
        </div>
        )  
    }
    
   



class MovieInfo extends Component {
    
    state = {
        isComment: false,
        qualityRating: 1,
        entertainmentRating: 1,
        scareRating: 1
    };

    handleOnYesComment = (event) => {
        this.setState ({ isComment: true })
    };

    handleOnStarClick = (nextValue, prevValue, name) => {
        switch( name )
        {
            case 'qualityRating':
                this.setState( {qualityRating: nextValue});    
            break;

            case 'entertainmentRating':
            this.setState( {entertainmentRating: nextValue});    
            break;

            case 'scareRating':
            this.setState( {scareRating: nextValue});    
            break;
        }
        
    }

    render() {
        var {userName, isLoggedIn} = this.props;
        var {movie} = this.props;

        if ( movie.title === undefined )
        {
            return (
                <React.Fragment>
                <div className="all">
                </div>
                </React.Fragment>
            );
        }

        var {title, overview, release_date,poster_path,runtime,director} = movie;
        var year = release_date.substring(0,4);
        var posterImg = 'http://image.tmdb.org/t/p/w342' + poster_path;
        var {original_language} = movie;
        var language;
        switch ( original_language )
        {
            case "en":
                language = "English";
                break;
            case "es":
                language = "Spanish";
                break;
            case "it":
                language = "Italian";
                break;
            case "ko":
                language = "Korean";
                break;
            case "ja":
                language = "Japanese";
                break;
            case "de":
                language = "German";
                break;
            case "fr":
                language = "French";
                break;
            default:
                language = "English";
                break;
        }



        return (
            <React.Fragment>
            <div className="all">
            <div className="page">
                <img className="page-poster" src={posterImg}></img>
                <div className="movie-text">
                    <div className="movie-title">
                        <h1>
                            <span className="movie-name">{title}</span>
                        </h1>
                        <h2>(<span className="movie-year">{year}</span>)</h2>
                    </div>
                    <div className="movie-ratings">
                        <div className="ratinga">
                            <h3>Quality:</h3>
                            <h2><img src={Star}></img><span className="quality-average">4.9</span></h2>
                        </div>
                        <div className="ratinga">
                            <h3>Entertainment Value:</h3>
                            <h2><img src={Star}></img><span className="ent-average">4.6</span></h2>
                        </div>
                        <div className="ratinga">
                            <h3>Scariness:</h3>
                            <h2><img src={Star}></img><span className="scariness-average">3</span></h2>
                        </div>   
                    </div>
                    <div className="movie-details">
                        <div className="single-line">
                            <h3>Director: </h3> 
                            <p><span className="director">{director}</span></p>
                        </div>
                        <div className="single-line">
                            <h3>Runtime: </h3> 
                            <p><span className="runtime">{runtime+"m"}</span></p>
                        </div>
                        <div className="single-line">
                            <h3>Language: </h3> 
                            <p><span className="language">{language}</span></p>
                        </div>
                        <div className="page-overview">
                            <h3> Overview: </h3>
                            <p><span className="overview">{overview}}</span></p> 
                        </div>
                    </div>
                 </div>    
         </div> 
         <div className="user-rate">
         <AddButtonsA />
                <hr id="sep-ratings"></hr>
                <div className="rate-this-movie">
                    <h2 id="rate-this">Rate this Movie</h2>
                </div>
                
            <div className="user-rate-content">
                    
                    <StarQual starRating={this.state.qualityRating} onStarClick={this.handleOnStarClick}/>
                    <StarEnt starRating={this.state.entertainmentRating} onStarClick={this.handleOnStarClick}/>
                    <StarScare starRating={this.state.scareRating} onStarClick={this.handleOnStarClick}/>
            </div>
            <hr id="sep-ratings"></hr>
                <div className="rate-this-movie">
                    <h2 id="rate-this">Recommended Movies</h2>
                </div>
            <div className="recommended-here">
                <RecCard />
                <RecCard />
                <RecCard />
                <RecCard />
                <RecCard />
            </div>    

            
            {/* <SeeComments onYesComment={this.handleOnYesComment}/>
            <Comments isComment={this.state.isComment}/> */}
         </div>
            
            
         </div>
         </React.Fragment>
        );

    }
}

export default MovieInfo;
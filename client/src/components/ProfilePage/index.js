import React, { Component } from "react";
import "./style.css";
import Brood from "./../RecCards/brood.jpg";


function WatchedCard(props) {

    var {title,poster_path} = props.movie;
    var posterImg = 'http://image.tmdb.org/t/p/w185' + poster_path;
    
    return (
        <div className="watched-card-space"> 
                <a href="#">  
                    <img className="watched-poster" src={posterImg}></img>
                    <br></br>
                    <span className="watched-name">{title}</span>
                </a>
        </div>
    )
}

function ToWatchCard(props) {

    var {title,poster_path} = props.movie;
    var posterImg = 'http://image.tmdb.org/t/p/w185' + poster_path;

    return (
        <div className="watched-card-space"> 
                <a href="#">  
                    <img className="watched-poster" src={ posterImg }></img>
                    <br></br>
                    <span className="watched-name">{title}</span>
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

        var {watched, wanted, userName} = this.props;
        

        return (
            <React.Fragment>
            <div className="all">
            <ProfileTitle userName={userName}/>
            <div className="rate-this-movie">
                    <h2 id="rate-this">Watched</h2>
            </div>
            <div class="scrolling-wrapper-flexbox">

                {watched.length ? (
                    <div>
                    {watched.map(movie => (
                    <WatchedCard key={movie.id} movie={movie}/>
                    ))}
                </div>
                ) : (
                    <h3 id="no-results">No Results Found</h3>
                )}

            </div>
            <div id="spacer"></div>
            <div className="rate-this-movie">
                    <h2 id="rate-this">To Watch</h2>
            </div>
            <div class="scrolling-wrapper-flexbox">
                {wanted.length ? (
                    <div>
                    {wanted.map(movie => (
                    <ToWatchCard key={movie.id} movie={movie}/>
                    ))}
                </div>
                ) : (
                    <h3 id="no-results">No Results Found</h3>
                )}
            
            </div>
            <div id="spacer"></div>
            </div>
            
            </React.Fragment>
        );
    }
}

export default ProfilePage;


//{watched.map(movie => (
//    <WatchedCard movie={movie}/>
//     ))}

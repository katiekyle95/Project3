import React, { Component } from "react";

//import Searchbutton from "../components/Searchbutton";
import Nav from "../components/Nav";
import Header from "../components/Header";
import API from "../utils/API";
import Modal from "../components/Modal";
import Close from "../components/Close";
import Search from "../components/Search";
import Loginbox from "../components/LogInForms";
import MovieInfo from "../components/MoviePage";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./style.css";


function HorrorNav(props) {
  
    if ( props.isLoggedIn )
    {
      var greeting = 'Hello, ' + props.userName;
      return (
        <Nav> 
          <a href="/profile" className="toLogIn">{greeting}</a>
            <a href="/#"></a>
          <button type="button" onClick={props.onSearch} className="toSearch">SEARCH</button>
      </Nav>
  
      );
    }
  
    return (
      <Nav> 
        <button type="button" onClick={props.onShowLog} className="toLogIn">LOG IN</button>
        <a href="#"></a>
        <button type="button" onClick={props.onSearch} className="toSearch">SEARCH</button>
      </Nav>
    )
  }
  

function MoviePage(props) {
if ( props.isSearching )
{
    return (
        <div className="movie-here">
          <div className="spinner-div fa-3x"  >
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        </div>
    );
}

    return (
        <div className="movie-here">
            <MovieInfo 
                movie={props.movie} 
                userName={props.userName} 
                onUpdateReview={props.onUpdateReview}
                onWatched={props.onWatched}
                onWanted={props.onWanted}
                isWatched={props.isWatched}
                isWanted={props.isWanted}
                />
        </div>
    )
}


class Movie extends Component {
  state = {
    isOpen: false,
    isSignUp: false,
    isLog: false,
    movie: {},
    isSearching: false,
    watched: false,
    wanted: false,
  };

  componentDidMount() {
    
    this.setState({isSearching: true});
    var movieId = this.props.match.params.movieId;
    this.getData( movieId );

    /*
    API.movieDetails(movieId)
      .then( res => { 
          this.setState({ movie: res.data, isSearching:false })})
      .catch(err => console.log(err));
      */
  }
  async getData( movieId )
  {
    var res = await API.movieDetails(movieId);
    var movie = res.data;
    this.setState({ movie: movie, isSearching: false })

    var userRes = await API.getUser( this.props.userName );
    var watched = ( userRes.data.watched.indexOf( movie.id ) != -1 );
    var wanted = ( userRes.data.wanted.indexOf( movie.id ) != -1 );
    this.setState( {watched: watched, wanted: wanted });
  }



  handleOnSearch = (event) => {
    this.setState ({ isOpen: true })
  };

  handleOnClose = (event) => {
    this.setState ({ isOpen: false })
  };
  
  handleOnSign = (event) => {
    this.setState ({ isSignUp: true })
    
  };

  handleOnLogIn = (event) => {
    this.setState ({ isSignUp: false})
  };

  handleOnShowLog = (event) => {
    this.setState ({ isLog: true });
    
  };

  handleOnHideLog = (event) => {
    this.setState ({ isLog: false })
  };

  handleOnUserLoggedIn = (userName) => {
    this.setState ({ isLog: false })
  }

  handleUpdateReview = async (qual, ent, scare) => {
    var {movie} = this.state;
    movie.userQ = qual;
    movie.userE = ent;
    movie.userS = scare;
    
    var movieId = movie.id;
    var userName = this.props.userName;
    await API.movieAddReview( userName, movieId, qual, ent, scare, "" );
    var res = await  API.movieDetails(movieId);
    this.setState({ movie: res.data });
  }

  handleWatched = () => {
    if ( this.state.watched )
    {
        this.setState( { watched: false } );
        API.clear( this.props.userName, this.state.movie.id );
    } else {
        this.setState( { watched: true, wanted: false } );
        API.addWatched( this.props.userName, this.state.movie.id );
    }
  }

  handleWanted = () => {
    if ( this.state.wanted )
    {
        this.setState( { wanted: false } );
        API.clear( this.props.userName, this.state.movie.id );
    } else {
        this.setState( { wanted: true, watched: false, } );
        API.addWanted( this.props.userName, this.state.movie.id );
    }
      
  }

  render() {
    var {userName, isLoggedIn} = this.props;
    var {movie} = this.state;

    if ( movie.reviews != undefined )
    {
        var { reviews } = movie;
        var userQ = 1;
        var userE = 1;
        var userS = 1;
        for ( var i = 0; i < reviews.length; i++ )
        {
            if ( reviews[i].userName == userName )
            {
                userQ = reviews[i].quality;
                userE = reviews[i].entertainment;
                userS = reviews[i].scariness;
            }
        }
        movie.userQ = userQ;
        movie.userE = userE;
        movie.userS = userS;
    }


    return (
      <React.Fragment>
              <Header />
              <HorrorNav 
                onSearch={this.handleOnSearch} 
                onShowLog={this.handleOnShowLog}
                isLoggedIn={isLoggedIn}
                userName={userName}
              /> 
              <Modal isOpen={this.state.isOpen}>
                <Close onClick={this.handleOnClose}/>
                <Search />
              </Modal>
              <Loginbox 
                handleOnLogIn={this.handleOnLogIn} 
                handleOnHideLog={this.handleOnHideLog} 
                handleOnSign={this.handleOnSign} 
                isSignUp={this.state.isSignUp} 
                isLog={this.state.isLog} 
                onUserLoggedIn={this.handleUserLoggedIn}
              />

              <MoviePage 
                movie={movie} 
                userName={userName}
                onUpdateReview={this.handleUpdateReview}
                isSearching={this.state.isSearching}
                onWatched={this.handleWatched}
                onWanted={this.handleWanted}
                isWatched={this.state.watched}
                isWanted={this.state.wanted}
                />
        </React.Fragment>
        )
    }
}

export default Movie;

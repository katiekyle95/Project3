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
          <button type="button" className="toLogIn">{greeting}</button>
          <a href="/profile">MY PROFILE</a>
          <button type="button" onClick={props.onSearch} className="toSearch">SEARCH</button>
      </Nav>
  
      );
    }
  
    return (
      <Nav> 
        <button type="button" onClick={props.onShowLog} className="toLogIn">LOG IN</button>
        <a href="#">MY PROFILE</a>
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
            <MovieInfo movie={props.movie} userName={props.userName}/>
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
  };

  componentDidMount() {
    this.setState({isSearching: true});
    var movieId = this.props.match.params.movieId;
    API.movieDetails(movieId)
      .then(res => this.setState({ movie: res.data, isSearching:false }))
      .catch(err => console.log(err));
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


  render() {
    var {userName, isLoggedIn} = this.props;
    var {movie} = this.state;

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

              <MoviePage movie={movie} userName={userName} isSearching={this.state.isSearching}/>
            )
            }
              
              
      </React.Fragment>
      
    );
  }
}

export default Movie;

import React, { Component } from "react";

//import Searchbutton from "../components/Searchbutton";
import Nav from "../components/Nav";
import Header from "../components/Header";
import API from "../utils/API";
import Modal from "../components/Modal";
import Close from "../components/Close";
import Search from "../components/Search";
import Loginbox from "../components/LogInForms";
import PopCards from "../components/PopularCards";
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


function PopularContainer(props) {
  return (
    <div className="popular-here">
      <h2>Popular Now</h2>
      {/* {props.movie.length ? (
        <List>
        {props.movies.map(movie => (
          <ListItem key={movie.id}>
            <PopCards movie={movie}/>
          </ListItem>
        ))}
      </List>
      ) : (
        <h3 id="no-results">No Results Found</h3>
      )} */}
    </div>
  )
}





class Books extends Component {
  state = {
    isOpen: false,
    isSignUp: false,
    isLog: false
  };

  

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
  }

  handleOnUserLoggedIn = (userName) => {
    this.props.onLogin(userName);
    this.setState ({ isLog: false })
    this.forceUpdate();
  }

  render() {
    var {userName, isLoggedIn} = this.props;

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
                onUserLoggedIn={this.handleOnUserLoggedIn}
              />
              <PopularContainer />
              
      </React.Fragment>
      
    );
  }
}

export default Books;

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
import Pic from "./404pic.png";
import LogoB from "./logo.png";

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








class NoMatch extends Component {
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
              {/* <Header />
              <HorrorNav /> */}
              <img className="four" src={Pic}></img>
              <a className="to-home" href="/"><img className="four-logo" src={LogoB}></img></a>
              
              
      </React.Fragment>
      
    );
  }
}

export default NoMatch;

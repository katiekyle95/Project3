import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import Close from "../components/Close";
import Search from "../components/Search";
import Loginbox from "../components/LogInForms";

function HorrorNav(props) {
    return (
      <Nav> 
        <a href="/">HOME</a>
        <a href="#">MY PROFILE</a>
        <button type="button" onClick={props.onSearch} className="toSearch">SEARCH</button>
      </Nav>
    )
  }


  

class LogIn extends Component {
    state = {
        isOpen: false,
        isSignUp: false
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
    }

render() {
    return (
        <React.Fragment>
              <Header />
              <HorrorNav onSearch={this.handleOnSearch} /> 
              <Modal isOpen={this.state.isOpen}>
                <Close onClick={this.handleOnClose}/>
                <Search />
              </Modal>
              <Loginbox handleOnLogIn={this.handleOnLogIn} handleOnSign={this.handleOnSign} isSignUp={this.state.isSignUp} />
                
            
              
              
      </React.Fragment>
    );
}

}

export default LogIn;
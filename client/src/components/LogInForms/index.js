import React, { Component } from "react";
import "./style.css";

function ToSign(props) {
    return (
        <button type="button" onClick={props.onClick} className="logbutton" id="not">Sign Up</button> 
    )
}

function ToLog(props) {
    return (
        <button type="button" onClick={props.onClick} className="logbutton" id="not">Log In</button>
    )
}


class Loginbox extends Component {


    


render () {
        console.log(this.props);
        let login = "";

       
        if (! this.props.isSignUp) {
            login = (
                <div className="box">
                <div className="buttonshere">
                    <button type="button" className="logbutton">Log In</button>
                    <ToSign onClick={this.props.handleOnSign} />
                    
                </div>  
                <input type="text" className="username" name="username" placeholder="username"></input>
                <br></br>
                <input type="text" className="username" name="password" placeholder="password"></input>
                <br></br>
                <button type="button" className="logingo">Log In</button>
            </div>
            );
        } else {
            login = (
                <div className="box">
                    <div className="buttonshere">
                    <ToLog onClick={this.props.handleOnLogIn} />
                    <button type="button" className="logbutton">Sign Up</button>    
                </div>  
                <input type="text" className="username" name="username" placeholder="username"></input>
                <br></br>
                <input type="text" className="username" name="password" placeholder="password"></input>
                <br></br>
                <button type="button" className="logingo">Sign Up</button>
            
                </div>
            )
        }
        return (
            <div>
                {login}
            </div>
        )

      
    
  }
}


  export default Loginbox;
import React, { Component } from "react";
import "./style.css";


class Nav extends Component {
  render () {
    return (
      <nav>
        {this.props.children}
      </nav>
    )
  }
}



export default Nav;

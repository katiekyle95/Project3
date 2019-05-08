import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
//import Searchbutton from "../components/Searchbutton";
import Nav from "../components/Nav";
import Header from "../components/Header";
import API from "../utils/API";
import Modal from "../components/Modal";
import Close from "../components/Close";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./style.css";


function HorrorNav(props) {
  return (
    <Nav> 
      <a href="#">LOG IN</a>
      <a href="#">MY PROFILE</a>
      <button type="button" onClick={props.onSearch} className="toSearch">SEARCH</button>
    </Nav>
  )
}


class Books extends Component {
  state = {
    isOpen: false
  };



  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  handleOnSearch = (event) => {
    this.setState ({ isOpen: true })
  };
  

  render() {
    return (
      <React.Fragment>
              <Header />
              <HorrorNav onSearch={this.handleOnSearch} /> 
              <Modal isOpen={this.state.isOpen}>
                <Close />
                <Search />
              </Modal>
                
              
              
              
      </React.Fragment>
      
    );
  }
}

export default Books;

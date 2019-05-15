import React, { Component } from "react";

//import Searchbutton from "../components/Searchbutton";
import Nav from "../components/Nav";
import Header from "../components/Header";
import API from "../utils/API";
import Modal from "../components/Modal";
import Close from "../components/Close";
import Search from "../components/Search";
import Loginbox from "../components/LogInForms";
import { List, ListItem } from "../components/List";
import ResultCards from "../components/ResultsCards";
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


  
function ResultContainer(props) {
  if ( props.isSearching )
  {
    return (
      <div className="results-here" >
          <h2 >Search Results for   "<span>{props.searchName}</span>"</h2>
          <div className="spinner-div fa-3x"  >
            <i className="fas fa-spinner fa-spin"></i>
          </div>
      </div>
    );
  }



    return (
        <div className="results-here" >
            <h2 >Search Results for   "<span>{props.searchName}</span>"</h2>
            {props.movies.length ? (
              <List>
                {props.movies.map(movie => (
                  <ListItem key={movie.id}>
                    <ResultCards 
                      movie={movie} 
                      watched={props.watched} 
                      wanted={props.wanted}
                      onWatched={props.onWatched}
                      onWanted={props.onWanted}
                      />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 id="no-results">No Results Found</h3>
            )}
        </div>
    )
}

  
  class Results extends Component {
    state = {
      isOpen: false,
      isSignUp: false,
      isLog: false,
      movies: [],
      isSearching: false,
      searchName: "",
      watched: [],
      wanted: [],
    };
  
    async componentDidMount() {
      var searchName = this.props.match.params.name;
      this.setState({ isSearching: true, searchName: searchName,} );


      try {
        var res = await API.movieSearch(searchName);
        this.setState({ movies: res.data, isSearching: false })
      }
      catch (err)
      {
        console.log( err.message );
      }
      
      try {
        var userRes = await API.getUser( this.props.userName );
        this.setState( {watched: userRes.data.watched, wanted: userRes.data.wanted });
      }
      catch (err)
      {
        console.log( err.message );
      }

    }

    getUserData = async () =>
    {
      try {
        var userRes = await API.getUser( this.props.userName );
        this.setState( {watched: userRes.data.watched, wanted: userRes.data.wanted });
      }
      catch (err)
      {
        console.log( err.message );
      }
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
    }
    
    handleOnWatched = async (movieId) => {
      var isWatched = ( this.state.watched.indexOf( movieId ) != -1 );
      if ( isWatched )
      {
        await API.clear( this.props.userName, movieId );
      } else {
        await API.addWatched( this.props.userName, movieId );
      }
      this.getUserData();
    }
    handleOnWanted = async (movieId) => {
      var isWanted = ( this.state.wanted.indexOf( movieId ) != -1 ); 
      if ( isWanted )
      {
        await API.clear( this.props.userName, movieId );
      } else {
        await API.addWanted( this.props.userName, movieId );
      }
      this.getUserData();
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
              <ResultContainer 
                movies={this.state.movies}
                watched={this.state.watched}
                wanted={this.state.wanted}
                isSearching={this.state.isSearching}
                searchName={this.state.searchName}
                onWatched={this.handleOnWatched}
                onWanted={this.handleOnWanted}
                />
              
                
                
        </React.Fragment>
        
      );
    }
  }
  
var styles = {
  spinner: {
    color: 'white',
  },
}

  export default Results;
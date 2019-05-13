import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Results from "./pages/Results";
import Movie from "./pages/Movie";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";



class App extends Component {
  state = {
    isLoggedIn: false,
    userName: "",
  };

  componentDidMount()
  {
    var userName = sessionStorage.getItem('userName');
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    this.setState ({ userName: userName, isLoggedIn: isLoggedIn });
  };

  handleLoggedIn = (name) =>
  {
    this.setState ({ userName: name, isLoggedIn: true });
    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('isLoggedIn', true);
  };


  render() {

    return (
    <Router>
      <div>
        
        <Switch>

          <Route
            exact path='/'
            render={(props) => <Books {...props} userName={this.state.userName} isLoggedIn={this.state.isLoggedIn} onLogin={this.handleLoggedIn}/>}
          />

          <Route
            exact path='/search/:name'
            render={(props) => <Results {...props} userName={this.state.userName} isLoggedIn={this.state.isLoggedIn} onLogin={this.handleLoggedIn}/>}
          />

          <Route
            exact path='/movie/:movieId'
            render={(props) => <Movie {...props} userName={this.state.userName} isLoggedIn={this.state.isLoggedIn} onLogin={this.handleLoggedIn}/>}
          />

          <Route
            exact path='/profile'
            render={(props) => <Profile {...props} userName={this.state.userName} isLoggedIn={this.state.isLoggedIn} onLogin={this.handleLoggedIn}/>}
          />
          
         
        </Switch>
      </div>
    </Router>
  );
};
}


//<Route exact path="/" component={Books} />

//<Route exact path="/" component={Books} />


export default App;

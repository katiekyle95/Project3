import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";

import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

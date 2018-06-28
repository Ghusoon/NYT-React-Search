import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import save from "./pages/save";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      
        <Route exact path="/home" component={home} />
        <Route exact path="/save" component={save} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

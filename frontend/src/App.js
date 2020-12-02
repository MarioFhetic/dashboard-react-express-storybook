import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";

import { NavBar } from "./components";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;

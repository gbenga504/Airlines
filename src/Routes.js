import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginScreen from "./views/LoginScreen";

class AppRoute extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Switch>
            <Route component={LoginScreen} path="/login" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRoute;

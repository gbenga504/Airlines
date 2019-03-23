import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginScreen from "./views/LoginScreen";
import DashboardScreen from "./views/DashboardScreen";

class AppRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={LoginScreen} path="/login" />
          <Route component={DashboardScreen} path="/" />
        </Switch>
      </Router>
    );
  }
}

export default AppRoute;

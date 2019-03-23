import React from "react";

import "./index.css";
import HTMLTitle from "../../components/HTMLTitle";

export default class LoginScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <HTMLTitle title="Login | Realtime airline data" />
      </React.Fragment>
    );
  }
}

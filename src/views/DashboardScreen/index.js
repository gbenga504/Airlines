import React from "react";

import "./index.css";
import HTMLTitleAtom from "../../components/HTMLTitleAtom";
import HeaderAtom from "../../components/HeaderAtom";

export default class DashboardScreen extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <HTMLTitleAtom title="Login | Realtime airline data" />
        <HeaderAtom />
      </React.Fragment>
    );
  }
}

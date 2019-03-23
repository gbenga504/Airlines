import React from "react";
import PropTypes from "prop-types";

export default class HTMLTitle extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return null;
  }
}

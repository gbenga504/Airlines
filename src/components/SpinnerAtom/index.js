import React from "react";
import PropTypes from "prop-types";

import "./index.css";

/**
 * This component is the spinnner displayed when a fresh query or sort is selected
 * A small timeout is set as a delay for the Spinner before the actual content is loaded
 * so that a flicker is not seen on screen... This is necessary so as to prevent glitches in the UI
 */
class SpinnerAtom extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  };

  state = {
    visible: false
  };

  componentDidUpdate(prevProps) {
    let { loading } = this.props;
    if (loading) {
      this.timer = setTimeout(() => this.setState({ visible: true }), 1000);
    } else if (prevProps.loading && loading === false) {
      clearTimeout(this.timer);
      this.setState({ visible: false });
    }
  }

  render() {
    return this.state.visible ? (
      <div className="spinner-container">
        <div className="circular-spinner" />
      </div>
    ) : null;
  }
}

export default SpinnerAtom;

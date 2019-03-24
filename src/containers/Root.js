import React from "react";
import { connect } from "react-redux";

import SpinnerAtom from "../components/SpinnerAtom";

/**
 * This is a top level component which wraps and renders the Spinner component
 * around the top level parent container view
 */
class Root extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <SpinnerAtom loading={this.props.citiesLoading} />
        {this.props.children}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    citiesLoading: state.cities.loading
  };
}

export default connect(mapStateToProps)(Root);

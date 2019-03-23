import React from "react";
import { connect } from "react-redux";

import "./index.css";
import HTMLTitleAtom from "../../components/HTMLTitleAtom";
import HeaderAtom from "../../components/HeaderAtom";
import GridAtom from "../../components/Dashboard/GridAtom";
import { fetchCities } from "../../store/actions/cities";

class DashboardScreen extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    return (
      <React.Fragment>
        <HTMLTitleAtom title="Dashboard | Realtime airline data" />
        <HeaderAtom />
        <div className="col s12 list-container">
          <GridAtom cities={this.props.cities.data.states} />
        </div>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCities: () => {
      return dispatch(fetchCities());
    }
  };
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);

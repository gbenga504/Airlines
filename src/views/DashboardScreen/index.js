import React from "react";
import { connect } from "react-redux";

import "./index.css";
import HTMLTitleAtom from "../../components/HTMLTitleAtom";
import HeaderAtom from "../../components/HeaderAtom";
import GridAtom from "../../components/Dashboard/GridAtom";
import ModalAtom from "../../components/Dashboard/ModalAtom";
import { fetchCities, fetchFlights } from "../../store/actions";

class DashboardScreen extends React.PureComponent {
  state = {
    isModalVisible: false,
    currentCity: []
  };

  componentDidMount() {
    this.props.fetchCities();
  }

  hideModal = () => {
    this.setState({ isModalVisible: false, currentCity: [] });
  };

  setCurrentCity = currentCity => {
    this.setState({
      currentCity,
      isModalVisible: true
    });
  };

  loadFlights = (value, type) => {
    let { currentCity } = this.state;
    type === "arriving"
      ? this.props.fetchArrivingFlights(currentCity[0], value)
      : this.props.fetchDepartingFlights(currentCity[0], value);
  };

  render() {
    return (
      <React.Fragment>
        <HTMLTitleAtom title="Dashboard | Realtime airline data" />
        <HeaderAtom />
        <div className="col s12 list-container">
          <GridAtom
            cities={this.props.cities.data.states}
            onClick={this.setCurrentCity}
          />
        </div>
        <ModalAtom
          visible={this.state.isModalVisible}
          onHide={this.hideModal}
          onLoadFlights={this.loadFlights}
          title={this.state.currentCity[0]}
          city={this.state.currentCity}
          flights={this.props.flights}
        />
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCities: () => {
      return dispatch(fetchCities());
    },
    fetchArrivingFlights: (airport, minutes) => {
      return dispatch(fetchFlights(airport, true, minutes));
    },
    fetchDepartingFlights: (airport, minutes) => {
      return dispatch(fetchFlights(airport, false, minutes));
    }
  };
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    flights: state.flights
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);

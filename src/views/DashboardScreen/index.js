import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import "./index.css";
import HTMLTitleAtom from "../../components/HTMLTitleAtom";
import HeaderAtom from "../../components/HeaderAtom";
import GridAtom from "../../components/Dashboard/GridAtom";
import ModalAtom from "../../components/Dashboard/ModalAtom";
import { fetchCities, fetchFlights } from "../../store/actions";

class DashboardScreen extends React.PureComponent {
  state = {
    isModalVisible: false,
    currentCity: {}
  };

  componentDidMount() {
    //Run the initial fetch as a timer. This caters for a redirect in case the user is not authenticated
    this.initialTimer = setTimeout(() => this.props.fetchCities(), 500);
    this.refetchCities();
  }

  refetchCities = () => {
    //Fetch new updates after every 3 minutes
    this.timer = setTimeout(() => {
      this.props.fetchCities(true);
      this.refetchCities();
    }, 180000);
  };

  loadFlights = (value, type) => {
    let { currentCity } = this.state;
    type === "arriving"
      ? this.props.fetchArrivingFlights(currentCity.estArrivalAirport, value)
      : this.props.fetchDepartingFlights(
          currentCity.estDepartureAirport,
          value
        );
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.initialTimer);
  }

  hideModal = () => {
    this.setState({ isModalVisible: false, currentCity: {} });
  };

  openModal = currentCity => {
    this.setState({
      currentCity,
      isModalVisible: true
    });
  };

  logout = () => {
    localStorage.removeItem("user");
    this.props.history.push("/login");
  };

  render() {
    return localStorage.getItem("user") ? (
      <React.Fragment>
        <HTMLTitleAtom title="Dashboard | Realtime airline data" />
        <HeaderAtom onLogout={this.logout} />
        <div className="col s12 list-container">
          <GridAtom cities={this.props.cities.data} onClick={this.openModal} />
        </div>
        <ModalAtom
          visible={this.state.isModalVisible}
          onHide={this.hideModal}
          onLoadFlights={this.loadFlights}
          title={this.state.currentCity.icao24}
          city={this.state.currentCity}
          flights={this.props.flights}
        />
      </React.Fragment>
    ) : (
      <Redirect to="/login" />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCities: backgroundUpdate => {
      return dispatch(fetchCities(backgroundUpdate));
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

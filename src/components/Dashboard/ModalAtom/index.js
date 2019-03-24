import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import "./index.css";
import { LightText, BoldText } from "../../TextAtom";
import ButtonAtom from "../../ButtonAtom";
import { getDate } from "../../../utils";

export class ModalAtom extends React.PureComponent {
  static propTypes = {
    onLoadFlights: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    title: PropTypes.string,
    city: PropTypes.array,
    flights: PropTypes.object
  };

  state = {
    tableTitle: "",
    startPagination: 0,
    endPagination: 3,
    departing: "15",
    arriving: "15"
  };

  attemptFlightsLoading = (e, title, type) => {
    let value = e.target.value;
    this.setState(
      {
        tableTitle: `${title} ${value}minutes`
      },
      () => this.props.onLoadFlights(value, type)
    );
  };

  moveBackward = () => {
    let { startPagination, endPagination } = this.state;

    if (startPagination - 3 >= 0) {
      this.setState({
        startPagination: startPagination - 3,
        endPagination: endPagination - 3
      });
    }
  };

  moveForward = () => {
    let {
        flights: { data }
      } = this.props,
      { startPagination, endPagination } = this.state;

    if (endPagination + 3 <= data.length) {
      this.setState({
        startPagination: startPagination + 3,
        endPagination: endPagination + 3
      });
    }
  };

  renderDropDown = (title, type) => (
    <div className="col s12 m6" style={{ marginTop: 10 }}>
      <BoldText className="app-modal__dropdown--label">{title}</BoldText>
      <select
        className="app-modal__dropdown"
        onChange={e => this.attemptFlightsLoading(e, title, type)}
      >
        <option value="15">15 minutes</option>
        <option value="30"> 30 minutes</option>
        <option value="45">45 minutes</option>
      </select>
    </div>
  );

  renderData = () => {
    let {
        flights: { data }
      } = this.props,
      { startPagination, endPagination } = this.state;

    return (
      <table className="striped centered responsive-table app-modal__table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Icao24</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startPagination, endPagination).map((flight, i) => (
            <tr key={i}>
              <td>{i + startPagination + 1}</td>
              <td>{flight.icao24}</td>
              <td>{getDate(flight.lastSeen)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  renderTable = () => {
    let {
        flights: { loading, error, data }
      } = this.props,
      { startPagination, endPagination } = this.state;

    if (!loading && !error && data.length > 0) {
      return (
        <React.Fragment>
          <LightText className="app-modal__table-title">
            Showing all results for {this.state.tableTitle}
          </LightText>
          {this.renderData()}
          <div className="row app-modal__table-nav-container ">
            {startPagination - 3 >= 0 && (
              <div
                className="app-modal__table-nav-btn"
                onClick={this.moveBackward}
              >
                <i className="material-icons">keyboard_arrow_left</i>
              </div>
            )}
            {endPagination + 3 <= data.length && (
              <div
                className="app-modal__table-nav-btn"
                onClick={this.moveForward}
              >
                <i className="material-icons">keyboard_arrow_right</i>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    } else if (!loading && !error && data.length === 0) {
      return <BoldText className="app-loading-text">No Results Yet</BoldText>;
    } else if (loading) {
      return <BoldText className="app-loading-text">Loading</BoldText>;
    } else if (error) {
      return <BoldText className="app-error-text">An error occurred</BoldText>;
    }
    return null;
  };

  render() {
    return (
      <Dialog
        onClose={this.props.onHide}
        open={this.props.visible}
        aria-labelledby="simple-dialog-title"
        maxWidth={"sm"}
        fullWidth={true}
      >
        <DialogTitle id="simple-dialog-title">{this.props.title}</DialogTitle>
        <div className="col s12 app-modal__content">
          <LightText>Country: {this.props.city[2]}</LightText>
          <div className="row">
            {this.renderDropDown("Arriving Flights in the last", "arriving")}
            {this.renderDropDown("Departing Flights in the last", "departing")}
            {this.renderTable()}
            <div className="app-modal__close-btn-container">
              <ButtonAtom
                title="Close"
                className="app-modal__close-btn"
                onClick={this.props.onHide}
              />
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default ModalAtom;

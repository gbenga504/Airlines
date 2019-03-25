import React from "react";
import PropTypes from "prop-types";

import { getFullDate } from "../../../../utils";
import "./index.css";

/**
 * This is the default Cell component
 */
const Cell = props => (
  <div className="col s4 cell-item" onClick={props.onClick}>
    <div className="row">
      <span className="cell-item__title">Icao24: {`${props.id}`}</span>
    </div>
    <div className="row cell-item__content">
      First Seen: {getFullDate(props.firstSeen)}
    </div>
    <div className="row cell-item__content">
      Last Seen: {getFullDate(props.lastSeen)}
    </div>
    <div className="row cell-item__content">
      Estimated Departure Airport: {props.estDepartureAirport}
    </div>
    <div className="row cell-item__content">
      Estimated Arrival Airport: {props.estArrivalAirport}
    </div>
  </div>
);

Cell.propTypes = {
  id: PropTypes.string,
  firstSeen: PropTypes.number,
  estDepartureAirport: PropTypes.string,
  estArrivalAirport: PropTypes.string,
  lastSeen: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Cell;

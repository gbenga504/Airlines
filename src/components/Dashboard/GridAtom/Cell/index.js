import React from "react";
import PropTypes from "prop-types";

import "./index.css";

/**
 * This is the default Cell component
 */
const Cell = props => (
  <div className="col s4 cell-item" onClick={props.onClick}>
    <div className="row">
      <span className="cell-item__title">{`${props.id}`}</span>
    </div>
    <div className="row cell-item__content">Country: {props.country}</div>
    <div className="row cell-item__content">Longitude: {props.longitude}</div>
    <div className="row cell-item__content">Latitude: {props.latitude}</div>
    <div className="row cell-item__content">Velocity: {props.velocity}m/s</div>
  </div>
);

Cell.propTypes = {
  id: PropTypes.string,
  country: PropTypes.string,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  velocity: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Cell;

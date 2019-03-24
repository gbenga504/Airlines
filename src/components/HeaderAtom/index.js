import React from "react";
import PropTypes from "prop-types";

import "./index.css";

/**
 * This is the header of the application
 */
const HeaderAtom = props => (
  <div className={`row main-header-container`}>
    <div className={`main-header row`}>
      <div className="col s6">
        <span className="main-header__title--name">AirLine</span>
        <span className="main-header__title--slug">Reports</span>
      </div>
      <div className="col s5 main-header__off-icon" onClick={props.onLogout}>
        <i className="material-icons">power_settings_new</i>
      </div>
    </div>
  </div>
);

HeaderAtom.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default HeaderAtom;

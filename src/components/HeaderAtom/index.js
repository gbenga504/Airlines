import React from "react";

import "./index.css";

/**
 * This is the header of the application
 */
const HeaderAtom = () => (
  <div className={`row main-header-container`}>
    <div className={`main-header row`}>
      <div className="col s6">
        <span className="main-header__title--name">Airline</span>
        <span className="main-header__title--slug">Reports</span>
      </div>
      <div className="col s5 main-header__off-icon">
        <i className="material-icons">power_settings_new</i>
      </div>
    </div>
  </div>
);

export default HeaderAtom;

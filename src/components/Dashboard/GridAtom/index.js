import React from "react";

import "./index.css";
import Cell from "./Cell";

/**
 * This is the Grid view of the application
 */
export default class Grid extends React.PureComponent {
  render() {
    let { cities } = this.props;

    return (
      <React.Fragment>
        <span className="grid-container__title">
          Viewing {cities ? 10 : 0} cities
        </span>
        <div className="row grid">
          {cities &&
            cities
              .slice(0, 10)
              .map((city, i) => (
                <Cell
                  key={i}
                  id={city[0]}
                  country={city[2]}
                  longitude={city[5]}
                  latitude={city[6]}
                  velocity={city[9]}
                />
              ))}
        </div>
      </React.Fragment>
    );
  }
}

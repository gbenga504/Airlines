import React from "react";

const MediumText = props => (
  <span
    {...props}
    style={{ fontFamily: "Lato", fontWeight: 400, ...props.style }}
  >
    {props.children}
  </span>
);

export default MediumText;

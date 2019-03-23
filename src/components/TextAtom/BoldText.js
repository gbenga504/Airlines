import React from "react";

const BoldText = props => (
  <span
    {...props}
    style={{ fontFamily: "Lato", fontWeight: 700, ...props.style }}
  >
    {props.children}
  </span>
);

export default BoldText;

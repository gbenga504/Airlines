import React from "react";

const LightText = props => (
  <span
    {...props}
    style={{ fontFamily: "Lato", fontWeight: 300, ...props.style }}
  >
    {props.children}
  </span>
);

export default LightText;

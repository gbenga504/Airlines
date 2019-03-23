import React from "react";
import PropTypes from "prop-types";

import "./index.css";
import { MediumText } from "../TextAtom";

const ButtonAtom = props => (
  <button
    className={`btn waves-effect waves-light app-button ${props.className}`}
    type="submit"
    name="action"
    {...props}
  >
    <MediumText className={`app-button__text ${props.textClassName}`}>
      {props.title}
    </MediumText>
  </button>
);

export default ButtonAtom;

ButtonAtom.propTypes = {
  title: PropTypes.string.isRequired,
  textClassName: PropTypes.string
};

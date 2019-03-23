import React from "react";
import PropTypes from "prop-types";

const TextFieldAtom = props => (
  <div className="row">
    <div
      className={`input-field col s12 offset-m2 m8 ${props.containerClassName}`}
    >
      <input
        id={props.id || props.label}
        value={props.value}
        onChange={props.onChange}
        type={props.type || "text"}
        className={`${props.className} ${props.validate && "validate"}`}
      />
      <label className={`${props.labelClassName}`} htmlFor={props.label}>
        {props.label}
      </label>
    </div>
  </div>
);

export default TextFieldAtom;

TextFieldAtom.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  validate: PropTypes.bool,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

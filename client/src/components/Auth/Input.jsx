import React from "react";
import PropTypes from "prop-types";

import { toNormalCase } from "../../utilities/convertCase";

const isPasswordField = /password/i;

const Input = ({ name, value, ...props }) => {
  let normalCase = toNormalCase(name);
  let type = isPasswordField.test(name) ? "password" : "text";

  return (
    <div className="wrapper">
      <div className="input-group">
        <label htmlFor={normalCase}>{normalCase}</label>
        <input
          id={normalCase}
          name={name}
          value={value || ""}
          type={type}
          {...props}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default Input;

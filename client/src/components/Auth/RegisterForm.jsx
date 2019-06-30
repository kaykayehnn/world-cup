import React from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import { emailRgx, passwordRgx } from "../../utilities/validation";

const inputFields = [
  {
    key: "email",
    validator: emailRgx
  },
  {
    key: "password",
    validator: passwordRgx
  },
  {
    key: "repeatPassword",
    validator: passwordRgx
  }
];

const LoginForm = ({
  values,
  inputChange,
  switchState,
  createAccount,
  error,
  clearError
}) => {
  let inputNodes = inputFields.map(({ key }) => (
    <Input key={key} name={key} value={values[key]} onChange={inputChange} />
  ));

  let canSubmit = values.password === values.repeatPassword;
  for (let { key, validator } of inputFields) {
    canSubmit &= validator.test(values[key] || "");
  }

  function onSubmit(event) {
    event.preventDefault();

    createAccount();
  }

  return (
    <div className="welcome-modal">
      <div className="auth-title">
        <h2 className="title">Sign up</h2>
      </div>
      <div className={`auth-error ${error && "visible"}`} onClick={clearError}>
        {error || "Error"}
      </div>
      <form
        className="auth-form"
        onSubmit={preventDefaultAndCall(createAccount)}
      >
        {inputNodes}
        <div className="wrapper">
          <div className="input-group submit">
            <input
              type="submit"
              value="Create Account"
              className={(canSubmit ? "enabled" : "disabled") + " interactive"}
              disabled={!canSubmit}
            />
          </div>
        </div>
      </form>
      <button
        type="submit"
        className="change-state-btn interactive"
        onClick={() => switchState("EMAIL")}
      >
        Sign in
      </button>
    </div>
  );
};

LoginForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  inputChange: PropTypes.func.isRequired,
  switchState: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired
};

export default LoginForm;

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Input from "./Input";
import { emailRgx, passwordRgx } from "../../utilities/validation";
import avatarToSvg from "../../utilities/avatarToSvg";
import Image from "../Common/Image";

const inputFields = {
  EMAIL: [
    {
      key: "email",
      validator: emailRgx
    }
  ],
  PASSWORD: [
    {
      key: "password",
      validator: passwordRgx
    }
  ]
};

const LoginForm = ({
  authFormView,
  values,
  inputChange,
  switchState,
  initiateLogin,
  tempUser,
  login,
  error,
  clearError
}) => {
  let currentInputFields = inputFields[authFormView];
  let inputNodes = currentInputFields.map(({ key }) => (
    <Input key={key} name={key} value={values[key]} onChange={inputChange} />
  ));

  let canSubmit = true;
  for (let { key, validator } of currentInputFields) {
    canSubmit &= validator.test(values[key] || "");
  }

  const isPassword = authFormView === "PASSWORD";

  function onSubmit(event) {
    event.preventDefault();
    if (isPassword) {
      login();
    } else {
      initiateLogin();
    }
  }

  return (
    <Fragment>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <div className="welcome-modal">
        <div className="auth-title">
          <h2 className="title">Sign in</h2>
          {(isPassword || tempUser.email) && (
            <Image
              className={`icon interactive ${!isPassword ? "flipped" : ""}`}
              onClick={() => switchState(isPassword ? "EMAIL" : "PASSWORD")}
              src="/images/left-arrow.svg"
              alt="Left arrow"
            />
          )}
        </div>
        {isPassword && (
          <div className="login-greeting">
            <Image
              className="avatar-tiny"
              src={avatarToSvg(tempUser.avatarUrl)}
              alt="Avatar"
            />
            <h3 className="subtitle">Hi {tempUser.email}</h3>
          </div>
        )}
        <div
          className={`auth-error ${error && "visible"}`}
          onClick={clearError}
        >
          {error || "Error"}
        </div>
        <form className="auth-form" onSubmit={onSubmit}>
          {inputNodes}
          <div className="wrapper">
            <div className="input-group">
              <input
                type="submit"
                value={isPassword ? "Sign in" : "Next"}
                className="interactive"
                disabled={!canSubmit}
              />
            </div>
          </div>
        </form>
        <button
          className={`change-state-btn interactive ${isPassword && "hidden"}`}
          onClick={() => switchState("CREATE")}
        >
          Sign up
        </button>
      </div>
    </Fragment>
  );
};

LoginForm.propTypes = {
  authFormView: PropTypes.string.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  inputChange: PropTypes.func.isRequired,
  switchState: PropTypes.func.isRequired,
  initiateLogin: PropTypes.func.isRequired,
  tempUser: PropTypes.object,
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired
};

export default LoginForm;

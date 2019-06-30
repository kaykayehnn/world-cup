import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/Auth/LoginForm";
import RegisterForm from "../../components/Auth/RegisterForm";
import {
  formChange,
  authFormStateChange,
  createAccount,
  initiateLogin,
  login,
  authErrorClear
} from "../../actions/";

// Auth form can be in 3 different states:
// 1. Create account - email, password, repeat
// 2. Email only
// 3. Password only - followed after valid submission in state 2.

const Redirecter = function({ user, ...props }) {
  if (user) {
    return <Redirect to="/" />;
  }

  let form =
    props.authFormView === "CREATE" ? (
      <RegisterForm {...props} />
    ) : (
      <LoginForm {...props} />
    );

  return <div className="grid">{form}</div>;
};

const mapStateToProps = state => ({
  authFormView: state.authFormView,
  values: state.form,
  tempUser: state.tempUser,
  error: state.error,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  inputChange: e => dispatch(formChange(e.target.id, e.target.value)),
  switchState: to => dispatch(authFormStateChange(to)),
  createAccount: () => dispatch(createAccount()),
  initiateLogin: () => dispatch(initiateLogin()),
  login: () => dispatch(login()),
  clearError: () => dispatch(authErrorClear())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redirecter);

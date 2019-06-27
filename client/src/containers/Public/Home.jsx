import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AuthForm from "./AuthForm";

const HomeRedirecter = props =>
  props.user ? <Redirect to="/dashboard" /> : <AuthForm {...props} />;

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(mapStateToProps)(HomeRedirecter);

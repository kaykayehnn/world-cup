import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.shouldRedirect = false;
  }

  componentDidCatch() {
    this.shouldRedirect = true;
    this.forceUpdate();
  }

  render() {
    if (this.shouldRedirect) {
      this.shouldRedirect = false;
      return <Redirect to="/" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

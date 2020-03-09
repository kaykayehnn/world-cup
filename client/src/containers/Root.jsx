import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";

import Navbar from "./Public/NavbarContainer";
import Router from "./Router";
import GithubCorner from "react-github-corner";

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="content">
      <div className="container">
        <GithubCorner href="https://github.com/kaykayehnn/russia-wc" />
        <Router>
          <Navbar />
        </Router>
      </div>
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

let rootExport = process.env === "production" ? Root : hot(module)(Root);
export default rootExport;

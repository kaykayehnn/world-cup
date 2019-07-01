import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthForm from "./Public/AuthForm";
import Dashboard from "./Public/Home";
import TeamDetails from "./Public/TeamContainer";
import MatchDetails from "./Public/MatchContainer";
import Profile from "./Private/Profile";
import Admin from "./Admin/";
import Logout from "./Private/Logout";

import Credits from "../components/Common/Credits";
import Forbidden from "../components/Common/Forbidden";

import ErrorBoundary from "../HOC/ErrorBoundary";
import PrivateRoute from "../HOC/PrivateRoute";
import AdminRoute from "../HOC/AdminRoute";

export default props => (
  <BrowserRouter basename={process.env.PUBLIC_PATH}>
    <ErrorBoundary>
      {props.children}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/team/:teamName" component={TeamDetails} />
        <Route exact path="/matches/:matchId" component={MatchDetails} />
        <Route exact path="/login" component={AuthForm} />

        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/logout" component={Logout} />

        <AdminRoute exact path="/admin" component={Admin} />

        <Route exact path="/forbidden" component={Forbidden} />
        <Route exact path="/credits" component={Credits} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </ErrorBoundary>
  </BrowserRouter>
);

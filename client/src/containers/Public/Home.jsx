import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import DashboardContainer from "./DashboardContainer";

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <DashboardContainer />
  </Fragment>
);

export default Home;

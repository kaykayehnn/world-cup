import React from "react";
import PropTypes from "prop-types";

import Team from "./Team";
import withLoading from "../../HOC/withLoading";

const Dashboard = ({ teams }) => (
  <div className="dashboard">
    {teams.map(t => (
      <Team key={t.name} name={t.name} stats={t.stats} />
    ))}
  </div>
);

Dashboard.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default withLoading(Dashboard);

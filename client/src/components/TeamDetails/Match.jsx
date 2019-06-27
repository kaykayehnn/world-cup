import React from "react";
import PropTypes from "prop-types";

import TeamCrest from "../Common/TeamCrest";

const Match = ({ data, ...props }) => (
  <div className="match interactive-sm" {...props}>
    <div className="flex">
      <div className="match-summary hide-sm">{data.homeTeam.name}</div>
      <TeamCrest name={data.homeTeam.name} />
    </div>
    {data.status !== "SCHEDULED" && (
      <div className="result">
        <div className="match-summary">
          {data.score.fullTime.homeTeam}:{data.score.fullTime.awayTeam}
        </div>
      </div>
    )}
    <div className="flex">
      <TeamCrest name={data.awayTeam.name} />
      <div className="match-summary hide-sm">{data.awayTeam.name}</div>
    </div>
  </div>
);

Match.propTypes = {
  data: PropTypes.object.isRequired
};

export default Match;

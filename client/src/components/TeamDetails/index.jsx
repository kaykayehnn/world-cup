import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Favourite from "./Favourite";
import Match from "./Match";
import TeamCrest from "../Common/TeamCrest";
import withLoading from "../../HOC/withLoading";

const TeamDetails = ({ team: { name, matches, stats }, history }) => {
  let matchNodes = matches.map(m => (
    <Match
      key={m.id}
      data={m}
      onClick={() => history.push(`/matches/${m.id}`)}
    />
  ));

  return (
    <Fragment>
      <div className="team-details">
        <div className="heading centered">{name}</div>
        <Favourite teamName={name} />
        <div className="wrapper">
          <TeamCrest name={name} />
        </div>
        <div className="team-stats">
          <div>
            <img className="stat-icon" src="/images/gold-medal.svg" />
            <div>{stats.wins}</div>
          </div>
          <div>
            <img className="stat-icon smaller" src="/images/close.svg" />
            <div>{stats.draws}</div>
          </div>
          <div>
            <img className="stat-icon" src="/images/silver-medal.svg" />
            <div>{stats.losses}</div>
          </div>
        </div>
      </div>
      <div className="matches">{matchNodes}</div>
    </Fragment>
  );
};

TeamDetails.propTypes = {
  team: PropTypes.shape({
    name: PropTypes.string,
    matches: PropTypes.array,
    stats: PropTypes.object
  }).isRequired
};

export default withLoading(TeamDetails);

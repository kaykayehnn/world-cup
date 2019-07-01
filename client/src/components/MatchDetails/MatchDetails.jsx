import React, { Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Helmet } from "react-helmet";

import TeamCrest from "../Common/TeamCrest";
import withLoading from "../../HOC/withLoading";

const MatchDetails = ({ matchDetails }) => {
  const { homeTeam, awayTeam, score, status, group, utcDate } = matchDetails;

  const scheduled = status === "SCHEDULED";
  const inPlay = status === "IN_PLAY";
  const draw = score.winner === "DRAW";
  const finished = score.fullTime.homeTeam != null;
  const extraTime = score.extraTime.homeTeam != null;
  const penalties = score.penalties.homeTeam != null;

  const finalResult =
    scheduled || inPlay ? null : draw ? (
      "Draw"
    ) : (
      <TeamCrest
        name={score.winner === "HOME_TEAM" ? homeTeam.name : awayTeam.name}
      />
    );

  return (
    <Fragment>
      <Helmet>
        <title>
          {homeTeam.name} vs {awayTeam.name}
        </title>
      </Helmet>
      <div className="match-details">
        <div className="match-title">
          <TeamCrest name={homeTeam.name} />
          <span className="team-name">{homeTeam.name}</span>
          {" vs "}
          <span className="team-name">{awayTeam.name}</span>
          <TeamCrest name={awayTeam.name} />
        </div>
        <div className="match-final-result">
          {finalResult}
          {!draw && !scheduled && (inPlay ? "In play" : " won")}
        </div>
        <div className="match-stats">
          <div>
            <div>Stage</div>
            <div>{group}</div>
          </div>
          <div>
            <div>Date</div>
            <div>{moment(utcDate).format("MMM Do")}</div>
          </div>
          <div>
            <div>Time</div>
            <div>{moment(utcDate).format("HH:mm")}</div>
          </div>
        </div>
        {finished && (
          <div className="match-stats">
            <div>
              <div>Half time</div>
              <div>
                {score.halfTime.homeTeam}:{score.halfTime.awayTeam}
              </div>
            </div>
            <div>
              <div>Full time</div>
              <div>
                {score.fullTime.homeTeam}:{score.fullTime.awayTeam}
              </div>
            </div>
            {extraTime && (
              <div>
                <div>Extra time</div>
                <div>
                  {score.fullTime.homeTeam + score.extraTime.homeTeam}:
                  {score.fullTime.awayTeam + score.extraTime.awayTeam}
                </div>
              </div>
            )}
            {penalties && (
              <div>
                <div>Penalties</div>
                <div>
                  {score.penalties.homeTeam}:{score.penalties.awayTeam}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

MatchDetails.propTypes = {
  matchDetails: PropTypes.object.isRequired
};

export default withLoading(MatchDetails);

import React from "react";
import PropTypes from "prop-types";

import Dashboard from "../../containers/Public/DashboardContainer";
import avatarToSvg from "../../utilities/avatarToSvg";

const Profile = ({ email, avatarUrl, favouriteTeams }) => (
  <div className="profile">
    <div className="heading">Hi {email}</div>
    <div className="flex">
      <img className="profile-img" src={avatarToSvg(avatarUrl)} />
    </div>
    <div className="heading">Your favourite teams</div>
    <Dashboard filter={favouriteTeams} />
  </div>
);

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  favouriteTeams: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Profile;

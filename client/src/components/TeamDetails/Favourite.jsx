import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleFavourite } from "../../actions/users";

const Favourite = ({ isLoggedIn, isFavourite, toggle }) =>
  isLoggedIn && (
    <img
      className="favourite"
      src={`/images/${isFavourite ? "star-full" : "star-outline"}.svg`}
      onClick={toggle}
    />
  );

Favourite.propTypes = {
  isFavourite: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const user = state.auth.user;
  const isFavourite =
    user && user.favouriteTeams.indexOf(ownProps.teamName) >= 0;
  return { isFavourite, isLoggedIn: !!user };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggle: () => dispatch(toggleFavourite(ownProps.teamName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourite);

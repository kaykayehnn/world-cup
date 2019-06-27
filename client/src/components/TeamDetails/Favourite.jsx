import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleFavourite } from "../../actions/users";

const Favourite = ({ isFavourite, toggle }) => (
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
  let isFavourite =
    state.auth.user.favouriteTeams.indexOf(ownProps.teamName) >= 0;
  return { isFavourite };
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

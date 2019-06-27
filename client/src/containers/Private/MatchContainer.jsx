import { connect } from "react-redux";

import MatchDetails from "../../components/MatchDetails/";
import { fetchMatchDetails } from "../../actions/football";

const mapStateToProps = state => ({
  matchDetails: state.football.matchDetails
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let matchId = ownProps.match.params.matchId;

  return {
    fetchData: () => dispatch(fetchMatchDetails(matchId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchDetails);

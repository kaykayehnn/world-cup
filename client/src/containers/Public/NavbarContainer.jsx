import { connect } from "react-redux";

import Navbar from "../../components/Common/Navbar";

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(Navbar);

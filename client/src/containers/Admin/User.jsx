import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { editUser, deleteUser } from "../../actions/users";
import { stringArrayValidator, avatarIxRgx } from "../../utilities/validation";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: JSON.stringify(props.roles),
      avatarIx: JSON.stringify(this.props.avatarIx),
      favouriteTeams: JSON.stringify(this.props.favouriteTeams)
    };

    this.handleChange = this.handleChange.bind(this);
    this.callEditUser = this.callEditUser.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  callEditUser() {
    const roles = JSON.parse(this.state.roles);
    const avatarIx = JSON.parse(this.state.avatarIx);
    const favouriteTeams = JSON.parse(this.state.favouriteTeams);

    this.props.editUser({ roles, favouriteTeams, avatarIx });
  }

  render() {
    const { _id, email, __v } = this.props;

    let validData;
    try {
      if (
        stringArrayValidator(JSON.parse(this.state.roles)) &&
        stringArrayValidator(JSON.parse(this.state.favouriteTeams)) &&
        avatarIxRgx.test(this.state.avatarIx)
      )
        validData = true;
    } catch (e) {}

    return (
      <tr>
        <td>{_id}</td>
        <td>{email}</td>
        <td>{__v}</td>
        <td>
          <input
            name="roles"
            value={this.state.roles}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            name="favouriteTeams"
            value={this.state.favouriteTeams}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            name="avatarIx"
            size={2}
            value={this.state.avatarIx}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <button disabled={!validData} onClick={this.callEditUser}>
            Edit
          </button>
          <button onClick={this.props.deleteUser}>Delete</button>
        </td>
      </tr>
    );
  }
}

User.propTypes = {
  _id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  favouriteTeams: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  avatarIx: PropTypes.number.isRequired,
  editUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editUser: data => dispatch(editUser(ownProps._id, data)),
    deleteUser: () => dispatch(deleteUser(ownProps._id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(User);

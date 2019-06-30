import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import avatarToSvg from "../../utilities/avatarToSvg";

const publicLinks = [
  { label: "Home", location: "/" },
  { label: "Sign in", location: "/login" },
  { label: "Credits", location: "/credits" }
];
const privateLinks = [
  { label: "Home", location: "/" },
  { label: "Credits", location: "/credits" },
  { label: "Log out", location: "/logout", className: "last" }
];

const adminLinks = [
  { label: "Dashboard", location: "/" },
  { label: "Admin", location: "/admin" },
  { label: "Credits", location: "/credits" },
  { label: "Log out", location: "/logout", className: "last" }
];

const linksArr = [publicLinks, privateLinks, adminLinks];

const Navbar = ({ user, history }) => {
  const isLoggedIn = !!user;
  const isAdmin = isLoggedIn && user.roles.indexOf("admin") >= 0;

  let linkIx = +isLoggedIn + +isAdmin;
  let links = linksArr[linkIx];

  return (
    <Fragment>
      <div className="delimiter" />
      <div className="navbar">
        <div className="flex flex-center title">
          <span className="heading">Russia</span>
          <img className="navbar-icon" src="/images/russia.svg" />
          <img className="navbar-icon no-hide" src="/images/world-cup.svg" />
          <span className="heading">2018</span>
          <img className="navbar-icon" src="/images/calendar.svg" />
        </div>
        <div className="menu flex">
          {links.map(link => (
            <NavLink
              key={link.label}
              className={`navbar-link ${link.className || ""}`}
              exact
              to={link.location}
            >
              {link.label}
            </NavLink>
          ))}
          {isLoggedIn && (
            <NavLink className="avatar" exact to="/profile">
              <img src={avatarToSvg(user.avatarUrl)} />
            </NavLink>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  user: PropTypes.object
};

export default Navbar;

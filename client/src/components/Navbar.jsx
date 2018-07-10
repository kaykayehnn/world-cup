import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const notLoggedInLinks = [
  { label: 'Home', location: '/' },
  { label: 'Credits', location: '/credits' }
]
const loggedInLinks = [
  ...notLoggedInLinks,
  { label: 'Profile', location: '/profile' }
]

const Navbar = ({ user }) => {
  let isLoggedIn = !!user
  let links = isLoggedIn ? loggedInLinks : notLoggedInLinks

  return (
    <Fragment>
      <div className='delimiter' />
      <div className='navbar'>
        <div className='flex flex-center title'>
          <span className='heading'>Russia</span>
          <img className='navbar-icon' src='/public/images/russia.svg' />
          <img className='navbar-icon no-hide' src='/public/images/world-cup.svg' />
          <span className='heading'>2018</span>
          <img className='navbar-icon' src='/public/images/calendar.svg' />
        </div>
        <div className='menu flex'>
          {links.map(link => (
            <NavLink key={link.label}
              className='navbar-link'
              exact
              to={link.location}>{link.label}
            </NavLink>)
          )}
          {isLoggedIn && <img src={`/public/images/animals/${user.avatarUrl}`} />}
        </div>
        {/* <div className="center-line"></div> */}
      </div>
    </Fragment>
  )
}

Navbar.propTypes = {
  user: PropTypes.object
}

export default Navbar

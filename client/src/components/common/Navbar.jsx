import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const publicLinks = [
  { label: 'Sign in', location: '/' },
  { label: 'Credits', location: '/credits' }
]
const privateLinks = [
  { label: 'Dashboard', location: '/dashboard' },
  publicLinks[1],
  { label: 'Log out', location: '/logout', className: 'last' }
]

const adminLinks = [
  privateLinks[0],
  { label: 'Admin', location: '/admin' },
  privateLinks[1],
  privateLinks[2]
]

const linksArr = [publicLinks, privateLinks, adminLinks]

const Navbar = ({ user, history }) => {
  const isLoggedIn = !!user
  console.log(isLoggedIn)
  const isAdmin = isLoggedIn && user.roles.indexOf('admin') >= 0

  let linkIx = +isLoggedIn + +isAdmin
  let links = linksArr[linkIx]

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
              className={`navbar-link ${link.className || ''}`}
              exact
              to={link.location}>{link.label}
            </NavLink>)
          )}
          {isLoggedIn &&
            <NavLink className='avatar' exact to='/profile'>
              <img
                src={`/public/images/animals/${user.avatarUrl}`} />
            </NavLink>}
        </div>
      </div>
    </Fragment>
  )
}

Navbar.propTypes = {
  user: PropTypes.object
}

export default Navbar

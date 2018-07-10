import React from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { formChange, authFormStateChange, createAccount, initiateLogin, login } from '../actions/'

// Auth form can be in 3 different states:
// 1. Create account - email, password, repeat
// 2. Email only
// 3. Password only - followed after valid submission in state 2.

const Redirecter = function (props) {
  if (props.authFormView === 'CREATE') return <RegisterForm {...props} />
  return <LoginForm {...props} />
}

const mapStateToProps = state => ({
  authFormView: state.authFormView,
  values: state.form,
  tempUser: state.tempUser
})

const mapDispatchToProps = dispatch => ({
  inputChange: (e) => dispatch(formChange(e.target.id, e.target.value)),
  switchState: (to) => dispatch(authFormStateChange(to)),
  createAccount: () => dispatch(createAccount()),
  initiateLogin: () => dispatch(initiateLogin()),
  login: () => dispatch(login())
})

export default connect(mapStateToProps, mapDispatchToProps)(Redirecter)

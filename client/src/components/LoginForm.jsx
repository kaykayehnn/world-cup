import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import { emailRgx, passwordRgx } from '../utilities/validation'
import preventDefaultAndCall from '../utilities/preventDefault'

const inputFields = {
  EMAIL: [
    {
      key: 'email',
      validator: emailRgx
    }
  ],
  PASSWORD: [
    {
      key: 'password',
      validator: passwordRgx
    }
  ]
}

const LoginForm = ({ authFormView, values, inputChange, switchState, initiateLogin, tempUser, login }) => {
  let currentInputFields = inputFields[authFormView]
  let inputNodes = currentInputFields.map(({ key }) => <Input key={key} name={key}
    value={values[key]}
    onChange={inputChange} />)

  let canSubmit = true
  for (let { key, validator } of currentInputFields) {
    canSubmit &= validator.test(values[key] || '')
  }

  const isPassword = authFormView === 'PASSWORD'
  const passwordOnlyLazy = () => (
    <div className='login-greeting'>
      <img className='avatar-tiny' src={`/public/images/animals/${tempUser.avatarUrl}`} alt='Avatar' />
      <h3 className='subtitle'>Hi {tempUser.email}</h3>
    </div>
  )

  const submitCallback = isPassword ? login : initiateLogin

  return (
    <div className='welcome-modal'>
      <h2 className='auth-title'>Sign in</h2>
      {isPassword && passwordOnlyLazy()}
      <form className='auth-form' onSubmit={preventDefaultAndCall(submitCallback)}>
        {inputNodes}
        <div className='wrapper'>
          <div className='input-group'>
            <input type='submit'
              value={isPassword ? 'Sign in' : 'Next'}
              className={(canSubmit ? 'enabled' : 'disabled') + ' interactive'}
              disabled={!canSubmit} />
          </div>
        </div>
      </form>
      <button className='change-state-btn interactive submit' onClick={() => switchState('CREATE')}>Sign up</button>
    </div>
  )
}

LoginForm.propTypes = {
  authFormView: PropTypes.string.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  inputChange: PropTypes.func.isRequired,
  switchState: PropTypes.func.isRequired,
  initiateLogin: PropTypes.func.isRequired,
  tempUser: PropTypes.object,
  login: PropTypes.func.isRequired
}

export default LoginForm

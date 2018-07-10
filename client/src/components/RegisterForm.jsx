import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import { emailRgx, passwordRgx } from '../utilities/validation'
import preventDefaultAndCall from '../utilities/preventDefault'

const inputFields = [
  {
    key: 'email',
    validator: emailRgx
  },
  {
    key: 'password',
    validator: passwordRgx
  },
  {
    key: 'repeatPassword',
    validator: passwordRgx
  }
]

const LoginForm = ({ values, inputChange, switchState, createAccount }) => {
  let inputNodes = inputFields.map(({ key }) => <Input key={key} name={key}
    value={values[key]}
    onChange={inputChange} />)

  let canSubmit = true
  for (let { key, validator } of inputFields) {
    canSubmit &= validator.test(values[key] || '')
  }

  return (
    <div className='welcome-modal'>
      <h2 className='auth-title'>Sign up</h2>
      <form className='auth-form' onSubmit={preventDefaultAndCall(createAccount)}>
        {inputNodes}
        <div className='wrapper'>
          <div className='input-group submit'>
            <input type='submit'
              value='Create Account'
              className={(canSubmit ? 'enabled' : 'disabled') + ' interactive'}
              disabled={!canSubmit} />
          </div>
        </div>
      </form>
      <button className='change-state-btn interactive' onClick={() => switchState('EMAIL')}>Sign in</button>
    </div>
  )
}

LoginForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  inputChange: PropTypes.func.isRequired,
  switchState: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired
}

export default LoginForm

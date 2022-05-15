import React, { useState } from 'react'
import './signIn.css'
import { Email, Lock, Person } from '@material-ui/icons'

const SignIn = () => {
  const [person, setPerson] = useState({ email: '', password: '' })
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.email && person.password) {
      const newPerson = { ...people, id: new Date().getTime().toString() }
      setPeople([...people, newPerson])
      setPerson({ email: '', password: '' })
    }
  }

  return (
    <>
      <form className='signIn_form'>
        <Person className='top-icon' />
        <h1>Sign In</h1>
        <div className='col-10 email-label'>
          <label forHtml='email'>Email</label>
        </div>
        <div className='col-10 email_icon'>
          <Email className='email-icon' />
          <input
            type='email'
            id='email'
            name='email'
            className='form-control form_input'
            value={person.email}
            onChange={handleChange}
            placeholder='Enter Email'
            autoComplete='off'
          />
        </div>
        <div className='col-10 email-label'>
          <label forHtml='password'>Password</label>
        </div>
        <div className='col-10 lock_icon'>
          <Lock className='lock-icon' />
          <input
            type='password'
            id='password'
            name='password'
            className='form-control form_input'
            value={person.password}
            onChange={handleChange}
            placeholder='Enter Password'
          />
        </div>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </>
  )
}

export default SignIn

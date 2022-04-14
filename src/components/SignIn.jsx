import React, { useState } from 'react'
import './signIn.css'

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
        <h1>Sign In</h1>
        <div class='col-10'>
          <label forHtml='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            className='form-control form-input'
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div class='col-10'>
          <label forHtml='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            className='form-control form-input'
            value={person.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default SignIn

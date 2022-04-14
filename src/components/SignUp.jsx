import React, { useState } from 'react'
import './signUp.css'

const SignUp = () => {
  const [person, setPerson] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(
    //   'firstName',
    //   'middleName',
    //   'lastName',
    //   'phoneNo',
    //   'email',
    //   'password',
    //   'confirmPassword'
    // )
    if (
      person.firstName &&
      person.middleName &&
      person.lastName &&
      person.phoneNo &&
      person.email &&
      person.password &&
      person.confirmPassword
    ) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newPerson])
      setPerson({
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNo: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    }
  }

  return (
    <>
      <form className='signUp_form'>
        <h1>Sign Up</h1>
        <div className='col-10'>
          <label forHtml='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            className='form-control form-input'
            value={personalbar.firstName}
            onChange={handleChange}
          />
        </div>
        <div class='col-10'>
          <label forHtml='middleName'>Middle Name</label>
          <input
            type='text'
            id='middleName'
            name='middleName'
            className='form-control form-input'
            value={personalbar.middleName}
            onChange={handleChange}
          />
        </div>
        <div class='col-10'>
          <label forHtml='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            className='form-control form-input'
            value={person.lastName}
            onChange={handleChange}
          />
        </div>
        <div class='col-10'>
          <label forHtml='phoneNo'>Phone No</label>
          <input
            type='number'
            id='phoneNo'
            name='phoneNo'
            className='form-control form-input'
            value={person.phoneNo}
            onChange={handleChange}
          />
        </div>
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
        <div class='col-10'>
          <label forHtml='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            className='form-control form-input'
            value={person.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default SignUp

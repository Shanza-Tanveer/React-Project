import React, { useState } from 'react'
import './signUp.css'
import { Email, Lock, Phone, Person } from '@material-ui/icons'

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
        <Person className='top-icons' />
        <h1>Sign Up</h1>
        <div className='col-10 label-height'>
          <label forHtml='firstName'>First Name</label>
        </div>
        <div className='col-10 person_icon'>
          <Person className='person-icon' />
          <input
            type='text'
            id='firstName'
            name='firstName'
            className='form-control form-input'
            value={personalbar.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='col-10 label-height'>
          <label forHtml='middleName'>Middle Name</label>
        </div>
        <div class='col-10 person_icon'>
          <Person className='person-icon' />
          <input
            type='text'
            id='middleName'
            name='middleName'
            className='form-control form-input'
            value={personalbar.middleName}
            onChange={handleChange}
          />
        </div>
        <div className='col-10 label-height'>
          <label forHtml='lastName'>Last Name</label>
        </div>
        <div class='col-10 person_icon'>
          <Person className='person-icon' />
          <input
            type='text'
            id='lastName'
            name='lastName'
            className='form-control form-input'
            value={person.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='col-10 label-height'>
          <label forHtml='phoneNo'>Phone No</label>
        </div>
        <div class='col-10 phone_icon'>
          <Phone className='phone-icon' />
          <input
            type='number'
            id='phoneNo'
            name='phoneNo'
            className='form-control form-input'
            value={person.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className='col-10 label-height'>
          <label forHtml='email'>Email</label>
        </div>
        <div class='col-10 email_icons'>
          <Email className='email-icons' />
          <input
            type='email'
            id='email'
            name='email'
            className='form-control form-input'
            value={person.email}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div className='col-10 label-height'>
          <label forHtml='password'>Password</label>
        </div>
        <div class='col-10 lock_icons'>
          <Lock className='lock-icons' />
          <input
            type='password'
            id='password'
            name='password'
            className='form-control form-input'
            value={person.password}
            onChange={handleChange}
          />
        </div>
        <div className='col-10 label-height'>
          <label forHtml='confirmPassword'>Confirm Password</label>
        </div>
        <div className='col-10 lock_icons'>
          <Lock className='lock-icons' />
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

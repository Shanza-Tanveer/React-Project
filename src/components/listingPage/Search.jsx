import React from 'react'
import './search.css'

const Search = () => {
  return (
    <>
      <form className='search_form'>
        <h1>Search</h1>
        <div className='col-10'>
          <label for='destination name'>Destination/property name:</label>
          <input
            type='text'
            id='destinatin name'
            name='destination name'
            className='form-control search-form-input'
            value=''
            placeholder=''
          />
        </div>
        <div className='col-10'>
          <label for='check-in date'>Check-in Date:</label>
          <select className='form-select' aria-label='Default select example'>
            <option selected=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </div>
        <div className='col-10'>
          <label for='check-in date'>Check-in Date:</label>
          <select className='form-select' aria-label='Default select example'>
            <option selected=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </div>
        <div className='col-10'>
          <label for='check-in date'>Stays:</label>
          <select className='form-select' aria-label='Default select example'>
            <option selected=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />
          <label className='form-check-label form-label' for='flexCheckDefault'>
            I'm traveling for work
          </label>
        </div>
        <button>Search</button>
      </form>
    </>
  )
}

export default Search

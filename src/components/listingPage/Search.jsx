import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './search.css'

const Search = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  return (
    <>
      {/* <form className='search_form'>
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
          <label for='check-in date'>Check-out Date:</label>
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
      </form> */}
      <form className='datepicker_form'>
        <div>
          <h1>Search</h1>
          <label for='destination name'>Destination/property name:</label>
          <input
            type='text'
            id='destinatin name'
            name='destination name'
            className='date_input'
            value=''
            placeholder=''
          />
        </div>
        <div>
          <label For='check-in date'>Check-in Date</label>
          <DatePicker
            placeholderText='Check-in Date'
            dateFormat='MMMM d, yyyy'
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setStartDate(date)}
            className='datepicker_input'
          />
        </div>
        <div>
          <label For='check-in date'>Check-in Date</label>
          <DatePicker
            placeholderText='Check-out Date'
            dateFormat='MMMM d, yyyy'
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={(date) => setEndDate(date)}
            className='datepicker_input'
          />
        </div>
        <div>
          <label for='stays'>Stays:</label>
          <input
            type='text'
            id='destinatin name'
            name='destination name'
            className='date_input'
            value=''
            placeholder=''
          />
        </div>
        <div className='form-check travel-form'>
          <input
            className='form-check-input check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />
          <label
            className='form-check-label travel-label'
            for='flexCheckDefault'
          >
            I'm traveling for work
          </label>
        </div>
        <button className='button'>Search</button>
      </form>
    </>
  )
}

export default Search

import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './search.css'
import { Search, Person } from '@material-ui/icons'

const SearchFilter = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  return (
    <>
      <form className='datepicker_form'>
        <h1>Search</h1>
        <div>
          <label for='destination name'>Destination/property name:</label>
        </div>
        <div className='search_icon'>
          <Search className='search-icon' />
          <input
            type='search'
            id='destinatin name'
            name='destination name'
            className='date_input'
            value=''
            placeholder=''
          />
        </div>
        <div>
          <label For='check-in date'>Check-in Date</label>
        </div>
        <div className='calender_icon'>
          {/* <CalendarToday className='calender-icon' /> */}
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
          <label For='check-in date'>Check-out Date</label>
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
          <label for='stays'>1-night stay</label>
        </div>
        <div className='stay_icon'>
          <Person className='stay-icon' />
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

export default SearchFilter

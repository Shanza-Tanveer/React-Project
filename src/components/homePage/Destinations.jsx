import React from 'react'
import { NavLink } from 'react-router-dom'
import './destinations.css'

const Destinations = ({ img, title, range }) => {
  return (
    <>
      <div className='destination'>
        <div>
          <NavLink to=''>
            <img src={img} alt='' className='col-2' />
          </NavLink>
        </div>
        <div className='destination_heading'>
          <NavLink to=''>
            <h1>{title}</h1>
            <p>{range}</p>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Destinations

import React from 'react'
import { NavLink } from 'react-router-dom'
import './property.css'

const Property = ({ img, title, range }) => {
  return (
    <>
      <div className='property'>
        <div>
          <NavLink to=''>
            <img src={img} alt='' className='col-2 img' />
          </NavLink>
        </div>
        <div className='property_heading'>
          <NavLink to=''>
            <h1>{title}</h1>
            <p>{range}</p>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Property

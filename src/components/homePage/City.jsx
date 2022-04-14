import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './cities.css'

const City = ({ img, title, description }) => {
  return (
    <>
      <div className='cities'>
        <div>
          <NavLink to=''>
            <img src={img} alt='' />
          </NavLink>
        </div>
        <div className='cities_heading'>
          <NavLink to=''>
            <h1>{title}</h1>
            <p>{description}</p>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default City

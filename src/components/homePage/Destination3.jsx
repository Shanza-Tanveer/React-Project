import React from 'react'
import { NavLink } from 'react-router-dom'
import './destination3.css'

const Destination3 = ({ img, title, range }) => {
  return (
    <>
      <div className='destination3'>
        <div>
          <NavLink to=''>
            <img src={img} alt='' className='' />
          </NavLink>
        </div>
        <div className='destination3_heading'>
          <NavLink to=''>
            <h1>{title}</h1>
            <p>{range}</p>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Destination3

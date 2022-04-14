import React from 'react'
import { Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './homes.css'

const Homes = ({ img, appartmentName, city, price }) => {
  return (
    <>
      <div className='homes'>
        <div>
          <NavLink to=''>
            <img src={img} alt='' />
          </NavLink>
        </div>
        <div className='homes_heading'>
          <NavLink to=''>
            <div>
              <h1>{appartmentName}</h1>
              <p>{city}</p>
              <h3>{price}</h3>
            </div>
            <div className='reviews'>
              <h6>
                <Badge bg='secondary' className='badge'>
                  9.1
                </Badge>
                Wonderful
              </h6>
              <p>295 reviews</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Homes

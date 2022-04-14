import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='regions'>
        <div className='places'>
          <ul>
            <li>
              <NavLink to=''>Countries</NavLink>
            </li>
            <li>
              <NavLink to=''>Regions</NavLink>
            </li>
            <li>
              <NavLink to=''>Cities</NavLink>
            </li>
            <li>
              <NavLink to=''>Districts</NavLink>
            </li>
            <li>
              <NavLink to=''>Airports</NavLink>
            </li>
            <li>
              <NavLink to=''>Hotels</NavLink>
            </li>
            <li>
              <NavLink to=''>Places of interest</NavLink>
            </li>
          </ul>
        </div>
        <div className='houses'>
          <ul>
            <li>
              <NavLink to=''>Homes</NavLink>
            </li>
            <li>
              <NavLink to=''> Apartments</NavLink>
            </li>
            <li>
              <NavLink to=''>Resorts</NavLink>
            </li>
            <li>
              <NavLink to=''>Villas</NavLink>
            </li>
            <li>
              <NavLink to=''>Hostels</NavLink>
            </li>
            <li>
              <NavLink to=''>Guest</NavLink>
            </li>
            <li>
              <NavLink to=''>Houses</NavLink>
            </li>
          </ul>
        </div>
        <div className='travel'>
          <ul>
            <li>
              <NavLink to=''>Unique places to stay</NavLink>
            </li>
            <li>
              <NavLink to=''>All destinations</NavLink>
            </li>
            <li>
              <NavLink to=''>Discover</NavLink>
            </li>
            <li>
              <NavLink to=''>Reviews Unpacked: Travel articles</NavLink>
            </li>
            <li>
              <NavLink to=''>Travel communities</NavLink>
            </li>
            <li>
              <NavLink to=''> Seasonal and holiday deals</NavLink>
            </li>
          </ul>
        </div>
        <div className='flight'>
          <ul>
            <li>
              <NavLink to=''>Car rental</NavLink>
            </li>
            <li>
              <NavLink to=''>Flight finder</NavLink>
            </li>
            <li>
              <NavLink to=''>Restaurant reservations</NavLink>
            </li>
            <li>
              <NavLink to=''>Booking.com for Travel Agent</NavLink>
            </li>
          </ul>
        </div>
        <div className='terms'>
          <ul>
            <li>
              <NavLink to=''>Coronavirus (COVID-19) FAQs</NavLink>
            </li>
            <li>
              <NavLink to=''>About Booking.com</NavLink>
            </li>
            <li>
              <NavLink to=''>Customer Service Help</NavLink>
            </li>
            <li>
              <NavLink to=''>Partner help</NavLink>
            </li>
            <li>
              <NavLink to=''>Careers</NavLink>
            </li>
            <li>
              <NavLink to=''> Sustainability</NavLink>
            </li>
            <li>
              <NavLink to=''>Press center</NavLink>
            </li>
            <li>
              <NavLink to=''>Safety Resource Center</NavLink>
            </li>
            <li>
              <NavLink to=''> Investor relations</NavLink>
            </li>
            <li>
              <NavLink to=''>Terms & conditions</NavLink>
            </li>
            <li>
              <NavLink to=''>Partner dispute</NavLink>
            </li>
            <li>
              <NavLink to=''>How We Work</NavLink>
            </li>
            <li>
              <NavLink to=''>Privacy & cookie statement</NavLink>
            </li>
            <li>
              <NavLink to=''> Corporate contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer

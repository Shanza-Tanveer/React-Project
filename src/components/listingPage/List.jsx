import React from 'react'
import { NavLink } from 'react-router-dom'
import './listing.css'

const List = () => {
  return (
    <>
      {/* <div>
        <div>
          <a href=''>
            <img src={hotelImg} alt='' />
          </a>
        </div>
        <div>
          <a href=''>
            <h1>{hotelName}</h1>
          </a>
          <a href=''>
            <address>{address}</address>
          </a>
          <p>{property}</p>
          <button>Gateway Deal</button>
          <p>{roomName}</p>
          <p>{roomType}</p>
          <p>{facilities}</p>
          <p>{cancellation}</p>
          <p>{cancellationTime}</p>
          <p>{leftRooms}</p>
          <p>{roomPrice}</p>
          <p>{taxes}</p>
          <button>See Availability</button>
        </div>
      </div> */}
      <div className='filterlist'>
        <div className='filter_h1'>
          <h1>Filter by:</h1>
        </div>
        <div className='filter_items'>
          <div>
            <h1>Your Previous Filters</h1>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='villas'
                  name='villas'
                  value='villas'
                />
                <label for='villas'>Villas</label>
              </NavLink>
            </div>
            <div className='para'>
              <NavLink to=''>
                <p>5</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='homestays'
                  name='homestays'
                  value='homestays'
                />
                <label for='homestays'>Homestays</label>
              </NavLink>
            </div>
            <div className='para-2'>
              <NavLink to=''>
                <p>8</p>
              </NavLink>
            </div>
          </div>
          <div className='previous_filter'>
            <div className='input-1'>
              <NavLink to=''>
                <input
                  type='checkbox'
                  id='bed and brakfast'
                  name='bed and breakfast'
                  value='bed and breakfast'
                />
                <label for='homestays'>Bed and Breakfasts</label>
              </NavLink>
            </div>
            <div className='para-3'>
              <NavLink to=''>
                <p>4</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default List

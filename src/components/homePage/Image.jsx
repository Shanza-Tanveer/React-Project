import React from 'react'
import './BgImage.css'

const Image = ({ img, title, desc }) => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row m-5'>
          <img src={img} alt='' className='col-lg-12' />
        </div>
        <div className='text_block'>
          <h1>{desc}</h1>
          <h2>{title}</h2>
        </div>
        <div className='container checkin'>
          <div className='row list'>
            <div className='col-sm'>
              <input
                type='text'
                name='destination'
                placeholder='Where are you going?'
                className='input'
              />
            </div>
            <div className='col-sm'>
              <button className='btn_check'>Check-in - Check-out</button>
            </div>
            <div className='col-sm'>
              <button className='btn_room'>
                0 adults · 0 children · 0 room
              </button>
            </div>
            <div className='col-sm'>
              <button className='btn_search'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Image

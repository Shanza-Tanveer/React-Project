import React from 'react'
import IslamabadData from './IslamabadData'
import IslamabadList from './IslamabadList'
import './listing.css'

const IslamabadListing = () => {
  return (
    <>
      <div className='list_heading'>
        <h1>Islamabad: 48 properties found</h1>
      </div>
      {IslamabadData.map((islamabadData) => {
        return (
          <IslamabadList
            key={islamabadData.id}
            {...islamabadData}
          ></IslamabadList>
        )
      })}
    </>
  )
}

export default IslamabadListing

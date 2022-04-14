import React from 'react'
import Travelers from './Travelers'
import TravelersData from './TravelersData'
import './travelers.css'

const TravelersList = () => {
  return (
    <>
      <h1 className='travelers_h1'>Connect with other travelers</h1>
      <div className='travelerslist'>
        {TravelersData.map((travelersData) => {
          return (
            <Travelers key={travelersData.id} {...travelersData}></Travelers>
          )
        })}
      </div>
    </>
  )
}

export default TravelersList

import React from 'react'
import Destinations from './Destinations'
import DestinationData from './DestinationsData'
import './destinations.css'

const DestinationLists = () => {
  return (
    <>
      <h1 className='destination_h1'>Explore Pakistan</h1>
      <p className='destination_p2'>
        These popular destinations have a lot to offer
      </p>
      <div className='destinationlist'>
        {DestinationData.map((destinationData) => {
          return (
            <Destinations
              key={destinationData.id}
              {...destinationData}
            ></Destinations>
          )
        })}
      </div>
    </>
  )
}

export default DestinationLists

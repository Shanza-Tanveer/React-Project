import React from 'react'
import Destination2 from './Destination2'
import Destination2Data from './Destination2Data'

const DestinationList2 = () => {
  return (
    <>
      <div className='destinationlist2'>
        {Destination2Data.map((destination2Data) => {
          return (
            <Destination2
              key={destination2Data.id}
              {...destination2Data}
            ></Destination2>
          )
        })}
      </div>
    </>
  )
}

export default DestinationList2

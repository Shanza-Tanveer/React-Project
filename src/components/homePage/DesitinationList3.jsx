import React from 'react'
import Destination3 from './Destination3'
import Destination3Data from './Destination3Data'
import './destination3.css'

const DesitinationList3 = () => {
  return (
    <>
      <div className='destinationlist3'>
        {Destination3Data.map((destination3Data) => {
          return (
            <Destination3
              key={destination3Data.id}
              {...destination3Data}
            ></Destination3>
          )
        })}
      </div>
    </>
  )
}

export default DesitinationList3

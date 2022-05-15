import React from 'react'
// import Destinations from './Destinations'
// import DestinationData from './DestinationsData'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './destinations.css'

const DestinationLists = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/d3bb8c76-eb41-480c-a331-adf14fabf34a').then(
      (result) => {
        result.json().then((resp) => {
          setData(resp)
          console.log(resp)
        })
      }
    )
  }, [setData])

  console.warn(data)

  return (
    <>
      <h1 className='destination_h1'>Explore Pakistan</h1>
      <p className='destination_p2'>
        These popular destinations have a lot to offer
      </p>
      <div className='destinationlist'>
        {/* {DestinationData.map((destinationData) => {
          return (
            <Destinations
              key={destinationData.id}
              {...destinationData}
            ></Destinations>
          )
        })} */}

        {data.map((curElem) => {
          return (
            <div className='destination'>
              <div>
                <NavLink to=''>
                  <img src={curElem.image} alt='' className='col-2' />
                </NavLink>
              </div>
              <div className='destination_heading'>
                <NavLink to=''>
                  <h1>{curElem.title}</h1>
                  <p>{curElem.range}</p>
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DestinationLists

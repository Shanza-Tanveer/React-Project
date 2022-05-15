import React from 'react'
// import Destination2 from './Destination2'
// import Destination2Data from './Destination2Data'
import { NavLink } from 'react-router-dom'
import './destination2.css'
import { useEffect, useState } from 'react'

const DestinationList2 = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/4c97fd53-54ac-4e53-8224-062b584f1aa6').then(
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
      <div className='destinationlist2'>
        {/* {Destination2Data.map((destination2Data) => {
          return (
            <Destination2
              key={destination2Data.id}
              {...destination2Data}
            ></Destination2>
          )
        })} */}

        {data.map((curElem) => {
          return (
            <div className='destination2'>
              <div>
                <NavLink to=''>
                  <img src={curElem.image} alt='' className='col-12' />
                </NavLink>
              </div>
              <div className='destination2_heading'>
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

export default DestinationList2

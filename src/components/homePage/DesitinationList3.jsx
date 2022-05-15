import React from 'react'
// import Destination3 from './Destination3'
// import Destination3Data from './Destination3Data'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './destination3.css'

const DesitinationList3 = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/847967ce-1b0a-4b84-b5a6-8a68a2c5858d').then(
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
      <div className='destinationlist3'>
        {/* {Destination3Data.map((destination3Data) => {
          return (
            <Destination3
              key={destination3Data.id}
              {...destination3Data}
            ></Destination3>
          )
        })} */}

        {data.map((curElem) => {
          return (
            <div className='destination3'>
              <div>
                <NavLink to=''>
                  <img src={curElem.image} alt='' className='' />
                </NavLink>
              </div>
              <div className='destination3_heading'>
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

export default DesitinationList3

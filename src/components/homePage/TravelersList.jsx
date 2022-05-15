import React from 'react'
// import Travelers from './Travelers'
// import TravelersData from './TravelersData'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './travelers.css'

const TravelersList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/ed9adb33-a2d4-4b74-b207-38e4dead6d8d').then(
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
      <h1 className='travelers_h1'>Connect with other travelers</h1>
      <div className='travelerslist'>
        {/* {TravelersData.map((travelersData) => {
          return (
            <Travelers key={travelersData.id} {...travelersData}></Travelers>
          )
        })} */}

        {data.map((curElem) => {
          return (
            <div className='travelers'>
              <div>
                <NavLink to=''>
                  <img src={curElem.image} alt='' />
                </NavLink>
              </div>
              <div className='travelers_heading'>
                <NavLink to=''>
                  <h1>{curElem.countryName}</h1>
                  <p>{curElem.community}</p>
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

export default TravelersList

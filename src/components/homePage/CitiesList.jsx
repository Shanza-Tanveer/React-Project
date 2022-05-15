import React from 'react'
// import CitiesData from './CitiesData'
// import City from './City'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './cities.css'

const CitiesList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/4349462c-2a15-477f-b8a6-1d8cd718c4ff').then(
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
      <h1 className='city_h1'>Get inspiration for your next trip</h1>
      <div className='citieslist'>
        {/* {CitiesData.map((citiesData) => {
          return <City key={citiesData.id} {...citiesData}></City>
        })} */}

        {data.map((curElem) => {
          return (
            <div className='cities'>
              <div>
                <NavLink to=''>
                  <img src={curElem.image} alt='' />
                </NavLink>
              </div>
              <div className='cities_heading'>
                <NavLink to=''>
                  <h1>{curElem.title}</h1>
                  <p>{curElem.description}</p>
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CitiesList

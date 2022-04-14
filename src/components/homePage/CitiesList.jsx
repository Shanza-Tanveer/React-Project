import React from 'react'
import CitiesData from './CitiesData'
import City from './City'
import './cities.css'

const CitiesList = () => {
  return (
    <>
      <h1 className='city_h1'>Get inspiration for your next trip</h1>
      <div className='citieslist'>
        {CitiesData.map((citiesData) => {
          return <City key={citiesData.id} {...citiesData}></City>
        })}
      </div>
    </>
  )
}

export default CitiesList

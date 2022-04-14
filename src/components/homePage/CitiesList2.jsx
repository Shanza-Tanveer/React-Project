import React from 'react'
import Cities2Data from './Cities2Data'
import City2 from './City2'
import './cities2.css'

const CitiesList2 = () => {
  return (
    <>
      <div className='citieslist2'>
        {Cities2Data.map((cities2Data) => {
          return <City2 key={cities2Data.id} {...cities2Data}></City2>
        })}
      </div>
    </>
  )
}

export default CitiesList2

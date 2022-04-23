import React from 'react'
import LahoreData from './LahoreData'
import LahoreList from './LahoreList'
import './listing.css'

const LahoreListing = () => {
  return (
    <>
      <div className='list_heading'>
        <h1>Lahore: 48 properties found</h1>
      </div>
      {LahoreData.map((lahoreData) => {
        return <LahoreList key={lahoreData.id} {...lahoreData}></LahoreList>
      })}
    </>
  )
}

export default LahoreListing

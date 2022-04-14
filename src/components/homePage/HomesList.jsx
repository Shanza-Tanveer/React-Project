import React from 'react'
import Homes from './Homes'
import HomesData from './HomesData'
import './homes.css'

const HomesList = () => {
  return (
    <>
      <h1 className='homes_h1'>Homes guests love</h1>
      <div className='homeslist'>
        {HomesData.map((homesData) => {
          return <Homes key={homesData.id} {...homesData}></Homes>
        })}
      </div>
    </>
  )
}

export default HomesList

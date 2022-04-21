import React from 'react'
import RoomsData from './RoomsData'
import RoomsList from './RoomsList'

const RoomListing = () => {
  return (
    <>
      <div className='list_heading'>
        <h1>Islamabad: 48 properties found</h1>
      </div>
      {RoomsData.map((roomsData) => {
        return <RoomsList key={roomsData.id} {...roomsData}></RoomsList>
      })}
    </>
  )
}

export default RoomListing

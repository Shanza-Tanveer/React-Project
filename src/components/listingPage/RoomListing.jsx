import React from 'react'
import RoomsData from './RoomsData'
import RoomsList from './RoomsList'

const RoomListing = () => {
  return (
    <>
      {RoomsData.map((roomsData) => {
        return <RoomsList key={roomsData.id} {...roomsData}></RoomsList>
      })}
    </>
  )
}

export default RoomListing

import React from 'react'
import List from './List'
import ListsData from './ListsData'

const Listing = () => {
  return (
    <>
      {ListsData.map((lists) => {
        return <List key={lists} {...lists}></List>
      })}
    </>
  )
}

export default Listing

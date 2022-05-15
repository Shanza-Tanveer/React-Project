import React from 'react'
import IslamabadListing from './IslamabadListing'
import LahoreListing from './LahoreListing'
import SearchFilter from './SearchFilter'
import SideFilter from './SideFilter'

const Property = () => {
  return (
    <>
      <IslamabadListing />
      {/* <LahoreListing /> */}
      <SearchFilter />
      <SideFilter />
    </>
  )
}

export default Property

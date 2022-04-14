import React from 'react'
import BackgroundImage from './BackgroundImage'
import CitiesList from './CitiesList'
import CitiesList2 from './CitiesList2'
import DesitinationList3 from './DesitinationList3'
import DestinationList2 from './DestinationList2'
import DestinationLists from './DestinationLists'
import HomesList from './HomesList'
import PropertyLists from './PropertyLists'
import TravelersList from './TravelersList'

const Home = () => {
  return (
    <>
      <BackgroundImage />
      <PropertyLists />
      <DestinationLists />
      <DestinationList2 />
      <DesitinationList3 />
      <CitiesList />
      <CitiesList2 />
      <HomesList />
      <TravelersList />
    </>
  )
}

export default Home

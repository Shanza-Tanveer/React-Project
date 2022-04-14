import React from 'react'
import Property from './Property'
import PropertyData from './PropertyData'
import './property.css'

const PropertyLists = () => {
  return (
    <>
      <h1 className='property_h1'>Browse by property type</h1>
      <div className='propertylist'>
        {PropertyData.map((propertyData) => {
          return <Property key={propertyData.id} {...propertyData}></Property>
        })}
      </div>
    </>
  )
}

export default PropertyLists

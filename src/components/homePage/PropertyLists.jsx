import React from 'react'
// import Property from './Property'
// import PropertyData from './PropertyData'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './property.css'

const PropertyLists = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/5fd29815-4c51-4699-b7aa-978827918d68').then(
      (result) => {
        result.json().then((resp) => {
          setData(resp)
          console.log(resp)
        })
      }
    )
  }, [setData])

  console.warn(data)

  return (
    <>
      <h1 className='property_h1'>Browse by property type</h1>
      <div className='propertylist'>
        {/* {PropertyData.map((propertyData) => {
          return <Property key={propertyData.id} {...propertyData}></Property>
        })} */}

        {data.map((curElem) => {
          return (
            <div className='property'>
              <div>
                <NavLink to=''>
                  <img src={curElem.image} alt='' className='col-2 img' />
                </NavLink>
              </div>
              <div className='property_heading'>
                <NavLink to=''>
                  <h1>{curElem.title}</h1>
                  <p>{curElem.range}</p>
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PropertyLists

import React from 'react'
// import Cities2Data from './Cities2Data'
// import City2 from './City2'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './cities2.css'

const CitiesList2 = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/4d124c40-bc8f-4229-8ca3-0eb12e5c71c8').then(
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
      <div className='citieslist2'>
        {/* {Cities2Data.map((cities2Data) => {
          return <City2 key={cities2Data.id} {...cities2Data}></City2>
        })} */}

        {data.map((curElem) => {
          return (
            <div className='cities2'>
              <div>
                <NavLink to=''>
                  <img src={curElem.image} alt='' />
                </NavLink>
              </div>
              <div className='cities2_heading'>
                <NavLink to=''>
                  <h1>{curElem.title}</h1>
                  <p>{curElem.description}</p>
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CitiesList2

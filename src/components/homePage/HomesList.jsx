import React from 'react'
// import Homes from './Homes'
// import HomesData from './HomesData'
import { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './homes.css'

const HomesList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/e95ac3a9-fea6-4be8-b45f-199a859a6655').then(
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
      <h1 className='homes_h1'>Homes guests love</h1>
      <div className='homeslist'>
        {/* {HomesData.map((homesData) => {
          return <Homes key={homesData.id} {...homesData}></Homes>
        })} */}

        {data.map((curElem) => {
          return (
            <div className='homes'>
              <div>
                <NavLink to=''>
                  <img src={curElem.image} alt='' />
                </NavLink>
              </div>
              <div className='homes_heading'>
                <NavLink to=''>
                  <div>
                    <h1>{curElem.appartmentName}</h1>
                    <p>{curElem.city}</p>
                    <h3>{curElem.price}</h3>
                  </div>
                  <div className='reviews'>
                    <h6>
                      <Badge bg='secondary' className='badge'>
                        9.1
                      </Badge>
                      Wonderful
                    </h6>
                    <p>295 reviews</p>
                  </div>
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default HomesList

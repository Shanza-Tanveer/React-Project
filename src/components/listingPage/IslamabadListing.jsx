import React from 'react'
import IslamabadData from './IslamabadData'
import IslamabadList from './IslamabadList'
import './listing.css'
import { useEffect, useState } from 'react'
import axios from 'react'
import { Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { setDefaultLocale } from 'react-datepicker'

const IslamabadListing = () => {
  const [data, setData] = useState([])

  // const getUsers = async () => {
  //   const response = await fetch(
  //     'https://run.mocky.io/v3/d322a668-db81-4c64-9a9f-2882f24171ad'
  //   )
  //   setUsers(await response.json())
  // }

  // useEffect(() => {
  //   getUsers()
  // }, [])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/15456a66-a449-4cce-a20c-fab03d0aa0ef').then(
      (result) => {
        result.json().then((resp) => {
          setData(resp)
          console.log(resp)
        })
      }
    )
  }, [setData])

  console.warn(data)

  // useEffect(() => {
  //   axios
  //     .Fragment('https://run.mocky.io/v3/d322a668-db81-4c64-9a9f-2882f24171ad')
  //     .then((res) => {
  //       console.log(res)
  //       setPosts(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <>
      <div className='list_heading'>
        <h1>Islamabad: 48 properties found</h1>
      </div>
      {/* {IslamabadData.map((islamabadData) => {
        return (
          <IslamabadList
            key={islamabadData.id}
            {...islamabadData}
          ></IslamabadList>
        )
      })} */}

      {data.map((curElem) => {
        return (
          <div className='outer_div'>
            <div className='inner_div'>
              <div className='image_div'>
                <NavLink to=''>
                  <img src={curElem.hotelImg} alt='' />
                </NavLink>
              </div>
              <div className='data_div'>
                {/* 2nd part */}
                <NavLink to=''>
                  <div className='upper_div'>
                    <div className='first_div'>
                      <div className='first_div_h2'>
                        <h2>{curElem.hotelName}</h2>
                      </div>
                      <div className='first_div_p'>
                        <p>{curElem.hotelAddress}</p>
                      </div>
                      <div>
                        <p className='property_p'>{curElem.property}</p>
                      </div>
                    </div>
                    <div className='second_div'>
                      <div className='room_reviews'>
                        <div>
                          <div>
                            <h6>Very Good</h6>
                          </div>
                          <div>
                            <p>295 reviews</p>
                          </div>
                        </div>
                        <div>
                          <Badge bg='secondary' className='badge'>
                            9.1
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 3rd part */}
                  <div className='lower_div'>
                    <div className='third_div'>
                      <div className='third_div_p'>
                        <p>{curElem.appartmentType}</p>
                      </div>
                      <div>
                        <p>{curElem.entireAppartment}</p>
                      </div>
                      <div>
                        <p>{curElem.roomType}</p>
                      </div>
                      <div>
                        <p className='facilities_p'>{curElem.facilities}</p>
                      </div>
                      <div className='third_div_p1'>
                        <p>{curElem.cancellation}</p>
                      </div>
                      <div className='third_div_p2'>
                        <p>{curElem.cancellationTime}</p>
                      </div>
                      <div className='third_div_p3'>
                        <p>{curElem.leftRooms}</p>
                      </div>
                    </div>
                    <div className='fourth_div'>
                      <div>
                        <div className='stays'>
                          <p>{curElem.stay}</p>
                        </div>
                        <div>
                          <h2>{curElem.roomPrice}</h2>
                        </div>
                        <div>
                          <p>{curElem.taxes}</p>
                        </div>
                        <button>See Availability</button>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default IslamabadListing

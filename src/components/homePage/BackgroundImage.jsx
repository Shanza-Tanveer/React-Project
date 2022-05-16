import React from 'react'
// import BackgroundData from './BackgroundData'
// import Image from './Image'
import { useEffect, useState } from 'react'
import './BgImage.css'

const BackgroundImage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/5d3eb0ca-eabf-40c8-b0d5-2b74b75f8404').then(
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
      {/* {BackgroundData.map((bgData) => {
        return <Image key={bgData} {...bgData}></Image>
      })} */}

      {data.map((curElem) => {
        return (
          <div className='container-fluid'>
            <div className='row m-5'>
              <img src={curElem.image} alt='' className='col-lg-12' />
            </div>
            <div className='text_block'>
              <h1>{curElem.description}</h1>
              <h2>{curElem.title}</h2>
            </div>
            <div className='container checkin'>
              <div className='row list'>
                <div className='col-sm'>
                  <input
                    type='text'
                    name='destination'
                    placeholder='Where are you going?'
                    className='input'
                  />
                </div>
                <div className='col-sm'>
                  <button className='btn_check'>Check-in - Check-out</button>
                </div>
                <div className='col-sm'>
                  <button className='btn_room'>
                    0 adults · 0 children · 0 room
                  </button>
                </div>
                <div className='col-sm'>
                  <button className='btn_search'>Search</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default BackgroundImage

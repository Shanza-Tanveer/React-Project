import React from 'react'
import BackgroundData from './BackgroundData'
import Image from './Image'

const BackgroundImage = () => {
  return (
    <>
      {BackgroundData.map((bgData) => {
        return <Image key={bgData} {...bgData}></Image>
      })}
    </>
  )
}

export default BackgroundImage

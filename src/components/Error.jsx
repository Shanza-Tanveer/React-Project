import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>Error_Page</h1>
      <Link to='/' className='btn'>
        Back Home
      </Link>
    </div>
  )
}

export default Error

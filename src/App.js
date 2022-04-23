import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Error from './components/Error'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/homePage/Home'
import Rooms from './components/Rooms'
import Property from './components/listingPage/Property'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/property' element={<Property />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App

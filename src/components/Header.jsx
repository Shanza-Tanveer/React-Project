import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import header from './header.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false)

  return (
    <>
      <nav className={header.main_nav}>
        <div className={header.logo}>
          <h2>
            <span>B</span>OOKING.
            <span>C</span>OM
          </h2>
        </div>
        <div className={header.menu_link}>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/rooms'>Rooms</NavLink>
            </li>
            <li>
              <NavLink to='/property'>Property</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact-us'>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className={header.login}>
          <ul className={header.login_desktop}>
            <li>
              <button className={header.btn}>
                <NavLink to='/sign-in'>SignIn</NavLink>
              </button>
            </li>
            <li>
              <button className={header.btn}>
                <NavLink to='/sign-up'>SignUp</NavLink>
              </button>
            </li>
          </ul>
          <div className={header.hamburger_menu}>
            <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header

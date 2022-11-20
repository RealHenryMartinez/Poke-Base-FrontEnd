// SideBar.js is the hamburger menu you see on the top-left corner and
// it gives you paths you can click on to go to those routes.

import React from 'react'

import { useState } from 'react'

// Importing icons used in the component
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'

import { Link } from 'react-router-dom'
import { SideBarRoutesData } from './SideBarRoutesData'

// importing styles
import '../styles/SideBar.css'
import '../styles/NavBarStyle.css'

const SideBar = () => {
  // initial hamburger menu is set to default which is false
  const [sidebar, setSidebar] = useState(false)

  // reveal the sidebar when the user clicks on the hamburger menu
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      {/* The Hamburger menu icon style */}
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* The Top NavBar that is sticky */}
        <div className="navbar">
          {/* Side Bar Data and linking text*/}

          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        {/* When the state of the sidebar is true by the onClick event, it would reveal the sidebar component */}

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {/* Mapping through the function data and grabbing each object from the array of sidebar objects */}
            {SideBarRoutesData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default SideBar

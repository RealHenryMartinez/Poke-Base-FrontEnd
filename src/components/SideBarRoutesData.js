// SideBarRoutes.js provides routes for the blue Side Bar menu on the left hand side

import React from 'react'

import * as AiIcons from 'react-icons/ai'

import '../styles/SideBar.css'

// Title will appear on the Side Bar
// React Ai Icons has many icons
// You make the path for the website
// Finally, the cName gives the path the font as well as making it clickable and its color

export const SideBarRoutesData = [
  // Structure for the sidebar data passed as objects
  {
    title: 'Home',
    icon: <AiIcons.AiFillHome />,
    path: '/',
    cName: 'nav-text',
  },

  {
    title: 'Submit Entry',
    icon: <AiIcons.AiFillEdit />,
    path: '/submit-entry',
    cName: 'nav-text',
  },
]

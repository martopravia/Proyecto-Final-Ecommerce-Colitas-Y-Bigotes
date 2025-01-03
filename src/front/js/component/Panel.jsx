import React from 'react'
import { Outlet } from 'react-router-dom'
import SubNavbar from './SubNavbar.jsx'

const Panel = () => {
  return (
    <>
    <SubNavbar/>
    <Outlet/>
    </>
  )
}

export default Panel
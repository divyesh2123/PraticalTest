import React from 'react'
import { Outlet } from 'react-router-dom'

function NoPage() {
  return (
    <div><Outlet></Outlet></div>
  )
}

export default NoPage
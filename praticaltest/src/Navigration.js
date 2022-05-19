import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Navigration() {
  return (
    <div>

          
    <ul>
       
       
       <li>
         <Link to='/invoices/sent'>Sent</Link>
       </li>
    
   </ul>


        <Outlet></Outlet>
    </div>
  )
}

import React from 'react'
import './Order.css'
import { NavLink } from 'react-router-dom'

const Order = () => {
  return (
    <>
     <div className="orders-compo">
        <div className="orders-navbar">
            <ul>
               <NavLink to="/"> <li>Dashboard</li></NavLink>
               <NavLink to="/Orders"> <li>Orders</li></NavLink>
                <li>Customers</li>
                <li>Category</li>
            </ul>
        </div>
        <p>Orders</p>
     </div>
    </>
  )
}

export default Order
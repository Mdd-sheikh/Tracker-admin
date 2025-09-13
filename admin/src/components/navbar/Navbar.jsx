import React from 'react'
import './Navbar.css'
import logo from '../../assets/react.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="first">
                    <i class="fa-solid fa-circle-user"></i>
                    <p> hello,Aftab Shaikh</p>
                </div>
                <div className="last">
                    <div className="last-page-one">
                       <NavLink to="/"><div className="dashboard">
                            <i class="fa-solid fa-table-columns"></i>
                            <p>Dashboard</p>
                        </div></NavLink>
                       <NavLink to="/Orders"> <div className="orders">
                            <i class="fa-solid fa-list"></i>
                            <p>Orders</p>
                        </div></NavLink>
                        <div className="customers">
                            <i class="fa-solid fa-people-arrows"></i>
                            <p>Customers</p>
                        </div>
                        <div className="category">
                            <i class="fa-solid fa-layer-group"></i>
                            <p>Category</p>
                        </div>
                        <div className="product-size">
                            <i class="fa-brands fa-product-hunt"></i>
                            <p>Product Size</p>
                        </div>
                    </div>
                    <div className="last-page-two">
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
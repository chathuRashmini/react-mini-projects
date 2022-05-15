import React from 'react'

import './navbar.css'
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="logo-section">
        <img src={logo} alt="logo" className="img-section" />

        <h2 className="title-section">ReactFacts</h2>
      </div>

      <h5 className="description-section">React Course - Project 1</h5>
    </div>
  )
}

export default Navbar
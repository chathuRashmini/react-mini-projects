import React from 'react'

import './details.css'
import logo from '../logo.svg';

const Details = () => {
  return (
    <div className="details-section">
      <div className="details__facts-section">
        <h2 className="details__title-section">Fun facts about React</h2>

        <ul className="details__list-section">
          <li>Was first released in 2013.</li>
          <li>Was originally created by Jordan Walke.</li>
          <li>Has well over 100K stars on GitHub.</li>
          <li>Is maintained by Facebook.</li>
          <li>Powers thousands of enterprise apps, including mobile apps.</li>
        </ul>

      </div>

      <div className="details__img-div-section">
        <img src={logo} alt="logo" className="details__img-section" />
      </div>
    </div>
  )
}

export default Details
import React, { Component } from 'react'
import './header.css';
import { NavLink } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className='navbarStyle'><nav className="navbar navbar-expand-sm navbar-light navbarBackground">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GSM</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink to="/home">
                <span className='nav-link'>Home</span>
                </NavLink>
              {/* <a className="nav-link" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
            <NavLink to="/mobiles&accessories">
                <span className='nav-link'>Mobiles&Accessories</span>
                </NavLink>
              {/* <a className="nav-link" href="mobiles&accessories">Mobiles&Accessories</a> */}
            </li>
            <li className="nav-item">
            <NavLink to="/electronics">
                <span className='nav-link'>Electronics</span>
                </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li> */}
            <li className="nav-item">
                <NavLink to="/login" className='nav-link'>
                <span className='signUpBtn'>Login</span>
                </NavLink>
                
            </li>
          </ul>
        </div>
      </div>
    </nav></div>
    )
  }
}

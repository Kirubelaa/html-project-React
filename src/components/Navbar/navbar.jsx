import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {
  return (
    <header>
      <section className="container">
      <div className="navbar-container">

          <div className="logo">
              <img src="public/Header-images/silcon.svg" alt="" />
              <span>Silicon</span>
          </div>

          <div className="link-nav">
              <li><Link to="/features" className='link'>Features</Link> </li>
              <li><Link to="/contact" className='link'>Contact</Link> </li>
          </div>          

          <div className="dark-mode">
                <div className="toggle-button">
                     <label className="toggle-label">Dark Mode</label>
                      <label className="switch">
                     <input type="checkbox" />
                    <span className="slider round"></span>
                 </label>
                </div>
          </div>

          <a href="#" className="btn signin-button">
  <i className="bi bi-person"></i>
  <span>Sign in / up</span>
          </a>

          <button className="mobile-button">
  <i className="bi bi-list"></i>
          </button>

          </div>  
      </section>
   
  </header>
  )
}

export default Navbar
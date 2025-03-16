import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'; // Kollar om Dark Mode var aktivt innan
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark'); // Sätter dark mode på <html>
    } else {
      document.documentElement.setAttribute('data-theme', 'light'); // Sätter light mode
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light'); // Sparar inställningen i localStorage
  }, [darkMode]);

  return (
    <header>
       <section className="container">
        <div className="navbar-container">

          <div className="logo">
            <img src="public/Header-images/silcon.svg" alt="" />
            <span>Silicon</span>
          </div>

          <div className="link-nav">
            <li><Link to="/features" className='link'>Features</Link></li>
            <li><Link to="/contact" className='link'>Contact</Link></li>
          </div>          

          <div className="dark-mode">
            <div className="toggle-button">
              <label className="toggle-label">Dark Mode</label>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={darkMode} 
                  onChange={() => setDarkMode(!darkMode)} 
                />
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
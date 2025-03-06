import React from 'react'
import "./Header.scss"

const Header = () => {
  return (
    <section className="hero">
     <section className="container">
        <section className="hero-container">
            <div className="header-container">
                <section className="header-main">
                    <div className="text">
                        <div className="titel">
                            <h1>Manage All Your Money in One App</h1>
                        </div>
                        <div className="subtitel">
                            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                        </div>
                    </div>
                    <div className="market-bins">
                        <button className="appstore">
                            <img src="public/Header-images/appstore-light.svg" alt="" />
                        </button>
                        <button className="googleplay">
                            <img src="public/Header-images/googleplay-light.svg" alt="" />
                        </button>
                    </div>
                    <div className="discover-more">
                        <button className="arrow">
                            <i className="bi bi-chevron-down"></i>
                        </button>
                        <span>Discover more</span>
                    </div>
                </section>
                <div className="header-image">
                    <div className="left-img">
                        <img src="public/Header-images/iPhone-left.svg" alt="" />
                    </div>
                    <div className="right-img">
                        <img src="public/Header-images/Iphone-right.svg" alt="" />
                    </div>
                </div>
            </div>
         </section>
        </section>
     </section>
       
   
       

  )
}

export default Header
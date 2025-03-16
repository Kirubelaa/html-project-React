import React from 'react'
import './Subscribe.scss'

export const Subscribe = () => {
  return (
    <section className="Subscribe">
        <div className="container">
            <div className="Sub-managment">
                <div className="sub-leftbord">
                    <img src="public/Faq/notification.svg" alt="" />
                    <h4 className="subscribe-text">Subscribe to our newsletter to stay informed about latest updates</h4>
                </div>
                <div className="sub-rightbord">
                    <div className="email-container">
                       <i className="bi bi-envelope"></i>
                       <input type="email" placeholder="Your email" className="email-input" />
                       <button className="subscribe-button">Subscribe</button>

                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

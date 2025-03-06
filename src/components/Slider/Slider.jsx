import React from 'react'
import './Slide.scss';
const Slider = () => {
  return (
    <section className="slider-managment">
      <div className="container">
        <div className="slider-titel">
          <h1>How Does It Work?</h1>
        </div>
        <div className="slider-images">
            <img className="first-img" src="public/Slider/first-image.svg" alt="" />
            <img className="second-img" src="public/Slider/second-image.svg" alt="" />
            <img className="third-img" src="public/slider/third-image.svg" alt="" />
        </div>
        <div className="image-titel">
          <h1 className="phone-text">
            {/*text för telfon och tablet*/}
            <span className="step-number"> Step 3. </span>
            Transfers to people from your
          contact list
          </h1>
          <p  className="phone-text"> Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
          Pellentesque volutpat ligula est. Mattis fermentum, at nec
          lacus.
         </p>

         {/*text för disktop*/}
         <h1 className="desktop-text">Latest transaction history</h1>
         <p className="desktop-text">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
        </div>
      </div>
    </section>
  )
}

export default Slider
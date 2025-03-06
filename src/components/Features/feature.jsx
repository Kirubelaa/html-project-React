import React from 'react'
import "./features.scss";

const Features = () => {
  return (
    <section className="feature-managment">
      <div className="container">
        <div className="feature">
          <div className="image">
            <img src="public/Feature-image/feature-img.svg" alt="" />
          </div>
            <div className="text-content">
               <div className="feature-titel">
                 <h1>App Features</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
               </div>
               <section className="feature-info">
                 <div className="box">
                   <img src="public/Feature-image/payments.svg" alt="" />
                   <div className="box-titel">
                       <h3>Easy Payments</h3>
                       <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                   </div>
                 </div>
                 <div className="box">
                   <img src="public/Feature-image/statistics.svg" alt="" />
                   <div className="box-titel">
                       <h3>Cost Statistics</h3>
                       <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                   </div>
                 </div>
                 <div className="box">
                   <img src="public/Feature-image/cashback.svg" alt="" />
                   <div className="box-titel">
                       <h3>Regular Cashback</h3>
                       <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                   </div>
                 </div>
                 <div className="box">
                   <img src="public/Feature-image/security.svg" alt="" />
                   <div className="box-titel">
                       <h3>Data Security</h3>
                       <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                   </div>
                 </div>
                 <div className="box">
                   <img src="public/Feature-image/support.svg" alt="" />
                   <div className="box-titel">
                       <h3>Support 24/7</h3>
                       <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                   </div>
                 </div>
                 <div className="box">
                   <img src="public/Feature-image/happy.svg" alt="" />
                   <div className="box-titel">
                       <h3>Top Standards</h3>
                       <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                     </div>
                 </div>
               </section>
            </div>
       </div> 
      </div>
    </section>
  )
}

export default Features
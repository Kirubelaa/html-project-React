import React from 'react'

const DisktopFeature = () => {
  return (
    <section className="extraFeature">
      <div className="container">
         <div className="extrafeature-sectionOne">
          <div className="extrafeature-leftboxOne">
              <div className="extrafeature-titelone">
                  <h1>Make your money transfer simple and clear</h1>
                  <ul className="feature-list">
                    <li><i className="bi bi-check-circle"></i> Banking transactions are free for you</li>
                    <li><i className="bi bi-check-circle"></i> No monthly cash commission</li>
                    <li><i className="bi bi-check-circle"></i> Manage payments and transactions online</li>
                  </ul>
              </div>

              <button className="learn-more">
                <span> Learn more </span>
                <i class="bi bi-arrow-right-short"></i> 
              </button>
          </div>
         
         
           <div className="sectionOne-image">
            <img src="./extraFeature-images/right-image.svg" alt="" />
           </div>
         </div>

         <div className="extrafeature-sectionTwo">
            <div className="sectionTwo-image">
                <img src="./extraFeature-images/left-image.svg" alt="" />
            </div>
            <div className="extrafeature-titeltwo">
               <h1>Receive payment from international bank details</h1>

            <div className="extrafeature-rightboxTwo">
                <div className="disktop-box">
                   <img src="public/Feature-image/payments.svg" alt="" />
                      <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
               </div>
                
                   <div className="disktop-box">
                       <img src="public/Feature-image/cashback.svg" alt="" />
                           <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                   </div>
            </div>
            <button className="learn-more">
                    <span> learn more </span>
                    <i class="bi bi-arrow-right-short"></i> 
                </button>
           
          </div>
           
          
          
        
         </div>
    </div>
  </section>
  )
}

export default DisktopFeature
import React, { useState, useEffect } from 'react';
import { fetchTestimonials } from '../../api/testimonialsApi.js';
import './Testimonials.scss';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTestimonials = async () => {
          const data = await fetchTestimonials();
          console.log("Fetched Testimonials:", data);
          setTestimonials(data);
          setLoading(false);
        };
        getTestimonials();
      }, []);

    if (loading) return <p className="load">Loading testimonials...</p>;

    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials-managment">
                    <div className="testimonials-title">
                         <h2>Clients are Loving Our App</h2>
                    </div>

                  <div className="testimonials-list">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-box">
                          <div className="quote">
                             <i className="bi bi-quote quote-icon"></i>
                          </div>

                             <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                  <i key={i} className={i < testimonial.rating ? "bi-star-fill" : "bi-star"}>
                                  </i>
                                ))}
                              </div>

                            <div className="comments">
                                <p>{testimonial.comment}</p>
                            </div>
                            <div className="client">
                                <img className="client-image" src={testimonial.image} alt="" />
                                <div className="role">
                                <p>{testimonial.name}</p>
                               <span>{testimonial.role}</span>
                            </div>
                            </div>
                          
                        </div>
                        
                    ))}
                  </div>
                </div>
                
            </div>
        </section>
    );
};

export default Testimonials;

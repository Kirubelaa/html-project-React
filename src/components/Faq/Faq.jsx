import React, {useState,} from 'react'
import "./Faqs.scss"


const faqList = [
  { question: "Is any of my personal information stored in the App?", 
    answer: "Nunc duis id aenean gravida tincidunt eu, temporullamcorper. Viverra aliquam arcu, viverra et,cursus. Aliquet pretium cursus adipiscing gravidaet consequat lobortis arcu velit. Nibh pharetrafermentum duis accumsan lectus non. Massacursus molestie lorem scelerisque pellentesque.Nisi, enim, arcu purus gravida adipiscing euismodmontes, duis egestas. Vehicula eu etiam quamtristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integerconsequat in eu tortor, faucibus et laciniaposuere. Turpis sit viverra lorem suspendisselacus aliquam auctor vulputate. Quis egestasaliquam nunc purus lacus, elit leo elit facilisi.Dignissim amet adipiscing massa integer." 
  },
  { question: "What formats can I download my transaction history in?", 
    answer: "Please contact us, link in the bellow" 
  },
  { question: "Can I schedule future transfers?", 
    answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
  },
  { question: "When can I use Banking App services?",
    answer: "Please contact us, link in the bellow"
  },
  { question: "What happens if I forget or lose my password?",
    answer: "Please contact us, link in the bellow"
  }
];

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  
  return (
    <section className="faq">
      <div className="container">
        <div className="faq-managment">
        <div className="faq-titel">
          <h3>Any questions ? Check out the FaQs</h3>
          <p>Sitll have unanswered questions and need to get in touch ?</p>
        </div>
        <div className="faq-border">
          {faqList.map((item, index) => (
            <div key={index} className="border">
               <div className={`border-questions ${openQuestion === index ? "active" : ""}`}
               onClick={() => toggleQuestion(index)} >

                <h5> {item.question}</h5>
                  <div className= {`arrow ${openQuestion === index ? "active" : ""}`}>
                   <i className={`bi bi-chevron-${openQuestion === index ? "up" : "down" }`}></i>
                  </div>
            </div> 
              {openQuestion === index && (
                <div className="faq-answer">
                   <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="contact">
          <div className="contact-us">
            <div className="phone-us">
                <img src="./public/Faq/icon.svg" alt="" />
                <p> Do you have any question ?</p>
            </div>
            <button className="phone-button">
                <p>contact us</p> 
                <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="contact-us">
            <div className="sms-us">
              <div className="chat-dots">
                <i class="bi bi-chat-dots-fill"></i>            
              </div>
                 <p>Don't like phone calls ?</p>
            </div>
            <div className="button">
            <button className="sms-button">
                <p>contact us</p> 
                <i class="bi bi-arrow-right"></i>
            </button>
            </div>
          </div>
        </div>
        </div>
      
      </div>
    </section>
  )
}

export default Faq
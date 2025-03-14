import React, {useState,} from 'react'
import "./Faqs.scss"


const faqList = [
  { question: "Is any of my personal information stored in the App?", 
    answer: "Nunc duis id aenean gravida tincidunt eu, temporullamcorper. Viverra aliquam arcu, viverra et,cursus. Aliquet pretium cursus adipiscing gravidaet consequat lobortis arcu velit. Nibh pharetrafermentum duis accumsan lectus non. Massacursus molestie lorem scelerisque pellentesque.Nisi, enim, arcu purus gravida adipiscing euismodmontes, duis egestas. Vehicula eu etiam quamtristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integerconsequat in eu tortor, faucibus et laciniaposuere. Turpis sit viverra lorem suspendisselacus aliquam auctor vulputate. Quis egestasaliquam nunc purus lacus, elit leo elit facilisi.Dignissim amet adipiscing massa integer." 
  },
  { question: "What formats can I download my transaction history in?", 
    answer: "Please contact us in link in the bellow" 
  },
  { question: "Can I schedule future transfers?", 
    answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
  },
  { question: "When can I use Banking App services?",
    answer: "Please contact us in link in the bellow"
  },
  { question: "What happens if I forget or lose my password?",
    answer: "Please contact us in link in the bellow"
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
                <p className="faq-answer">
                   {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="contact">
          <div className="contact-phone">
              
          </div>
          <div className="contact-sms">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
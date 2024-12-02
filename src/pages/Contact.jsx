import Calendly from "../components/Calendly";
import "../styles/Contact.css"

function Contact() {
  return(
   <div id="contact">
    <div>
      <h2>Get In Touch</h2> 
      <p>Some messaging on contacting me.</p>
    </div>
      
      <div>
        <Calendly/>
      </div>
   </div>
  )
}

export default Contact;
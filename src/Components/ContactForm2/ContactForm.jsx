import "./ContactForm.css";
import image from "../../assets/arrow.png";

function ContactForm() {
  return (
    <div className="contact-container">
      <a href="/contactus">
        <img src={image} alt="arrow image" />
        &nbsp;&nbsp; Submit a query
      </a>
      <form className="ContactForm2">
        <div className="ContactinputDiv">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input id="name" type="text" name="name" required />
        </div>

        <div className="ContactinputDiv">
          <label htmlFor="contact-number">
            Contact Number<span>*</span>
          </label>
          <input
            id="contact-number"
            type="number"
            name="contact-number"
            required
          />
        </div>

        <div className="ContactinputDiv">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input id="email" type="email" name="email" required />
        </div>

        <div className="ContactinputDiv msgBox">
          <label htmlFor="msg">Message(Optional)</label>
          <input id="msg" type="text" name="msg" />
        </div>

        <div className="ContactinputDiv contact-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

import React, { Component } from "react"
import { Row } from "reactstrap"
import ContactForm from "./ContactForm"

export class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <h1>Contact</h1>
          <div className="container contact-message">
            <p className="text-center ">
              Send me a message. Feel free to get in touch with me about any job
              opportunities or you can just say hi. I will get back to you as
              soon as I can
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact

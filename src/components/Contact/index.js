import React, { Component } from "react"
import ContactForm from "./ContactForm"

import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "../VisibilitySensor"

export class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <VisibilitySensor once>
          {({ isVisible }) => (
            <Spring
              delay={200}
              to={{
                opacity: isVisible ? 1 : 0,
              }}
            >
              {({ opacity }) => (
                <div className="container" style={{ opacity }}>
                  <h1>Contact</h1>
                  <div className="container contact-message">
                    <p className="text-center ">
                      Send me a message. Feel free to get in touch with me about
                      any job opportunities or you can just say hi. I will get
                      back to you as soon as I can
                    </p>
                  </div>
                  <ContactForm />
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    )
  }
}

export default Contact

import React, { Component } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"

export class ContactForm extends Component {
  render() {
    return (
      <div className="container contact-form">
        <Form
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <FormGroup>
            <Input
              className="text-input"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="text-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="textarea-input"
              type="textarea"
              rows="5"
              name="message"
              id="message"
              placeholder="Message"
            />
          </FormGroup>
          <Button size="lg" block>
            Send
          </Button>
        </Form>
      </div>
    )
  }
}

export default ContactForm

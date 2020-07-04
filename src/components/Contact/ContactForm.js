import React, { Component } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo("/"))
      .catch(error => alert(error))
    // .then(() => navigateTo(form.getAttribute("action")))
    // .catch(error => alert(error));
  }

  render() {
    return (
      <div className="container contact-form">
        <Form
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
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
          <Button type="submit" size="lg" block>
            Send
          </Button>
        </Form>
      </div>
    )
  }
}

export default ContactForm

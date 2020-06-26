import React, { Component } from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa" // Font Awesome
import config from "../../data/config"

class TransparentBox extends Component {
  render() {
    return (
      <div className="prof-box">
        <h1>{"I'm " + config.author}</h1>
        <div className="social-icons">
          {config.userLinkedIn && (
            <a
              href={config.userLinkedIn}
              target="blank"
              className="icon linkedin"
            >
              <FaLinkedin />
            </a>
          )}
          {config.userGithub && (
            <a href={config.userGithub} target="blank" className="icon github">
              <FaGithub />
            </a>
          )}
          <a
            href="mailto:andrade.daniel111@gmail.com"
            target="blank"
            className="icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    )
  }
}

export default TransparentBox

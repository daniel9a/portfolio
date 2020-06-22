import PropTypes from "prop-types"
import React, { Component } from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa" // Font Awesome
import { Link } from "gatsby"

class TransparentBox extends Component {
  render() {
    return (
      <div className="prof-box">
        <h1>I'm Daniel Andrade</h1>
        <div className="social-icons">
          <Link
            to="https://www.linkedin.com/in/daniel-andrade9/"
            target="blank"
            className="icon"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://github.com/daniel9a/"
            target="blank"
            className="icon"
          >
            <FaGithub />
          </Link>
          <Link
            to="mailto:andrade.daniel111@gmail.com"
            target="blank"
            className="icon"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    )
  }
}

export default TransparentBox

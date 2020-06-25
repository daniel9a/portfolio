import React from "react"

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa" // Font Awesome
import config from "../../../config"

const Footer = () => (
  <div className="site-footer">
    {/* <h4 className="text-center">{config.siteTitle}</h4>
    <p className="text-center">Follow me on social media</p> */}
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          {config.userLinkedIn && (
            <a
              href="https://www.linkedin.com/in/daniel-andrade9/"
              target="blank"
              className="icon linkedin"
            >
              <FaLinkedin />
            </a>
          )}
        </li>
        <li>
          {config.userGithub && (
            <a
              href="https://github.com/daniel9a/"
              target="blank"
              className="icon github"
            >
              <FaGithub />
            </a>
          )}
        </li>

        {/* <li>
          <a
            href={config.userGithub ? config.userGithub : "https://www.github.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
        <li>
          <a
            href={config.userLinkedIn ? config.userLinkedIn : "https://www.linkedin.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li> */}
      </ul>
    </div>
    <p className="text-center">
      {"Copyright © " + new Date().getFullYear() + " " + config.copyright}
    </p>
  </div>
)

export default Footer

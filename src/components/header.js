import PropTypes from "prop-types"
import React from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"

import ToggleMode from "./ToggleMode"

import resume from "../../static/Daniel_Andrade_Resume.pdf"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="md">
          <div className="container">
            <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    <AnchorLink href="#about">About</AnchorLink>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <AnchorLink href="#experience">Experience</AnchorLink>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <AnchorLink href="#portfolio">Portfolio</AnchorLink>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <AnchorLink href="#contact">Contact</AnchorLink>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a href={resume} target="blank" className="btn btn-secondary">
                    Resume
                  </a>
                </NavItem>
                <NavItem className="ml-md-4">
                  <ToggleMode />
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

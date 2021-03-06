import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Landing from "./Landing/Landing"
import About from "./About"
import Experience from "./Experience"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Footer from "./Footer"
import "../styles/index.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Landing />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        {/* <div className="container" id="content">
          {children}
        </div> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

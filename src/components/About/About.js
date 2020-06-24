import React, { Component } from "react"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      markdownRemark(frontmatter: { templateKey: { regex: "/about/" } }) {
        frontmatter {
          templateKey
          meta_title
          title
          image {
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt(pruneLength: 1000)
      }
    }
  `)

  const frontmatter = data.markdownRemark.frontmatter
  const excerpt = data.markdownRemark.excerpt

  return (
    <div className="about">
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={{ size: 3 }}>
            <Img
              className="profile-pic"
              fluid={frontmatter.image.childImageSharp.fluid}
            />
          </Col>
          <Col lg={{ size: 6 }}>
            <h1>{frontmatter.title}</h1>
            <p>{excerpt}</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default About

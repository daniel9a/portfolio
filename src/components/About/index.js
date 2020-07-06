import React from "react"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "../VisibilitySensor"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      markdownRemark(frontmatter: { templateKey: { regex: "/about/" } }) {
        frontmatter {
          templateKey
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
    <div className="about" id="about">
      <VisibilitySensor once>
        {({ isVisible }) => (
          <Spring
            delay={300}
            to={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {({ opacity }) => (
              <div className="container" style={{ opacity }}>
                <Row className="justify-content-center">
                  <Col lg={{ size: 3 }} className="col-auto">
                    <Img
                      className="profile-pic shadow-lg"
                      fluid={frontmatter.image.childImageSharp.fluid}
                    />
                  </Col>
                  <Col lg={{ size: 6 }}>
                    <h1>{frontmatter.title}</h1>
                    <p>{excerpt}</p>
                  </Col>
                </Row>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  )
}

export default About

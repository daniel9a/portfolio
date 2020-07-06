import React from "react"
import {
  Badge,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "../VisibilitySensor"

const Resume = () => {
  const experienceData = useStaticQuery(graphql`
    query ExperienceQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
        sort: { fields: [frontmatter___order], order: DESC }
      ) {
        edges {
          node {
            excerpt(pruneLength: 5000)
            frontmatter {
              company
              location
              position
              skills
              startDate
              endDate
              skills
              logo {
                childImageSharp {
                  fluid(maxWidth: 100, maxHeight: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  `)

  return (
    <div className="experience" id="experience">
      <div className="container">
        <Card className="experience-container rounded shadow-lg">
          <CardBody>
            <VisibilitySensor once>
              {({ isVisible }) => (
                <Spring
                  delay={300}
                  to={{
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {({ opacity }) => (
                    <CardTitle style={{ opacity }}>
                      <h1>Experience</h1>
                    </CardTitle>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
            {experienceData.allMarkdownRemark.edges.map(({ node }) => (
              <Row className="container justify-content-center card-container">
                <VisibilitySensor once>
                  {({ isVisible }) => (
                    <Spring
                      delay={200}
                      to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? `translateX(0%)`
                          : `translateX(-10%)`,
                      }}
                    >
                      {({ opacity, transform }) => (
                        <Col md="2" style={{ opacity, transform }}>
                          <Img
                            className="logo shadow-lg mb-sm-3"
                            fluid={node.frontmatter.logo.childImageSharp.fluid}
                          />
                        </Col>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
                <VisibilitySensor once>
                  {({ isVisible }) => (
                    <Spring
                      delay={200}
                      to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? `translateX(0%)`
                          : `translateX(10%)`,
                      }}
                    >
                      {({ opacity, transform }) => (
                        <Col style={{ opacity, transform }}>
                          <CardText>
                            <h3>{node.frontmatter.position}</h3>
                            <h4>{node.frontmatter.company}</h4>
                            <h5>
                              {node.frontmatter.startDate} -{" "}
                              {node.frontmatter.endDate}
                            </h5>
                            <h5>{node.frontmatter.location}</h5>
                            <p>{node.excerpt}</p>
                            <ul className="stack-tags">
                              {node.frontmatter.skills.map(skill => (
                                <li key={skill}>
                                  <Badge
                                    color="secondary"
                                    className="text-uppercase"
                                  >
                                    {skill.toLowerCase()}
                                  </Badge>
                                </li>
                              ))}
                            </ul>
                            <hr className="line-break" />
                          </CardText>
                        </Col>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
              </Row>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Resume

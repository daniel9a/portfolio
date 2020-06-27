import React, { Component } from "react"
import {
  Row,
  Col,
  Badge,
  Card,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"

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
              current
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
    <div className="experience">
      <div className="container">
        <Card className="experience-container rounded shadow-lg">
          <CardBody>
            <CardTitle>
              <h1>Experience</h1>
            </CardTitle>
            {experienceData.allMarkdownRemark.edges.map(({ node }) => (
              <Row className="container justify-content-center card-container">
                <Col md="2">
                  <Img
                    className="logo"
                    fluid={node.frontmatter.logo.childImageSharp.fluid}
                  />
                </Col>
                <Col>
                  <CardText>
                    <h2>{node.frontmatter.position}</h2>
                    <h3>{node.frontmatter.company}</h3>
                    <h4>
                      {node.frontmatter.startDate} - {node.frontmatter.endDate}
                    </h4>
                    <h4>{node.frontmatter.location}</h4>
                    <p>{node.excerpt}</p>
                    <hr className="line-break" />
                  </CardText>
                </Col>
              </Row>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Resume

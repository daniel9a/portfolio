import React from "react"
import { Row, Col } from "reactstrap"

import { useStaticQuery, graphql } from "gatsby"

import PortfolioCard from "./Card"

const Portfolio = () => {
  const portfolioData = useStaticQuery(graphql`
    query PortfolioQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              category
              github
              stack
              title
              demo
              image {
                childImageSharp {
                  fluid(maxWidth: 360, maxHeight: 240) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h1 className="text-center">Portfolio</h1>
        <Row>
          {portfolioData.allMarkdownRemark.edges.map(({ node }) => (
            <Col lg="4" md="4" className="mb-5">
              <PortfolioCard
                key={node.id}
                title={node.frontmatter.title}
                image={node.frontmatter.image.childImageSharp.fluid}
                category={node.frontmatter.category}
                stacks={node.frontmatter.stack}
                body={node.excerpt}
                github={node.frontmatter.github}
                demo={node.frontmatter.demo}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Portfolio

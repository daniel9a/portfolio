import React from "react"
import { Card, CardTitle, CardText, CardBody } from "reactstrap"
import { FaLink, FaGithub } from "react-icons/fa"
import Img from "gatsby-image"

import Icon from "../icons"

const PortfolioCard = ({
  title,
  github,
  demo,
  stacks,
  category,
  image,
  body,
}) => {
  return (
    <Card className="rounded shadow-lg">
      {/* <Img className="card-image-top" fluid={image} /> */}
      <div className="card-img-overlay">
        <div className="btn btn-light btn-sm">{category}</div>
      </div>
      <CardBody>
        <CardTitle>
          <h1>{title}</h1>
        </CardTitle>
        <CardText>{body}</CardText>
        <ul className="stack-tags">
          {stacks.map(stack => (
            <li key={stack}>
              <Icon icon={stack.toLowerCase()} />
            </li>
          ))}
        </ul>
        <div className="links">
          {demo && (
            <a href={demo} target="blank" className="icon mr-2">
              <FaLink />
            </a>
          )}
          {github && (
            <a href={github} target="blank" className="icon mr-2">
              <FaGithub />
            </a>
          )}
        </div>
      </CardBody>
    </Card>
  )
}

export default PortfolioCard

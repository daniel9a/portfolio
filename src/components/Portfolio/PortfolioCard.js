import React from "react"
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardLink,
  Badge,
} from "reactstrap"
import { FaLink, FaGithub } from "react-icons/fa"
import Img from "gatsby-image"

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
    <Card className="rounded shadow-lg ">
      <Img className="card-image-top" fluid={image} />
      {/* <div className="card-img-overlay">
        <div className="btn btn-secondary btn-sm">{category}</div>
      </div> */}
      <CardBody>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardText>{body}</CardText>
        <ul className="stack-tags">
          {stacks.map(stack => (
            <li key={stack}>
              <Badge color="secondary" className="text-uppercase">
                {stack.toLowerCase()}
              </Badge>
            </li>
          ))}
        </ul>
        <hr />
        <div className="links">
          {demo && (
            <CardLink href={demo}>
              <a href={demo} target="blank" className="icon btn btn-secondary">
                <FaLink /> Source
              </a>
            </CardLink>
          )}
          {github && (
            <CardLink href={github}>
              <a
                href={github}
                target="blank"
                className="icon btn btn-secondary"
              >
                <FaGithub /> Github
              </a>
            </CardLink>
          )}
        </div>
      </CardBody>
    </Card>
  )
}

export default PortfolioCard

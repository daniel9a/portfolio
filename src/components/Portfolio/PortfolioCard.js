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
    <Card className="rounded shadow-lg h-100">
      <Img className="card-image-top" fluid={image} />
      {/* <div className="card-img-overlay">
        <div className="btn btn-secondary btn-sm">{category}</div>
      </div> */}
      <CardBody className="d-flex flex-column">
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        {/* <CardText>{body}</CardText> */}
        <div className="mt-auto">
          <ul className="container stack-tags">
            {stacks.map(stack => (
              <li key={stack}>
                <Badge color="secondary" className="text-uppercase">
                  {stack.toLowerCase()}
                </Badge>
              </li>
            ))}
          </ul>

          <div className="links ">
            <hr />
            {demo !== "null" && demo && (
              <CardLink
                href={demo}
                target="blank"
                className="icon btn btn-secondary"
              >
                <FaLink /> Source
              </CardLink>
            )}
            {github !== "null" && github && (
              <CardLink
                href={github}
                target="blank"
                className="icon btn btn-secondary"
              >
                <FaGithub /> Github
              </CardLink>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default PortfolioCard

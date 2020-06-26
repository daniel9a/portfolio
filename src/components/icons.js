import React from "react"
import { Badge } from "reactstrap"

const Icons = ({ icon }) => {
  switch (icon) {
    case "bootstrap":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/bootstrap.png"
          title={icon}
          alt={icon}
        />
      )
    case "c":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/c-programming.png"
          title={icon}
          alt={icon}
        />
      )
    case "c++":
    case "cpp":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
          title={icon}
          alt={icon}
        />
      )
    case "css":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/css3.png"
          title={icon}
          alt={icon}
        />
      )
    case "django":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/django.png"
          title={icon}
          alt={icon}
        />
      )
    case "git":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/git.png"
          title={icon}
          alt={icon}
        />
      )
    case "github":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/github--v1.png"
          title={icon}
          alt={icon}
        />
      )
    case "html":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/html-5.png"
          title={icon}
          alt={icon}
        />
      )
    case "javascript":
    case "js":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/javascript.png"
          title={icon}
          alt={icon}
        />
      )
    case "jira":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/jira.png"
          title={icon}
          alt={icon}
        />
      )
    case "link":
      return (
        <img
          src="https://img.icons8.com/fluent/48/000000/link.png"
          title={icon}
          alt={icon}
        />
      )
    case "linkedin":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          title={icon}
          alt={icon}
        />
      )
    case "mongodb":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/mongodb.png"
          title={icon}
          alt={icon}
        />
      )
    case "mssql":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/microsoft-sql-server.png"
          title={icon}
          alt={icon}
        />
      )
    case "nodejs":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/nodejs.png"
          title={icon}
          alt={icon}
        />
      )
    case "postgreesql":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/postgreesql.png"
          title={icon}
          alt={icon}
        />
      )
    case "python":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/python.png"
          title={icon}
          alt={icon}
        />
      )
    case "react":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/react-native.png"
          title={icon}
          alt={icon}
        />
      )
    case "sql":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/sql.png"
          title={icon}
          alt={icon}
        />
      )
    case "unity":
      return (
        <img
          src="https://img.icons8.com/ios-filled/48/000000/unity.png"
          title={icon}
          alt={icon}
        />
      )
    case "unreal":
      return (
        <img
          src="https://img.icons8.com/windows/48/000000/unreal-engine.png"
          title={icon}
          alt={icon}
        />
      )
    case "visual studio":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/visual-studio.png"
          title={icon}
          alt={icon}
        />
      )
    case "wordpress":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/wordpress.png"
          title={icon}
          alt={icon}
        />
      )

    default:
      return (
        <Badge color="primary" className="text-uppercase">
          {icon}
        </Badge>
      )
  }
  // <div className="site-footer">
  // </div>
}

export default Icons

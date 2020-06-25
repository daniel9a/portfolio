import React from "react"
import { Badge } from "reactstrap"

const Icons = ({ icon }) => {
  console.log("I am here " + icon)
  switch (icon) {
    case "bootstrap":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/bootstrap.png"
          title={icon}
        />
      )
    case "c":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/c-programming.png"
          title={icon}
        />
      )
    case "c++":
    case "cpp":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
          title={icon}
        />
      )
    case "css":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/css3.png"
          title={icon}
        />
      )
    case "django":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/django.png"
          title={icon}
        />
      )
    case "git":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/git.png"
          title={icon}
        />
      )
    case "github":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/github--v1.png"
          title={icon}
        />
      )
    case "html":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/html-5.png"
          title={icon}
        />
      )
    case "javascript":
    case "js":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/javascript.png"
          title={icon}
        />
      )
    case "jira":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/jira.png"
          title={icon}
        />
      )
    case "link":
      return (
        <img
          src="https://img.icons8.com/fluent/48/000000/link.png"
          title={icon}
        />
      )
    case "linkedin":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          title={icon}
        />
      )
    case "mongodb":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/mongodb.png"
          title={icon}
        />
      )
    case "mssql":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/microsoft-sql-server.png"
          title={icon}
        />
      )
    case "nodejs":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/nodejs.png"
          title={icon}
        />
      )
    case "postgreesql":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/postgreesql.png"
          title={icon}
        />
      )
    case "python":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/python.png"
          title={icon}
        />
      )
    case "react":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/react-native.png"
          title={icon}
        />
      )
    case "sql":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/sql.png"
          title={icon}
        />
      )
    case "unity":
      return (
        <img
          src="https://img.icons8.com/ios-filled/48/000000/unity.png"
          title={icon}
        />
      )
    case "unreal":
      return (
        <img
          src="https://img.icons8.com/windows/48/000000/unreal-engine.png"
          title={icon}
        />
      )
    case "visual studio":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/visual-studio.png"
          title={icon}
        />
      )
    case "wordpress":
      return (
        <img
          src="https://img.icons8.com/color/48/000000/wordpress.png"
          title={icon}
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

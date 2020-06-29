import React, { Component } from "react"
import ParticlesComponent from "./ParticlesComponent"
import TransparentBox from "./TransparentBox"

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <ParticlesComponent />
        <TransparentBox />
      </div>
    )
  }
}

export default Landing

import React from "react"

export const RobotHead = () => (
  <div className="robot-head">
    <div className="left-eye"></div>
    <div className="right-eye"></div>
    <div className="left-ear"></div>
    <div className="right-ear"></div>
    <div className="mouth"></div>
  </div>
)

const RobotCube = () => (
  <div className="cube-container">
    <div className="cube">
      <div className="side" id="front">
        <RobotHead />
      </div>
      <div className="side" id="back">
        <RobotHead />
      </div>
      <div className="side" id="left">
        <RobotHead />
      </div>
      <div className="side" id="right">
        <RobotHead />
      </div>
    </div>
  </div>
)

export default RobotCube

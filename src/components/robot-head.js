import React from "react"

export const RobotHead = () => (
  <div class="robot-head">
    <div class="left-eye"></div>
    <div class="right-eye"></div>
    <div class="left-ear"></div>
    <div class="right-ear"></div>
    <div class="mouth"></div>
  </div>
)

const RobotCube = () => (
  <div class="cube-container">
    <div class="cube">
      <div class="side" id="front">
        <RobotHead />
      </div>
      <div class="side" id="back">
        <RobotHead />
      </div>
      <div class="side" id="left">
        <RobotHead />
      </div>
      <div class="side" id="right">
        <RobotHead />
      </div>
    </div>
  </div>
)

export default RobotCube

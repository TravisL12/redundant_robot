import React from 'react';
import { SpinningRobotCube } from '../../styles/spinningRobotCube';

const RobotHead = () => (
  <div className="robot-head">
    <div className="left-eye"></div>
    <div className="right-eye"></div>
    <div className="left-ear"></div>
    <div className="right-ear"></div>
    <div className="mouth"></div>
  </div>
);

export const RobotCube = () => (
  <SpinningRobotCube>
    <div className="cube-container">
      <div className="cube">
        <div className="side front">
          <RobotHead />
        </div>
        <div className="side back">
          <RobotHead />
        </div>
        <div className="side left">
          <RobotHead />
        </div>
        <div className="side right">
          <RobotHead />
        </div>
      </div>
    </div>
  </SpinningRobotCube>
);

export default RobotHead;

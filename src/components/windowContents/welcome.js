import React from "react";
import styled from "styled-components";

import { RobotHead } from "../robot-head";
import { buildRobot } from "../../styles/build_robot_mixin";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  ${buildRobot(200)}
`;

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <RobotHead />
      <h1>Redundant Robot</h1>
    </WelcomeWrapper>
  );
};

export default Welcome;

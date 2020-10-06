import React from 'react';
import styled from 'styled-components';

import { RobotHead } from '../robot-head';
import { buildRobot } from '../../styles/robotMixin';

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgb(209, 153, 254);
  background: linear-gradient(
    336deg,
    rgba(209, 153, 254, 1) 0%,
    rgba(76, 201, 255, 1) 44%,
    rgba(206, 247, 255, 1) 100%
  );
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

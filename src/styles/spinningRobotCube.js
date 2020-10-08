import styled from 'styled-components';
import { getPx } from '../components/utilities';
import { buildRobot } from './robotMixin';
import { color3, color4, color5 } from './variables';

const cubeSize = 65;
const cubeTransform = cubeSize / 2;
const robotSize = cubeSize * 0.5;

// Spin and then return to 0
export const SpinningRobotCube = styled.div`
  @keyframes spin {
    0%,
    10% {
      transform: rotateY(0);
    }

    20% {
      transform: rotateY(95deg);
    }
    21% {
      transform: rotateY(85deg);
    }
    22% {
      transform: rotateY(93deg);
    }
    23% {
      transform: rotateY(87deg);
    }
    25%,
    28% {
      transform: rotateY(90deg);
    }

    38% {
      transform: rotateY(185deg);
    }
    39% {
      transform: rotateY(175deg);
    }
    40% {
      transform: rotateY(183deg);
    }
    41% {
      transform: rotateY(177deg);
    }
    43%,
    46% {
      transform: rotateY(180deg);
    }

    56% {
      transform: rotateY(275deg);
    }
    57% {
      transform: rotateY(265deg);
    }
    58% {
      transform: rotateY(273deg);
    }
    59% {
      transform: rotateY(267deg);
    }
    61%,
    64% {
      transform: rotateY(270deg);
    }

    74%,
    100% {
      transform: rotateY(0deg);
    }
  }

  .cube-container {
    display: inline-block;
    vertical-align: top;
    perspective: 1100px;
    perspective-origin: 50% 100px;

    .cube {
      position: relative;
      width: ${getPx(cubeSize)};
      margin: 0 auto;
      transform-style: preserve-3d;

      animation: spin 5s infinite linear;
      animation-timing-function: cubic-bezier(0.39, -0.34, 0.52, 1.5);
      animation-iteration-count: 5;

      .side {
        position: absolute;
        width: ${getPx(cubeSize)};
        height: ${getPx(cubeSize)};
        background: gray;
        box-sizing: border-box;
        border: 4px solid white;

        box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.8),
          inset 0 2px 0 rgba(255, 255, 255, 0.5),
          inset 0 -1px 0 rgba(0, 0, 0, 0.4);

        p {
          @include catamaran-font(400);
          margin: 0;
          margin-top: 4px;
        }
      }
    }
  }

  .side.front {
    transform: translateZ(${getPx(cubeTransform)});
    ${buildRobot(robotSize, color5)};
  }

  .side.left {
    transform: rotateY(270deg) translateX(-${getPx(cubeTransform)});
    transform-origin: center left;
    ${buildRobot(robotSize, color3)};
    .robot-head {
      .mouth:after {
        border-color: blue;
        transform: rotateZ(-13deg);
      }
    }
  }

  .side.back {
    transform: translateZ(-${getPx(cubeTransform)}) rotateY(180deg);
    ${buildRobot(robotSize, color4)};
    .robot-head {
      .mouth:after {
        border-color: lightseagreen;
      }
    }
  }

  .side.right {
    transform: rotateY(-270deg) translateX(${getPx(cubeTransform)});
    transform-origin: top right;
    ${buildRobot(robotSize, color5)};
    .robot-head {
      .mouth:after {
        border-color: green;
        transform: rotateZ(13deg);
      }
    }
  }
`;

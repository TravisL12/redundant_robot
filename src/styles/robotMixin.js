import { getPx, getPct } from '../components/utilities';

export function buildRobot(headHeight = 60, robotColor = 'lightblue') {
  const headMargin = headHeight * 0.4;
  const eyeSideDistance = 20;
  const eyeTopDistance = 20;
  const earThickness = getPx(headHeight * 0.2);
  const lipThickness = getPx(headHeight * 0.01);

  const eye = `
    position: absolute;
    background: yellow;
    border: 1px solid gold;
    top: ${getPct(eyeTopDistance)};
    width: 20%;
    height: 23%;
    border-radius: 50%;
  `;

  const ear = `
    position: absolute;
    height: 0;
    width: 0;
    top: 30%;
    border-top: ${earThickness} solid transparent;
    border-bottom: ${earThickness} solid transparent;
  `;

  return `
  .robot-head {
    position: relative;
    background: radial-gradient(white, ${robotColor} 75%);
    width: ${getPx(headHeight * 1.14)};
    height: ${getPx(headHeight)};
    border-radius: 8% 8% 3% 3%;
    margin: ${getPx(headMargin)} auto 0;

    .left-ear {
      ${ear}
      border-left: ${earThickness} solid transparent;
      border-right: ${earThickness} solid ${robotColor};
      left: calc(-${earThickness} * 2);
    }
    .right-ear {
      ${ear}
      border-right: ${earThickness} solid transparent;
      border-left: ${earThickness} solid ${robotColor};
      right: calc(-${earThickness} * 2);
    }
    .left-eye {
      ${eye}
      left: ${getPct(eyeSideDistance)};
    }
    .right-eye {
      ${eye}
      right: ${getPct(eyeSideDistance)};
    }
    .mouth {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 25%;
      text-align: center;
      &:after {
        content: "";
        display: inline-block;
        border-top: ${lipThickness} solid red;
        width: 35%;
        height: 210%;
      }
    }
  }`;
}

import styled from "styled-components";
import { buildRobot } from "./robotMixin";

import { color1, headerHeight, fontColor } from "./variables";

export const AppContainer = styled.div`
  position: relative;
  font-size: 1.8rem;
  padding: ${headerHeight + 3}rem 20px 0;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 800px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const Container = styled.div`
  height: 100vh;
  font-weight: 400;
  color: ${fontColor};

  a {
    color: ${fontColor};
    text-decoration: none;
    display: inline-block;
    line-height: 1.5rem;
    transition: 0.15s all linear;
    border-bottom: 1px solid;
    &:hover {
      color: ${color1};
      border-width: 3px;
    }
  }

  .logo {
    text-align: center;
    h1 {
      display: inline-block;
      font-size: 11rem;
      line-height: 13.5rem;
      margin: 0;
      margin-left: 50px;
      text-shadow: -4px -4px 4px #e8e8e8, 2px 2px 2px #bcbcbc,
        4px 4px 4px #9c9c9c;
    }
  }

  .background-robot {
    position: fixed;
    margin: 30rem auto;
    width: 100%;
    opacity: 0.3;
    ${buildRobot(250)}
  }

  .home-content {
    .demo-projects {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;

      .project {
        display: grid;
        grid-template-columns: 100px 1fr;
        grid-template-rows: 30px 1fr;
        grid-column-gap: 20px;

        .project__title {
          display: flex;
          align-items: center;
          gap: 10px;

          h4 {
            margin: 0;
            text-transform: uppercase;
            grid-row: 1;
            grid-column: 2;
          }

          .additional-links {
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }

        .description {
          grid-row: 2;
          grid-column: 2;
          flex: 1;

          p {
            margin: 0;
            font-size: 1.6rem;
          }

          ul {
            display: flex;
            gap: 20px;
          }
        }

        .link {
          grid-column: 1;
          grid-row: 1 / span 2;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          a {
            border: none;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    .background-robot {
      display: none;
    }
    .home-content {
      .demo-projects {
        grid-template-columns: 1fr;

        .demo-stuff__title {
          grid-column: 1 / span 2;
          grid-row: 1;
        }

        .link {
          align-items: flex-start;
          padding-top: 5px;
          grid-column: 1;
          grid-row: 2;
        }
      }
    }
  }
`;

import styled from 'styled-components';
import { buildRobot } from './robotMixin';

import { color1, headerHeight, fontColor } from './variables';

export const AppContainer = styled.div`
  position: relative;
  font-size: 1.8rem;
  padding: 2rem 0;
  padding-top: ${headerHeight + 3}rem;
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Container = styled.div`
  height: 100vh;
  font-weight: 400;
  color: ${fontColor};

  a {
    color: ${fontColor};
    text-decoration: none;
    display: inline-block;
    border-bottom: 1px solid;
    line-height: 1.5rem;
    transition: 0.15s all linear;
    &:hover {
      color: ${color1};
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
    .demo-stuff {
      display: grid;
      grid-template-columns: 100px 1fr;
      grid-template-rows: 30px 1fr;
      grid-column-gap: 20px;
      margin-bottom: 20px;

      a {
        border-bottom: none;
      }

      h4 {
        margin: 0;
        text-transform: uppercase;
        grid-row: 1;
        grid-column: 2;
      }

      .description {
        grid-row: 2;
        grid-column: 2;
        flex: 1;

        p {
          margin: 0;
          font-size: 1.6rem;
        }
      }

      .link {
        grid-column: 1;
        grid-row: 1 / span 2;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .container {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    .home-content {
      .demo-stuff {
        grid-template-columns: 80px 1fr;

        h4 {
          grid-column: 1 / span 2;
        }

        .link {
          align-items: flex-start;
          padding-top: 5px;
          grid-column: 1;
          grid-row: 2;
        }
      }
    }

    .header {
      height: 15rem;

      .header-container {
        justify-content: space-evenly;
        flex-direction: column;

        .cube-container {
          display: none;
        }

        .home-title {
          margin: 0;
        }
      }
    }
  }
`;

import styled from 'styled-components';

const black = '#4a4a4a';
const color1 = '#56a3a6'; // cadet blue
const color2 = '#778e6f'; // camoflage green
const color3 = '#a6eab1'; // light green/yellow
const color4 = '#d4eac8'; // tea green
const color5 = '#c0d8e0'; // light blue/purple
const color6 = '#d80b0b'; // red title
const headerHeight = '10rem';
const fontColor = black;

export const AppContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }

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

  @mixin catamaran-font($weight: 900) {
    font-family: 'Catamaran', 'Helvetica neue', sans-serif;
    font-weight: $weight;
  }

  @import 'build_robot_mixin';
  @import 'spinning_robot_cube';
  @import 'grid';
  @import 'header';
  @import 'sheepshaver';
  @import 'resume';

  body {
    margin: 0;
    background: ${color5};
    @include catamaran-font(400);
    color: ${fontColor};
    transition: 3s linear background-color;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      text-decoration: none;
    }
  }

  .logo {
    text-align: center;
    h1 {
      display: inline-block;
      @include catamaran-font;
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
    z-index: -1;
    opacity: 0.3;
    @include build-robot(250px, ${color1});
  }

  .container {
    position: relative;
    font-size: 1.8rem;
    padding: 2rem 0;
    padding-top: ${headerHeight} + 3rem;
    min-height: 100vh;
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

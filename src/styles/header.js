import styled from 'styled-components';

export const HeaderContainer = styled.div`
  .header {
    position: fixed;
    display: flex;
    top: 0;
    height: $header-height;
    width: 100%;
    z-index: 2000;
    @include catamaran-font(400);
    font-size: 1.6rem;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.3);

    .header-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .social-icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 350px;

        li {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;

          &:hover {
            span,
            img {
              opacity: 1;
            }
          }

          a {
            border: none;
          }

          span,
          img {
            transition: 0.1s linear opacity;
          }

          span {
            position: absolute;
            font-size: 1.4rem;
            top: 35px;
            opacity: 0;
            color: $black;
          }

          img {
            width: 3.5rem;
            transition: 0.2s all linear;
            opacity: 0.8;
          }
        }
      }

      .home-title {
        display: inline-block;
        margin-left: 2rem;
        a {
          border: 0;
        }
        h1 {
          margin: 0;
          color: $black;
          letter-spacing: -0.12rem;
          line-height: 3rem;
        }
        h1.header-accent-color {
          color: $color-6;
          letter-spacing: 2rem;
        }
      }
    }
  }
`;

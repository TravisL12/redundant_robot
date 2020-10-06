export const DesktopContainer = styled.div`
  .app-container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #555;
    padding: 2px;
    box-sizing: border-box;
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

  .welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    @include build-robot(200px);
  }

  .background-robot {
    opacity: 0.3;
    @include build-robot(300px, $color-1);
  }

  .window {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    resize: both;
    overflow: scroll;
    background: #eee;
    box-shadow: -2px 2px 20px 5px $transparent-black;
    border-radius: $desktop-border-radius;

    &.active .window-title-bar {
      background: #aaa;
    }

    .window-title-bar {
      position: relative;
      text-align: center;
      background: #ddd;
      padding: 6px 0;
    }

    .title {
      font-weight: 800;
      font-size: 14px;
    }

    .window-buttons {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;

      button {
        height: 100%;
        border: none;
        background: none;
      }
    }

    .window-body {
      flex: 1;
      overflow: scroll;
    }
  }

  .menu-bar {
    font-size: 1.4rem;
    background: white;
    padding: 0 10px;
    border-top-left-radius: $desktop-border-radius;
    border-top-right-radius: $desktop-border-radius;

    .menu-item {
      box-sizing: border-box;
    }

    .menu-title {
      display: block;
      position: relative;
      padding: 3px 12px;
    }

    & > .main-menu {
      display: flex;
      z-index: 2;

      &.show > .menu-item:hover {
        .menu-title {
          background: #eee;
        }

        & > .sub-menu {
          display: block;
        }
      }

      & > .menu-item {
        position: relative;
        z-index: 1;

        & > .sub-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 100%;
          box-shadow: -2px 2px 12px 0px $transparent-black;

          .menu-item {
            cursor: pointer;
            background: rgba(235, 239, 241, 0.95);
            width: 100%;
            white-space: nowrap;
            padding: 3px 20px;

            &:hover {
              background: $color-5;
            }

            &:last-child {
              border-bottom-left-radius: $desktop-border-radius;
              border-bottom-right-radius: $desktop-border-radius;
            }
          }
        }
      }
    }
  }
`;

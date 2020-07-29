import React from "react";
import Draggable from "react-draggable";

const DEFAULT_POSITION = 50;

const DesktopWindow = ({ window, select, isActive, close }) => {
  const { id, sort, title } = window;
  const defaultPosition = DEFAULT_POSITION * (id + 1);

  return (
    <Draggable
      handle=".window-title-bar"
      bounds="parent"
      defaultPosition={{
        x: defaultPosition,
        y: defaultPosition,
      }}
    >
      <div
        className={`window ${isActive ? "active" : ""}`}
        onClick={() => select(id)}
        role="heading"
        aria-hidden="true"
        style={{ zIndex: sort }}
      >
        <div className="window-title-bar">
          <div className="window-buttons">
            <button
              className="close"
              onClick={event => {
                event.stopPropagation();
                close(id);
              }}
            >
              &#x2715;
            </button>
          </div>
          {title}
        </div>
        <div className="window-body"></div>
      </div>
    </Draggable>
  );
};

export default DesktopWindow;

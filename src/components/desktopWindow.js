import React from "react";
import Draggable from "react-draggable";

const DEFAULT_POSITION = 50;

function buildBody(options = {}) {
  if (options.url) {
    return (
      <iframe
        title="APOD Video"
        width="100%"
        height="100%"
        src={options.url}
        frameBorder="0"
      ></iframe>
    );
  }

  if (options.html) {
    return options.html;
  }

  if (options.component) {
    const Component = options.component;
    return <Component />;
  }
}

const DesktopWindow = ({ window, select, isActive, close }) => {
  const { id, sort, title } = window;
  const defaultPosition = DEFAULT_POSITION * (id + 1);

  const windowBody = buildBody(window.options);

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
        <div className="window-body">{windowBody}</div>
      </div>
    </Draggable>
  );
};

export default DesktopWindow;

import React from "react";
import Draggable from "react-draggable";

const DEFAULT_POSITION = 50;

function buildBody({ url, html, component } = {}) {
  if (url) {
    return (
      <iframe
        title="APOD Video"
        width="100%"
        height="100%"
        src={url}
        frameborder="no"
        loading="lazy"
        allowtransparency="true"
        allowfullscreen="true"
      ></iframe>
    );
  }

  if (html) {
    return html;
  }

  if (component) {
    const Component = component;
    return <Component />;
  }
}

const DesktopWindow = ({ window, select, isActive, close }) => {
  const { id, sort, title, options } = window;
  const defaultPosition = DEFAULT_POSITION * (id + 1);

  const windowBody = buildBody(options);
  let style = { zIndex: sort };
  if (options?.size) {
    style = { ...style, ...options.size };
  }

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
        style={style}
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

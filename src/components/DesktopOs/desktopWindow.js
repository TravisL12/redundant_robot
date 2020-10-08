import React from "react";
import Draggable from "react-draggable";
import { IFRAME_TYPE, COMPONENT_TYPE } from "./windowContents";

const DEFAULT_POSITION = 50;

function buildBody({ type, content } = {}) {
  switch (type) {
    case IFRAME_TYPE:
      return (
        <iframe
          title={content.name}
          width="100%"
          height="100%"
          src={content.url}
          frameBorder="no"
          loading="lazy"
          allowtransparency="true"
          allowFullScreen="true"
        ></iframe>
      );
    case COMPONENT_TYPE:
      const Component = content.component;
      const props = content.props || {};
      return <Component {...props} />;
    default:
      return null;
  }
}

const DesktopWindow = ({ window, select, isActive, close }) => {
  const { id, sort, title, content } = window;
  const defaultPosition = DEFAULT_POSITION * (id + 1);

  const windowBody = buildBody(window);
  let style = { zIndex: sort };
  if (content?.size) {
    style = { ...style, ...content.size };
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
          <span className="title">{title}</span>
        </div>
        <div className="window-body">{windowBody}</div>
      </div>
    </Draggable>
  );
};

export default DesktopWindow;

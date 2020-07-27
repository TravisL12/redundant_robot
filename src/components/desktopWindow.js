import React from "react";
import Draggable from "react-draggable";

const DEFAULT_POSITION = 50;

const DesktopWindow = ({ title, select, order, id, isActive }) => {
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
        style={{ zIndex: order }}
      >
        <div className="window-title-bar">{title}</div>
        <div className="window-body"></div>
      </div>
    </Draggable>
  );
};

export default DesktopWindow;

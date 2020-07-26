import React from "react";
import Draggable from "react-draggable";

const DesktopWindow = ({ position, title, select, order, id, isActive }) => {
  return (
    <Draggable
      handle=".window-title-bar"
      bounds="parent"
      defaultPosition={position}
    >
      <div
        className={`window ${isActive ? "active" : ""}`}
        onClick={() => select(id)}
        style={{ zIndex: order }}
      >
        <div className="window-title-bar">{title}</div>
        <div className="window-body"></div>
      </div>
    </Draggable>
  );
};

export default DesktopWindow;

import React from "react";
import Draggable from "react-draggable";

const DesktopWindow = ({ position, title, select, id }) => {
  return (
    <Draggable
      handle=".window-title-bar"
      bounds="parent"
      defaultPosition={position}
    >
      <div className="window" onClick={() => select(id)}>
        <div className="window-title-bar">{title}</div>
        <div className="window-body"></div>
      </div>
    </Draggable>
  );
};

export default DesktopWindow;

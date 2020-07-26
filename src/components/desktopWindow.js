import React from "react";
import Draggable from "react-draggable";

const DesktopWindow = () => {
  return (
    <Draggable handle=".window-title-bar">
      <div className="window">
        <div className="window-title-bar">My Files</div>
        <div className="window-body"></div>
      </div>
    </Draggable>
  );
};

export default DesktopWindow;

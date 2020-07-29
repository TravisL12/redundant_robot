import React from "react";
import DesktopWindow from "./desktopWindow";

const Desktop = ({ windows, closeWindow, updateWindowOrder }) => {
  return (
    <div className="desktop">
      {windows.map(window => (
        <DesktopWindow
          key={`window-${window.id}`}
          window={window}
          isActive={window.sort === windows.length - 1}
          select={updateWindowOrder}
          close={closeWindow}
        />
      ))}
    </div>
  );
};

export default Desktop;

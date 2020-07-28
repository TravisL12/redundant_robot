import React from "react";
import DesktopWindow from "./desktopWindow";

const Desktop = ({ windows, closeWindow, updateWindowOrder }) => {
  return (
    <div className="desktop">
      {windows.map((window, idx) => (
        <DesktopWindow
          key={idx}
          id={idx}
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

import React, { useState } from "react";
import PropTypes from "prop-types";

import { MyThemeProvider } from "./MyThemeProvider";
import MenuBar from "./menu-bar";
import Desktop from "./desktop";
import "../styles/application.scss";
import { orderWindows } from "../utils/windowUtils";
import { welcome } from "./windowContents/";

const Layout = () => {
  const [windows, setWindows] = useState(orderWindows([welcome]));

  const openWindow = newWindow => {
    const updatedWindows = [...windows, newWindow];
    updateWindowOrder(updatedWindows.length - 1, updatedWindows);
  };

  const closeWindow = removeId => {
    const newWindows = windows.filter(({ id }) => id !== removeId);
    newWindows?.length === 0
      ? setWindows([])
      : updateWindowOrder(newWindows[newWindows.length - 1].id, newWindows);
  };

  const updateWindowOrder = (currentId, updatedWindows = null) => {
    let newWindows = orderWindows(updatedWindows || windows);
    const currentIndex = newWindows.findIndex(({ id }) => id === currentId);
    newWindows[currentIndex].sort = newWindows.length - 1;

    newWindows = newWindows.map((window, idx) => {
      return window.sort < newWindows[currentIndex].sort || currentIndex === idx
        ? window
        : { ...window, sort: window.sort - 1 };
    });

    setWindows(newWindows);
  };

  return (
    <MyThemeProvider>
      <div className="app-container">
        <MenuBar openWindow={openWindow} />
        <Desktop
          windows={windows}
          updateWindowOrder={updateWindowOrder}
          closeWindow={closeWindow}
        />
      </div>
    </MyThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

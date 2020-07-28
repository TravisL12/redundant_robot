import React, { useState } from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";

import MenuBar from "./menu-bar";
import Desktop from "./desktop";
import "../styles/application.scss";

// Slowly change background color of site
const bgColors = ["#C0D8E0", "#C7CCE5", "#FFF4D9", "#FFEDD9"];
let colorIdx = bgColors.length;
setInterval(() => {
  document.body.style.backgroundColor = bgColors[colorIdx % bgColors.length];
  colorIdx++;
}, 8000);

const defaultWindows = [
  { title: "Home" },
  { title: "Pictures" },
  { title: "Projects" },
  { title: "Demos" },
];

function buildOrder(windows) {
  return windows.map((window, idx) => ({
    ...window,
    sort: window.sort || idx,
  }));
}

const Layout = () => {
  const [windows, setWindows] = useState(buildOrder(defaultWindows));

  const openWindow = newWindow => {
    const updatedWindows = [...windows, { ...newWindow, sort: windows.length }];
    updateWindowOrder(updatedWindows.length - 1, updatedWindows);
  };

  const closeWindow = id => {
    const newWindows = [...windows];
    newWindows.splice(id, 1);
    updateWindowOrder(newWindows.length - 1, newWindows);
  };

  const updateWindowOrder = (currentId, updatedWindows = null) => {
    let newWindows = buildOrder(updatedWindows || windows);
    console.log(newWindows, "newWindows");
    newWindows = newWindows.map((window, idx) => {
      if (idx === currentId) {
        return { ...window, sort: newWindows.length - 1 };
      }

      return window.sort < newWindows[currentId].sort
        ? window
        : { ...window, sort: window.sort - 1 };
    });

    setWindows(newWindows);
  };

  return (
    <div className="app-container">
      <MenuBar openWindow={openWindow} />
      <Desktop
        windows={windows}
        updateWindowOrder={updateWindowOrder}
        closeWindow={closeWindow}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

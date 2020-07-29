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
  { title: "1 Home" },
  { title: "2 Pictures" },
  { title: "3 Projects" },
  { title: "4 Demos" },
];

function findWindowId(windows, nextId) {
  const ids = windows.map(({ id }) => id).sort();
  if (!ids.includes(nextId)) {
    return nextId;
  }
  for (let i = 0; i < ids.length; i++) {
    if (!ids.includes(ids[i] + 1)) {
      return ids[i] + 1;
    }
  }
  return ids[ids.length - 1] + 1;
}

function orderWindows(windows) {
  return windows.reduce((acc, window, idx) => {
    const newId = window.hasOwnProperty("id")
      ? window.id
      : findWindowId([...windows, ...acc], idx);
    acc.push({
      ...window,
      id: newId,
      sort: window.sort || idx,
    });
    return acc;
  }, []);
}

const Layout = () => {
  const [windows, setWindows] = useState(orderWindows(defaultWindows));

  const openWindow = newWindow => {
    const updatedWindows = [...windows, { ...newWindow, sort: windows.length }];
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

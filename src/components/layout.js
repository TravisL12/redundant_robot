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

const Layout = ({ children }) => {
  const [windows, setWindows] = useState(defaultWindows);
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  const openWindow = newWindow => setWindows([...windows, newWindow]);

  return (
    <div className="app-container">
      <MenuBar openWindow={openWindow} />
      <Desktop windows={windows} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

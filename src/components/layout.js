import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import MenuBar from "./menu-bar";
import Desktop from "./desktop";
import "../styles/application.scss";
import { RobotHead } from "./robot-head";

// Slowly change background color of site
const bgColors = ["#C0D8E0", "#C7CCE5", "#FFF4D9", "#FFEDD9"];
let colorIdx = bgColors.length;
setInterval(() => {
  document.body.style.backgroundColor = bgColors[colorIdx % bgColors.length];
  colorIdx++;
}, 8000);

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="app-container">
      <MenuBar />
      <Desktop />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

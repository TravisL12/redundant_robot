import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
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
    <>
      <div className="background-robot">
        <RobotHead />
      </div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <div className="container">{children}</div>
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

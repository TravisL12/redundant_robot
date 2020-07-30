import React from "react";

import { getCodePens } from "../../utils/codepens";
import Welcome from "./welcome";

const welcome = {
  title: "Welcome to Redundant Robot",
  options: { component: Welcome },
};
const projects = { title: "Projects" };
const iFrame = {
  title: "iFrame",
  options: {
    url: getCodePens()[2].url,
    size: { width: "800px", height: "600px" },
  },
};
const htmlExample = {
  title: "HTML Example",
  options: {
    html: (
      <div style={{ width: "100%", height: "100%", background: "red" }}>
        <h1 style={{ margin: 0 }}>Look at me! I'm HTML markup</h1>
      </div>
    ),
  },
};

export { welcome, projects, iFrame, htmlExample };

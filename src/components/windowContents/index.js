import { getCodePens } from "../../utils/codepens";
import Welcome from "./welcome";

export const IFRAME_TYPE = "iframe";
export const COMPONENT_TYPE = "component";

const welcome = {
  title: "Welcome to Redundant Robot",
  type: COMPONENT_TYPE,
  content: { component: Welcome },
};

const bouncingBalls = {
  title: getCodePens()[2].name,
  type: IFRAME_TYPE,
  content: {
    ...getCodePens()[2],
    size: { width: "800px", height: "600px" },
  },
};

export { welcome, bouncingBalls };

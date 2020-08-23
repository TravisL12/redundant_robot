import { getCodePens } from "../../utils/codepens";
import Welcome from "./Welcome";
import SystemPreferences from "./SystemPreferences";
import Apod from "./Apod";

export const IFRAME_TYPE = "iframe";
export const COMPONENT_TYPE = "component";

const welcome = {
  title: "Welcome to Redundant Robot",
  type: COMPONENT_TYPE,
  content: { component: Welcome, size: { width: "640px", height: "400px" } },
};

const apod = {
  title: "Astronomy Picture of the Day",
  type: COMPONENT_TYPE,
  content: { component: Apod, size: { width: "800px", height: "600px" } },
};

const bouncingBalls = {
  title: getCodePens()[2].name,
  type: IFRAME_TYPE,
  content: {
    ...getCodePens()[2],
    size: { width: "800px", height: "600px" },
  },
};

const systemPreferences = {
  title: "System Preferences",
  type: COMPONENT_TYPE,
  content: { component: SystemPreferences },
};

export { welcome, apod, bouncingBalls, systemPreferences };

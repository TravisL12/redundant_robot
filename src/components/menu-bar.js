import React, { useState } from "react";

import {
  welcome,
  bouncingBalls,
  systemPreferences,
  apod,
} from "./windowContents";
import { getCodePenWindows } from "../utils/codepens";

const menuItems = [
  {
    title: "File",
    items: [bouncingBalls],
  },
  {
    title: "Edit",
    items: [welcome, apod],
  },
  {
    title: "View",
    items: [welcome, bouncingBalls],
  },
  { title: "Window", items: [welcome, bouncingBalls] },
  { title: "Special", items: [welcome, systemPreferences] },
  { title: "Code Pens", items: getCodePenWindows() },
];

const MenuBar = ({ openWindow }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShow = () => setShowMenu(!showMenu);

  return (
    <div className="menu-bar">
      <ul
        className={`main-menu ${showMenu ? "show" : ""}`}
        onClick={toggleShow}
      >
        {menuItems.map((menu, idx) => (
          <li key={idx} className="menu-item">
            <span className="menu-title">{menu.title}</span>
            <ul className="sub-menu">
              {menu.items.map((item, jdx) => {
                return (
                  <li
                    key={jdx}
                    className="menu-item"
                    onClick={() => openWindow(item)}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;

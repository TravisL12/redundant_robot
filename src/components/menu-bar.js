import React, { useState } from "react";
import { welcome, projects, iFrame, htmlExample } from "./windowContents";

const MenuBar = ({ openWindow }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShow = () => setShowMenu(!showMenu);

  const menuItems = [
    {
      title: "File",
      items: [htmlExample, iFrame],
    },
    {
      title: "Edit",
      items: [htmlExample, welcome],
    },
    {
      title: "View",
      items: [welcome, iFrame, projects],
    },
    { title: "Window", items: [welcome, iFrame, projects] },
    { title: "Special", items: [welcome, iFrame, projects] },
  ];

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

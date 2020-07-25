import React from "react";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul className="main-menu">
        <li className="menu-item">
          <span>File</span>
          <ul className="sub-menu">
            <li className="menu-item">Item</li>
            <li className="menu-item">Item 2</li>
          </ul>
        </li>
        <li className="menu-item">
          <span>Edit</span>
          <ul className="sub-menu">
            <li className="menu-item">Item</li>
            <li className="menu-item">Item 2</li>
          </ul>
        </li>
        <li className="menu-item">
          <span>View</span>
          <ul className="sub-menu">
            <li className="menu-item">Item</li>
            <li className="menu-item">Item 2</li>
          </ul>
        </li>
        <li className="menu-item">
          <span>Window</span>
          <ul className="sub-menu">
            <li className="menu-item">Item</li>
            <li className="menu-item">Item 2</li>
          </ul>
        </li>
        <li className="menu-item">
          <span>Special</span>
          <ul className="sub-menu">
            <li className="menu-item">Item</li>
            <li className="menu-item">Item 2</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;

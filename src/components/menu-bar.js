import React from "react";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul>
        <li>
          <span>File</span>
          <ul>
            <li>Item</li>
            <li>Item 2</li>
          </ul>
        </li>
        <li>
          <span>Edit</span>
          <ul>
            <li>Item</li>
            <li>Item 2</li>
          </ul>
        </li>
        <li>
          <span>View</span>
          <ul>
            <li>Item</li>
            <li>Item 2</li>
          </ul>
        </li>
        <li>
          <span>Window</span>
          <ul>
            <li>Item</li>
            <li>Item 2</li>
          </ul>
        </li>
        <li>
          <span>Special</span>
          <ul>
            <li>Item</li>
            <li>Item 2</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;

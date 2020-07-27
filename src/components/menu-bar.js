import React from "react";

const MenuBar = ({ openWindow }) => {
  const menuItems = [
    { title: "File", items: ["File Item", "File Item 2"] },
    { title: "Edit", items: ["Edit Item", "Edit Item 2"] },
    {
      title: "View",
      items: [
        "View Item",
        "View Item 2 that is really long",
        "View Item 3",
        "View Item 4",
      ],
    },
    { title: "Window", items: ["Window Item", "Window Item 2"] },
    { title: "Special", items: ["Special Item", "Special Item 2"] },
  ];

  return (
    <div className="menu-bar">
      <ul className="main-menu">
        {menuItems.map((menu, idx) => (
          <li key={idx} className="menu-item">
            <span>{menu.title}</span>
            <ul className="sub-menu">
              {menu.items.map((item, jdx) => (
                <li
                  key={jdx}
                  className="menu-item"
                  onClick={() => openWindow({ title: `${item} blah` })}
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;

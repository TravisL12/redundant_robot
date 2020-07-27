import React, { useState } from "react";
import DesktopWindow from "./desktopWindow";

const windows = [
  { title: "Home", position: { x: 50, y: 50 } },
  { title: "Pictures", position: { x: 100, y: 100 } },
  { title: "Projects", position: { x: 150, y: 150 } },
  { title: "Demos", position: { x: 200, y: 200 } },
];

const Desktop = () => {
  const [order, setOrder] = useState(
    [...Array(windows.length).keys()].map(i => i + 1)
  );

  const updateWindowOrder = currentId => {
    const previous = order[currentId];
    const newOrder = order.map((orderVal, windowIdx) => {
      if (windowIdx === currentId) {
        return windows.length;
      }

      return orderVal < previous ? orderVal : orderVal - 1;
    });

    setOrder(newOrder);
  };

  return (
    <div className="desktop">
      {windows.map(({ title, position }, idx) => (
        <DesktopWindow
          key={idx}
          id={idx}
          order={order[idx]}
          isActive={order[idx] === windows.length}
          select={updateWindowOrder}
          title={title}
          position={position}
        />
      ))}
    </div>
  );
};

export default Desktop;

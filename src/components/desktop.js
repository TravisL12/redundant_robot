import React, { useState } from "react";
import DesktopWindow from "./desktopWindow";

const windows = [
  { title: "Home", position: { x: 50, y: 50 } },
  { title: "Pictures", position: { x: 100, y: 100 } },
  { title: "Projects", position: { x: 150, y: 150 } },
  { title: "Demos", position: { x: 200, y: 200 } },
];

const Desktop = () => {
  const [order, setOrder] = useState(windows);

  const updateWindowOrder = currentId => {
    // this needs to set the z-index, not the render order
    const latest = order[currentId];
    const newOrder = [...order];
    newOrder.splice(currentId, 1);
    setOrder([latest, ...newOrder]);
  };

  return (
    <div className="desktop">
      {order.map(({ title, position }, idx) => (
        <DesktopWindow
          key={idx}
          id={idx}
          select={updateWindowOrder}
          title={title}
          position={position}
        />
      ))}
    </div>
  );
};

export default Desktop;

import React, { useState, useEffect } from "react";
import DesktopWindow from "./desktopWindow";

function buildOrder(windows) {
  return [...Array(windows.length).keys()].map(i => i);
}

const Desktop = ({ windows }) => {
  const [order, setOrder] = useState(buildOrder(windows));

  useEffect(() => {
    updateWindowOrder(windows.length - 1);
  }, [windows, updateWindowOrder]);

  const updateWindowOrder = currentId => {
    // reset size of order array for any new windows added (from useEffect)
    let newOrder = buildOrder(windows);

    // map out previous `order` values to newOrder
    order.forEach((order, idx) => (newOrder[idx] = order));

    // Resort background windows
    newOrder = newOrder.map((orderVal, windowIdx) => {
      if (windowIdx === currentId) {
        return windows.length;
      }

      return orderVal < order[currentId] ? orderVal : orderVal - 1;
    });

    setOrder(newOrder);
  };

  return (
    <div className="desktop">
      {windows.map(({ title }, idx) => (
        <DesktopWindow
          key={idx}
          id={idx}
          order={order[idx]}
          isActive={order[idx] === windows.length}
          select={updateWindowOrder}
          title={title}
        />
      ))}
    </div>
  );
};

export default Desktop;

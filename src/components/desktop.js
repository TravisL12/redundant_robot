import React from "react";
import DesktopWindow from "./desktopWindow";

import styled from "styled-components";

const DesktopWrapper = styled.div`
  position: relative;
  z-index: 0;
  flex: 1;
  background: ${({ theme }) => theme.color};
  border-bottom-left-radius: $desktop-border-radius;
  border-bottom-right-radius: $desktop-border-radius;
`;

const Desktop = ({ windows, closeWindow, updateWindowOrder }) => {
  return (
    <DesktopWrapper>
      {windows.map(window => (
        <DesktopWindow
          key={`window-${window.id}`}
          window={window}
          isActive={window.sort === windows.length - 1}
          select={updateWindowOrder}
          close={closeWindow}
        />
      ))}
    </DesktopWrapper>
  );
};

export default Desktop;

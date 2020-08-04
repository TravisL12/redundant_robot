import React, { useState } from "react";
import styled from "styled-components";

const PreferencesWrapper = styled.div`
  background-color: ${props => props.background || "white"};
  height: 100%;
  width: 100%;
`;

const ColorListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    height: 15px;
    width: 15px;
    border: 1px solid;
    background: ${({ color }) => color};
  }
`;

const ListItem = ({ color, setColor }) => {
  return (
    <ColorListItem color={color} onClick={() => setColor(color)}>
      <span></span>
      {color}
    </ColorListItem>
  );
};

const SystemPreferences = () => {
  const [color, setColor] = useState();

  return (
    <PreferencesWrapper background={color}>
      <ul>
        <ListItem color={"Red"} setColor={setColor} />
        <ListItem color={"Lightgreen"} setColor={setColor} />
        <ListItem color={"Lightblue"} setColor={setColor} />
      </ul>
    </PreferencesWrapper>
  );
};

export default SystemPreferences;

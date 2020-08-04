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
  padding: 5px;
  &:hover {
    color: white;
  }
  span {
    display: inline-block;
    margin-right: 5px;
    height: 30px;
    width: 30px;
    border: 1px solid black;
    background: ${({ color }) => color};
  }
`;

const ListItem = ({ color, setColor }) => (
  <ColorListItem color={color} onClick={() => setColor(color)}>
    <span></span>
    {color}
  </ColorListItem>
);

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

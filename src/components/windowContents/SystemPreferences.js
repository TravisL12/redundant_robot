import React from "react";
import styled from "styled-components";
import { useMyTheme } from "../layout";

const PreferencesWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ColorListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  &:hover {
    color: #aaa;
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

const ListItem = ({ color }) => {
  const { updateTheme } = useMyTheme();
  return (
    <ColorListItem color={color} onClick={() => updateTheme({ color })}>
      <span></span>
      {color}
    </ColorListItem>
  );
};

const SystemPreferences = () => {
  return (
    <PreferencesWrapper>
      <ul>
        <ListItem color={"red"} />
        <ListItem color={"lightgreen"} />
        <ListItem color={"lightblue"} />
      </ul>
    </PreferencesWrapper>
  );
};

export default SystemPreferences;

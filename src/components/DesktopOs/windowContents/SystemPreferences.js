import React, { useState } from "react";
import styled from "styled-components";
import { useMyTheme } from "../MyThemeProvider";

const PreferencesWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const PreferenceFile = styled.div`
  text-align: center;
  span {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid black;
  }
`;

const PreferencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  justify-items: center;
  grid-gap: 20px;
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

const BackgroundColor = () => {
  const { updateTheme } = useMyTheme();
  const colors = ["red", "lightgreen", "lightblue", "purple", "magenta"];

  return (
    <>
      <h3>Background Color</h3>
      <ul>
        {colors.map((color, idx) => (
          <ColorListItem
            key={idx}
            color={color}
            onClick={() => updateTheme({ color })}
          >
            <span></span>
            {color}
          </ColorListItem>
        ))}
      </ul>
    </>
  );
};

const SystemPreferences = () => {
  const [currentPref, setCurrentPref] = useState();

  const preferences = [
    { name: "Background", component: BackgroundColor },
    { name: "Date & Time", component: BackgroundColor },
    { name: "Displays", component: BackgroundColor },
    { name: "General", component: BackgroundColor },
  ];

  const iconGrid = (
    <PreferencesGrid>
      {preferences.map(({ name, component }, idx) => (
        <PreferenceFile key={idx}>
          <span onClick={() => setCurrentPref(component)} />
          {name}
        </PreferenceFile>
      ))}
    </PreferencesGrid>
  );

  return <PreferencesWrapper>{currentPref ?? iconGrid}</PreferencesWrapper>;
};

export default SystemPreferences;

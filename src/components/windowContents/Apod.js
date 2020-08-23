import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ApodWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  width: 100%;
  height: 100%;
`;

const ApodImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const APOD_API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "hPgI2kGa1jCxvfXjv6hq6hsYBQawAqvjMaZNs447";

const fetchApod = async () => {
  const apod = await fetch(`${APOD_API_URL}?api_key=${API_KEY}`);
  return apod.json();
};

const Apod = () => {
  const [apod, setApod] = useState();

  useEffect(() => {
    fetchApod().then(resp => {
      setApod(resp);
    });
  }, []);

  if (!apod) {
    return <div>Loading</div>;
  }

  return (
    <ApodWrapper>
      <div>
        <h1>{apod.title}</h1>
        <ApodImg src={apod.url} />
      </div>
    </ApodWrapper>
  );
};

export default Apod;

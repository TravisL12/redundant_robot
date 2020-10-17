import React from 'react';
import { Link } from 'react-router-dom';

import portfolioData from './portfolioData.json';
import PortfolioSite from './PortfolioSite';

const App = () => (
  <div className="home-content">
    <p>
      Redundant Robot is a little site I built that, for several years, has
      mainly been home to my SheepShaver tutorial. Since becoming a{' '}
      <Link to="/resume">web developer</Link> I like to hack away on some of my
      ideas and post them here for people to check out. Feel free to give a
      shout out on <a href="https://twitter.com/travisl12">twitter</a>.
    </p>

    {portfolioData.map((data) => {
      return <PortfolioSite {...data} />;
    })}
  </div>
);

export default App;

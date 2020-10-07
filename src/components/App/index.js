import React from 'react';
import { Link } from 'react-router-dom';
import { getAsset } from '../utilities';

function App() {
  return (
    <div className="home-content">
      <p>
        Redundant Robot{' '}
        <a
          href="https://github.com/travisl12"
          target="_blank"
          rel="noopener noreferrer"
        >
          is a little site I built
        </a>{' '}
        that, for several years, has mainly been home to my SheepShaver
        tutorial. Since becoming a <Link to="/resume">web developer</Link> I
        like to hack away on some of my ideas and post them here for people to
        check out. Feel free to give a shout out on{' '}
        <a href="https://twitter.com/travisl12">twitter</a>.
      </p>

      <div className="demo-stuff">
        <div className="link">
          <Link to="/sheepshaver">
            <img
              src={`${getAsset('/assets/sheepshaver_icon.png')}`}
              alt="SheepshaverIcon"
            />
          </Link>
        </div>

        <h4>
          <Link to="/sheepshaver">SheepShaver Tutorial</Link>
        </h4>
        <div className="description">
          <p>
            I wrote this Mac OS emulator tutorial in 2006 during a serious bout
            of graduate school procrastination. It offers up some ROMs that I
            have collected over the years and I do my best to help out people
            that who have questions.
          </p>
        </div>
      </div>

      <div className="demo-stuff">
        <div className="link">
          <img src={`${getAsset('/assets/apod.png')}`} alt="ApodImg" />
        </div>

        <h4>Astronomy Picture of the Day Extension</h4>
        <div className="description">
          <p>
            This is a Chrome/Firefox extension that replaces your new tab screen
            with a random APOD image. There are multiple key commands and
            buttons available for selecting another random image or to view
            todays picture. I am a big fan of all things outer space and I've
            had the APOD as my home page for years.
          </p>
          <p>
            Get it for:{' '}
            <a href="https://chrome.google.com/webstore/detail/apod-by-the-trav/aedpginojmhafbemcoelnppdcmlfjcdj">
              Chrome
            </a>{' '}
            or{' '}
            <a href="https://addons.mozilla.org/en-US/firefox/addon/apod-by-the-trav/">
              Firefox
            </a>
          </p>
        </div>
      </div>

      <div className="demo-stuff">
        <div className="link">
          <img src={`${getAsset('/assets/apod.png')}`} alt="ApodImg" />
        </div>
        <h4>Compare Colors</h4>
        <div className="description">
          <p>
            A tool I built to paste in a large collection of text that contains
            colors (browser colors, hex, or rgb) and then display any colors
            found in that text. The colors will be split into their hex, rgb,
            and hsl formats that can be copied on click. Also a sorting feature
            is available to sort the colors using two color sorting algorithms.
            The values will be sorted based on a compared colored entered in.
          </p>
          <p>
            Get it for:{' '}
            <a href="https://travisl12.github.io/compare_colors/">
              Compare Colors
            </a>
          </p>
        </div>
      </div>

      <div className="demo-stuff">
        <div className="link">
          <img src={`${getAsset('/assets/apod.png')}`} alt="ApodImg" />
        </div>
        <h4>Super Mega Baseball 3 Rosters</h4>
        <div className="description">
          <p>This is the data for the game Super Mega Baseball 3.</p>
          <p>
            Get it for:{' '}
            <a href="https://travisl12.github.io/super_mega_baseball_charts/">
              Super Mega Baseball Rosters
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

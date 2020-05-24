import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SheepshaverIcon from "../images/sheepshaver_icon.png"
import ApodImg from "../images/apod.png"
import TabImg from "../images/tab.png"
import PianoImg from "../images/piano.png"
import ClockImg from "../images/clock.png"

import "../styles/application.scss"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-content">
      <p>
        Redundant Robot{" "}
        <a href="https://github.com/travisl12" target="_blank" rel="noreferrer">
          is a little site I built
        </a>{" "}
        that, for several years, has mainly been home to my SheepShaver
        tutorial. Since becoming a <Link to="/resume">web developer</Link> I
        like to hack away on some of my ideas and post them here for people to
        check out. Feel free to give a shout out on{" "}
        <a href="https://twitter.com/travisl12">twitter</a>.
      </p>

      <div className="demo-stuff">
        <div className="link">
          <Link to="/sheepshaver">
            <img src={SheepshaverIcon} alt="SheepshaverIcon" />
          </Link>
        </div>
        <h4>SheepShaver Tutorial</h4>
        <div className="description">
          <p>
            I wrote this Mac OS emulator tutorial in 2008 during a serious bout
            of graduate school procrastination. It offers up some ROMs that I
            have collected over the years and I do my best to help out people
            that who have questions.
          </p>
        </div>
      </div>

      <div className="demo-stuff">
        <div className="link">
          <a href="https://chrome.google.com/webstore/detail/apod-by-the-trav/aedpginojmhafbemcoelnppdcmlfjcdj">
            <img src={ApodImg} alt="ApodImg" />
          </a>
        </div>
        <h4>Astronomy Picture of the Day (APOD) Chrome Extension</h4>
        <div className="description">
          <p>
            This is a Chrome extension that replaces your new tab screen with a
            random APOD image. There are multiple key commands and buttons
            available for selecting another random image or to view todays
            picture. I am a big fan of all things outer space and I've had the
            APOD as my home page for years.
          </p>
        </div>
      </div>

      <div className="demo-stuff">
        <div className="link">
          <a href="http://www.redundantrobot.com/tab_builder/">
            <img src={TabImg} alt="TabImg" />
          </a>
        </div>
        <h4>Build guitar tabs</h4>
        <div className="description">
          <p>
            I learned to play guitar using guitar tabs of popular songs but I
            was never inspired to write out songs in tablature due to having to
            format .txt files. I wrote this basic guitar tablature writer that
            allows quick entry of chords, notes and lyrics, then creates the
            .txt file for you.
          </p>
        </div>
      </div>

      <div className="demo-stuff">
        <div className="link">
          <a href="http://www.redundantrobot.com/key_iano/">
            <img src={PianoImg} alt="PianoImg" />
          </a>
        </div>
        <h4>Key-iano</h4>
        <div className="description">
          <p>
            A close friend of mine wanted to learn to play piano by mapping
            piano keys to the keyboard. So I built out this keyboard-piano
            (key-iano) that plays most notes of the middle range of a piano.
            Sort of an unfinished demo.
          </p>
        </div>
      </div>

      <div className="demo-stuff">
        <div className="link">
          <a href="http://www.redundantrobot.com/digital_clock/">
            <img src={ClockImg} alt="ClockImg" />
          </a>
        </div>
        <h4>Digital Clock</h4>
        <div className="description">
          <p>
            This was a clock I made using only <tt>&lt;divs&gt;</tt> and CSS
            (with a little JS). The background changes color according to the
            hex color value it represents.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

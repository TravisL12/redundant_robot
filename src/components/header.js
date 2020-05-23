import { Link } from "gatsby"

import React from "react"

import GithubSocialMediaLogo from "../images/social/iconfinder_github_317712.svg"
import OnlineSocialMediaTwitter from "../images/social/iconfinder_twitter_317720.svg"
import OnlineSocialMediaLinkedIn from "../images/social/iconfinder_square-linkedin_317725.svg"
import CodePenIcon from "../images/social/codepen_logo.svg"
import ResumeIcon from "../images/social/resume_logo.svg"
import RobotCube from "./robot-head"

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header-container">
      <RobotCube />
      <div className="home-title">
        <Link to="/">
          <h1>REDUNDANT</h1>
          <h1 className="header-accent-color">ROBOT</h1>
        </Link>
      </div>
      <ul className="social-icons">
        <li>
          <a
            href="https://github.com/travisl12"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubSocialMediaLogo} alt="GithubSocialMediaLogo" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/travisl12"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={OnlineSocialMediaTwitter}
              alt="OnlineSocialMediaTwitter"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/travis-lawrence-b77400b8"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={OnlineSocialMediaLinkedIn}
              alt="OnlineSocialMediaLinkedIn"
            />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/travisl12"
            target="_blank"
            rel="noreferrer"
          >
            <img src={CodePenIcon} alt="CodePenIcon" />
          </a>
        </li>
        <li>
          <Link to="/resume">
            <img src={ResumeIcon} alt="ResumeIcon" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header

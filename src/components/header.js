import { Link } from "gatsby"

import React from "react"

import GithubSocialMediaLogo from "../images/social/iconfinder_github_317712.svg"
import OnlineSocialMediaTwitter from "../images/social/iconfinder_twitter_317720.svg"
import OnlineSocialMediaLinkedIn from "../images/social/iconfinder_square-linkedin_317725.svg"
import CodePenIcon from "../images/social/codepen_logo.svg"
import ResumeIcon from "../images/social/resume_logo.svg"
import RobotCube from "./robot-head"

const Header = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: GithubSocialMediaLogo,
      url: "https://github.com/travisl12",
    },
    {
      name: "Twitter",
      icon: OnlineSocialMediaTwitter,
      url: "https://www.twitter.com/travisl12",
    },
    {
      name: "LinkedIn",
      icon: OnlineSocialMediaLinkedIn,
      url: "https://www.linkedin.com/in/travis-lawrence-b77400b8",
    },
    { name: "Codepen", icon: CodePenIcon, url: "https://codepen.io/travisl12" },
  ]

  return (
    <div className="header">
      <div className="header-container">
        <div>
          <RobotCube />
          <div className="home-title">
            <Link to="/">
              <h1>REDUNDANT</h1>
              <h1 className="header-accent-color">ROBOT</h1>
            </Link>
          </div>
        </div>
        <ul className="social-icons">
          {socialLinks.map(({ url, icon, name }, idx) => (
            <li key={idx}>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={icon} alt={name} />
              </a>
              <span>{name}</span>
            </li>
          ))}

          <li>
            <Link to="/resume">
              <img src={ResumeIcon} alt="ResumeIcon" />
            </Link>
            <span>Resume</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

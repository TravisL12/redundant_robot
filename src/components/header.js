// import { Link } from "gatsby"
// import PropTypes from "prop-types"

import React from "react"

import GithubSocialMediaLogo from "../images/social/github_social_media_logo.svg"
import OnlineSocialMediaTwitter from "../images/social/online_social_media_twitter.svg"
import OnlineSocialMediaLinkedIn from "../images/social/online_social_media_linked_in.svg"
import EmailMailEnvelopeSendMessage from "../images/social/email_mail_envelope_send_message.svg"
import RobotCube from "./robot-head"

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header-container">
      <RobotCube />
      <div className="home-title">
        <a href="/index.html">
          <h1>REDUNDANT</h1>
          <h1 className="header-accent-color">ROBOT</h1>
        </a>
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
          <a href="mailto:travis.lawrence12@gmail.com">
            <img
              src={EmailMailEnvelopeSendMessage}
              alt="EmailMailEnvelopeSendMessage"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Header

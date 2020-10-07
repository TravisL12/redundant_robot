import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../../styles/header';
import { RobotCube } from '../RobotHead';
import { getAsset } from '../utilities';

const GithubSocialMediaLogo = getAsset(
  '/assets/social/iconfinder_github_317712.svg'
);
const OnlineSocialMediaTwitter = getAsset(
  '/assets/social/iconfinder_twitter_317720.svg'
);
const OnlineSocialMediaLinkedIn = getAsset(
  '/assets/social/iconfinder_square-linkedin_317725.svg'
);
const CodePenIcon = getAsset('/assets/social/codepen_logo.svg');
const ResumeIcon = getAsset('/assets/social/resume_logo.svg');

const Header = () => {
  const socialLinks = [
    {
      name: 'Github',
      icon: GithubSocialMediaLogo,
      url: 'https://github.com/travisl12',
    },
    {
      name: 'Twitter',
      icon: OnlineSocialMediaTwitter,
      url: 'https://www.twitter.com/travisl12',
    },
    {
      name: 'LinkedIn',
      icon: OnlineSocialMediaLinkedIn,
      url: 'https://www.linkedin.com/in/travis-lawrence-b77400b8',
    },
    { name: 'Codepen', icon: CodePenIcon, url: 'https://codepen.io/travisl12' },
  ];

  return (
    <HeaderContainer>
      <div className="header-container">
        <div style={{ display: 'flex' }}>
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
              <a href={url} target="_blank" rel="noopener noreferrer">
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
    </HeaderContainer>
  );
};

export default Header;

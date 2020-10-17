import React from 'react';
import { Link } from 'react-router-dom';
import { getAsset } from '../utilities';

const SiteLink = ({ isLocalLink, url, children }) => {
  if (!url) {
    return children;
  }

  return isLocalLink ? (
    <Link to={url}>{children}</Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const PortfolioSite = ({
  url,
  title,
  description,
  additionLinks,
  imageSrc,
  isLocalLink,
}) => {
  return (
    <div className="demo-stuff">
      <div className="link">
        <SiteLink isLocalLink={isLocalLink} url={url}>
          <img src={getAsset(`/assets/${imageSrc}`)} alt={title} />
        </SiteLink>
      </div>
      <h4>
        <SiteLink isLocalLink={isLocalLink} url={url}>
          {title}
        </SiteLink>
      </h4>
      <div className="description">
        <p>{description}</p>
        {additionLinks && (
          <ul>
            {additionLinks.map((link) => (
              <li>
                <SiteLink url={link.url}>{link.name}</SiteLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PortfolioSite;

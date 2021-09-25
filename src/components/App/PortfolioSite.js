import React from "react";
import { Link } from "react-router-dom";
import { getAsset } from "../utilities";

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
    <div className="project">
      <div className="link">
        <SiteLink isLocalLink={isLocalLink} url={url}>
          <img src={getAsset(`/assets/${imageSrc}`)} alt={title} />
        </SiteLink>
      </div>
      <div className="project__title">
        <h4>
          {additionLinks ? (
            title
          ) : (
            <SiteLink isLocalLink={isLocalLink} url={url}>
              {title}
            </SiteLink>
          )}
        </h4>
        {additionLinks && (
          <div className="additional-links">
            {additionLinks?.map((link) => (
              <div key={link.url}>
                <SiteLink url={link.url}>{link.name}</SiteLink>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioSite;

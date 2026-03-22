import React from 'react';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import socialLinks from '../../data/_SocialLinks';

/**
 * SocialLink Component
 * Individual social media link with accessibility features
 */
function SocialLink({ faIcon, alt, url, index }) {
  return (
    <li className={styles.socialLinkItem}>
      <a
        href={url}
        title={alt}
        aria-label={`Connect on ${alt}`}
        rel="noopener noreferrer"
        target={url.startsWith('mailto:') ? undefined : '_blank'}
        className={styles.socialLinkAnchor}
      >
        <FontAwesomeIcon
          icon={faIcon}
          size="2x"
          aria-hidden="false"
          aria-label={alt}
        />
      </a>
    </li>
  );
}

/**
 * SocialLinks Component
 * Displays all social media links in an accessible list
 */
function SocialLinks() {
  return (
    <nav className={styles.socialLinksNav} aria-label="Social media links">
      <style type="text/css">{dom.css()}</style>
      <ul className={styles.socialLinksList}>
        {socialLinks.map((props, idx) => (
          <SocialLink key={`social-${idx}`} {...props} index={idx} />
        ))}
      </ul>
    </nav>
  );
}

export default SocialLinks;

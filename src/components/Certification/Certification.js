import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './certification.module.css';
import Data from './CertificationsData.json';
import LazyImage from '@site/src/components/LazyImage';
import ErrorBoundary from '@site/src/components/ErrorBoundary';

/**
 * Get badge emoji for certification
 */
function getCertificationBadge(certName) {
  const name = certName.toLowerCase();
  
  if (name.includes('istqb')) return '✅';
  if (name.includes('scrum') || name.includes('csm')) return '🎯';
  if (name.includes('bdd') || name.includes('cucumber')) return '🧪';
  if (name.includes('selenium')) return '🤖';
  if (name.includes('api') || name.includes('rest')) return '🔌';
  if (name.includes('security') || name.includes('owasp')) return '🔒';
  if (name.includes('aws') || name.includes('cloud')) return '☁️';
  if (name.includes('git')) return '🌿';
  if (name.includes('jenkins') || name.includes('ci')) return '⚙️';
  if (name.includes('performance') || name.includes('jmeter')) return '⚡';
  if (name.includes('docker') || name.includes('container')) return '🐳';
  if (name.includes('jira')) return '📋';
  if (name.includes('appium') || name.includes('mobile')) return '📱';
  if (name.includes('leadership') || name.includes('management')) return '👥';
  
  return '🏆';
}

function getCertificationCategory(certName) {
  const name = certName.toLowerCase();

  if (name.includes('aws') || name.includes('cloud')) return 'Cloud';
  if (name.includes('jenkins') || name.includes('docker') || name.includes('git')) return 'DevOps';
  if (name.includes('scrum') || name.includes('leadership') || name.includes('management')) return 'Agile & Leadership';
  if (name.includes('selenium') || name.includes('appium') || name.includes('cucumber') || name.includes('rest')) return 'Automation';
  return 'Testing';
}

/**
 * CertificationCard Component
 * Displays individual certification with lazy-loaded image or fallback badge
 * Fully accessible with ARIA labels and semantic HTML
 */
function CertificationCard({
  name,
  description,
  image,
  organisation,
  date,
  index,
}) {
  const [imageError, setImageError] = React.useState(false);
  const badge = getCertificationBadge(name);
  const imagePath = image ? useBaseUrl(image) : null;

  return (
    <article
      className={clsx(styles.Certification, 'col col--4')}
      aria-label={`Certification ${index + 1}: ${name}`}
    >
      <div className={styles.CertificationImage}>
        {imagePath && !imageError ? (
          <LazyImage
            src={imagePath}
            alt={`${name} certificate logo`}
            title={`Certification: ${name}`}
            width="100%"
            height="100px"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles.CertificationBadge} title={name}>
            <span className={styles.BadgeIcon}>{badge}</span>
            <span className={styles.BadgeText}>Certified</span>
          </div>
        )}
      </div>

      <div className={styles.CertificationInfo}>
        <h3 className={styles.CertificationTitle} id={`cert-title-${index}`}>
          {name}
        </h3>

        <time
          className={styles.CertificationDuration}
          dateTime={new Date(date).toISOString()}
          aria-label={`Issued: ${date}`}
        >
          📅 {date}
        </time>
      </div>

      <p
        className={styles.CertificationOrganization}
        aria-describedby={`cert-title-${index}`}
      >
        {organisation}
      </p>
    </article>
  );
}

/**
 * CertificationList Component
 * Displays all certifications with error boundary
 * Supports 15+ certifications for senior QA professionals
 */
export default function CertificationList() {
  const { certifications } = Data;
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const categoryOptions = ['All', 'Testing', 'Automation', 'DevOps', 'Cloud', 'Agile & Leadership'];
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredCertifications = (certifications || []).filter(certification => {
    const category = getCertificationCategory(certification.name);
    const categoryMatches = activeCategory === 'All' || category === activeCategory;
    const searchMatches = !normalizedSearch
      || certification.name.toLowerCase().includes(normalizedSearch)
      || certification.organisation.toLowerCase().includes(normalizedSearch);

    return categoryMatches && searchMatches;
  });

  if (!certifications || certifications.length === 0) {
    return (
      <section
        className={styles.CertificationsContainer}
        aria-live="polite"
        aria-label="Certifications section"
      >
        <div className="container">
          <p className={styles.noCertifications}>
            Certifications data is not available at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary>
      <section
        className={styles.CertificationsContainer}
        aria-live="polite"
        aria-label="Professional certifications"
      >
        <div className="container">
          <div className={styles.certToolbar}>
            <label className={styles.searchLabel} htmlFor="certification-search">
              Search certifications
            </label>
            <input
              id="certification-search"
              type="search"
              className={styles.searchInput}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search ISTQB, Selenium, AWS..."
            />

            <div className={styles.certFilters} aria-label="Filter certifications by category">
              {categoryOptions.map(category => (
                <button
                  type="button"
                  key={category}
                  className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <p className={styles.resultCount}>
              Showing {filteredCertifications.length} of {certifications.length} certifications
            </p>
          </div>

          <div className="row">
            {filteredCertifications.map((certification, idx) => (
              <CertificationCard
                key={`cert-${idx}`}
                {...certification}
                index={idx}
              />
            ))}
          </div>

          {filteredCertifications.length === 0 && (
            <p className={styles.noCertifications}>No certifications match the current filters.</p>
          )}
        </div>
      </section>
    </ErrorBoundary>
  );
}







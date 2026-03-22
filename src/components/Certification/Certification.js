import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './certification.module.css';
import Data from './CertificationsData.json';
import LazyImage from '@site/src/components/LazyImage';
import ErrorBoundary from '@site/src/components/ErrorBoundary';

/**
 * CertificationCard Component
 * Displays individual certification with lazy-loaded image
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
  return (
    <article
      className={clsx(styles.Certification, 'col col--4')}
      aria-label={`Certification ${index + 1}: ${name}`}
    >
      <div className={styles.CertificationImage}>
        <LazyImage
          src={useBaseUrl(image)}
          alt={`${name} certificate logo`}
          title={`Certification: ${name}`}
          width="100%"
          height="100px"
        />
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
          {date}
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
 */
export default function CertificationList() {
  const { certifications } = Data;

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
          <div className="row">
            {certifications.map((certification, idx) => (
              <CertificationCard
                key={`cert-${idx}`}
                {...certification}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}







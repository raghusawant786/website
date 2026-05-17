import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function ResumePreview() {
  const highlights = [
    '9+ years in BFSI quality engineering',
    'BDD, Serenity, Cucumber, Selenium, Appium',
    'UI, API, mobile, compliance, and performance testing',
    'QA leadership, mentoring, and automation strategy',
  ];

  return (
    <section className={styles.resumeSection} aria-label="Resume preview">
      <div className="container">
        <div className={styles.resumeShell}>
          <div>
            <p className={styles.eyebrow}>Resume Snapshot</p>
            <h2 className={styles.title}>Lead QA Engineer focused on enterprise automation</h2>
            <p className={styles.summary}>
              A concise overview of automation architecture, BFSI delivery, leadership, and measurable QA impact.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href="/website/resume.pdf" target="_blank" rel="noopener noreferrer">
                Preview resume
              </a>
              <a className={styles.secondaryAction} href="/website/resume.pdf" download>
                Download PDF
              </a>
              <Link className={styles.textAction} to="/docs/hireMe">
                Contact me
              </Link>
            </div>
          </div>

          <div className={styles.highlightPanel}>
            {highlights.map(highlight => (
              <div key={highlight} className={styles.highlightItem}>
                <span className={styles.check}>✓</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

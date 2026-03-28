import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SocialLinks from '../components/Solidlinks/_SocialLinks';
import ErrorBoundary from '@site/src/components/ErrorBoundary';
import ProfessionalStats from '@site/src/components/ProfessionalStats';
import ExperienceTimeline from '@site/src/components/ExperienceTimeline';
import TechSkillsShowcase from '@site/src/components/TechSkillsShowcase';
import ProjectShowcase from '@site/src/components/ProjectShowcase';
import Testimonials from '@site/src/components/Testimonials';

/**
 * Homepage Header Component
 * Displays hero banner with CTA and social links
 */
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.hero__title}>{siteConfig.title}</h1>
          
          <p 
            className={styles.hero__subtitle}
            aria-label="Professional profile tagline"
          >
            {siteConfig.tagline}
          </p>

          <div className={styles.buttonGroup}>
            <Link
              className={clsx('button button--lg', styles.primaryBtn)}
              to="/docs/hireMe"
              aria-label="Navigate to hire me section"
            >
              💼 Available for Opportunities
            </Link>
            
            <a
              className={clsx('button button--lg', styles.secondaryBtn)}
              href="/website/resume.pdf"
              download
              aria-label="Download resume"
            >
              📄 Download Resume
            </a>
          </div>

          <div className={styles.socialLinksContainer} aria-label="Social media links" role="navigation">
            <SocialLinks />
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroVisualBox}>
            <div className={styles.heroIcon}>🚀</div>
            <p className={styles.heroVisualText}>
              Lead QA Engineer Building Enterprise Testing Solutions
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Home Page Component
 * Main landing page with hero and skills sections
 */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title} - Portfolio`}
      description="Raghunath Sawant - Lead QA Engineer | 9+ Years BFSI Domain | Full-Stack Testing | Team Leadership"
    >
      <HomepageHeader />
      
      <main>
        <ErrorBoundary>
          <ProfessionalStats />
        </ErrorBoundary>
        <ErrorBoundary>
          <TechSkillsShowcase />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProjectShowcase />
        </ErrorBoundary>
        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>
        <ErrorBoundary>
          <ExperienceTimeline />
        </ErrorBoundary>
      </main>
    </Layout>
  );
}

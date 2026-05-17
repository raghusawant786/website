import React from 'react';
import styles from './styles.module.css';

const expertiseCards = [
  {
    title: 'Automation & Quality Engineering',
    description:
      'Enterprise-grade test frameworks, resilient API coverage, and release-ready validation for BFSI systems.',
    tags: ['Serenity BDD', 'Cucumber', 'Selenium WebDriver', 'Rest Assured'],
  },
  {
    title: 'AI & Intelligent Testing',
    description:
      'Modern test generation, visual validation, and predictive analytics to reduce defect risk and speed delivery.',
    tags: ['Applitools', 'Testim', 'ChatGPT API', 'Predictive defect analysis'],
  },
  {
    title: 'DevOps, CI/CD & Cloud Ready',
    description:
      'Automated pipelines, container-based test environments, and Git-driven release confidence.',
    tags: ['Jenkins', 'Git/GitHub', 'Docker', 'Azure Pipelines'],
  },
  {
    title: 'BFSI Domain & Data Reliability',
    description:
      'Secure banking quality engineering with data-centric testing, compliance coverage and digital channel assurance.',
    tags: ['API Testing', 'SQL', 'Oracle DB', 'Regulatory QA'],
  },
];

export default function TechSkillsShowcase() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.skillsTitle}>Technical Expertise</h2>
        <p className={styles.skillsIntro}>
          Focused on practical QA engineering, automation delivery and modern test intelligence for enterprise clients.
        </p>

        <div className={styles.cardGrid}>
          {expertiseCards.map((card) => (
            <article key={card.title} className={styles.expertiseCard}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <div className={styles.tagList}>
                {card.tags.map((tag) => (
                  <span key={tag} className={styles.tagItem}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

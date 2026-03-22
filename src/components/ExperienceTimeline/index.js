import React from 'react';
import styles from './styles.module.css';

/**
 * Experience Timeline Component
 * Displays career progression visually
 */
export default function ExperienceTimeline() {
  const experiences = [
    {
      company: 'SS&C Technologies',
      role: 'Lead Software QA Engineer',
      period: 'Oct 2024 – Present',
      logo: '🏢',
      achievements: [
        'Lead QA team with 90% UI automation coverage',
        'Implemented BDD/Serenity architecture',
        'IRS/DOL compliance testing & automation',
      ],
      color: '#b982e0',
    },
    {
      company: 'Honeywell International',
      role: 'Senior Quality Engineer',
      period: 'Apr 2023 – Oct 2024',
      logo: '🛠️',
      achievements: [
        '85%+ test coverage with TestNG/POM',
        '100+ daily tests execution',
        '60+ visual regressions detected & fixed',
      ],
      color: '#64c8c8',
    },
    {
      company: 'Previous Experience',
      role: 'Quality Analyst | Senior QA',
      period: '2015 – Apr 2023',
      logo: '📊',
      achievements: [
        '5+ years BFSI domain expertise',
        'Selenium, API testing, automation',
        'Team leadership & mentoring',
      ],
      color: '#ffa726',
    },
  ];

  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <h2 className={styles.timelineTitle}>Career Timeline</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineDot} style={{ borderColor: exp.color }}>
                <span className={styles.timelineDotIcon}>{exp.logo}</span>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineCard} style={{ borderLeftColor: exp.color }}>
                  <div className={styles.companySection}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  <ul className={styles.achievements}>
                    {exp.achievements.map((achievement, aidx) => (
                      <li key={aidx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

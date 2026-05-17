import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * Experience Timeline Component
 * Displays career progression visually
 */
export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState(0);

  const experiences = [
    {
      company: 'SS&C Technologies',
      role: 'Lead Software QA Engineer',
      period: 'Oct 2024 – Present',
      domain: 'BFSI compliance, IRS/DOL workflows, enterprise automation',
      tools: ['Serenity BDD', 'Cucumber', 'Selenium', 'Rest Assured', 'Jenkins'],
      logo: '🏢',
      achievements: [
        'Lead QA team with 90% UI automation coverage',
        'Implemented BDD/Serenity architecture',
        'IRS/DOL compliance testing & automation',
      ],
      color: '#0f766e',
    },
    {
      company: 'Honeywell International',
      role: 'Senior Quality Engineer',
      period: 'Apr 2023 – Oct 2024',
      domain: 'Enterprise product quality, visual regression, automated delivery',
      tools: ['Selenium', 'TestNG', 'Applitools', 'Java', 'GitHub'],
      logo: '🛠️',
      achievements: [
        '85%+ test coverage with TestNG/POM',
        '100+ daily tests execution',
        '60+ visual regressions detected & fixed',
      ],
      color: '#14a39a',
    },
    {
      company: 'Qualitykiosk Technologies',
      role: 'Quality Analyst | Senior QA',
      period: 'Aug 2016 – Apr 2023',
      domain: 'Banking, mobile applications, web automation, API testing',
      tools: ['Selenium', 'Appium', 'JMeter', 'SQL', 'JIRA'],
      logo: '📊',
      achievements: [
        '5+ years BFSI domain expertise',
        'Selenium, API testing, automation',
        'Team leadership & mentoring',
      ],
      color: '#d97706',
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
                  <button
                    type="button"
                    className={styles.expandBtn}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                  >
                    {openIndex === idx ? 'Hide role details' : 'View role details'}
                  </button>

                  {openIndex === idx && (
                    <div className={styles.expandedPanel}>
                      <p className={styles.domain}>{exp.domain}</p>
                      <div className={styles.toolList}>
                        {exp.tools.map(tool => (
                          <span key={tool} className={styles.toolPill}>{tool}</span>
                        ))}
                      </div>
                      <ul className={styles.achievements}>
                        {exp.achievements.map((achievement, aidx) => (
                          <li key={aidx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

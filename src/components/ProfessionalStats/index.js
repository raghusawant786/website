import React from 'react';
import styles from './styles.module.css';

/**
 * Professional Stats Component
 * Displays key metrics and achievements
 */
export default function ProfessionalStats() {
  const stats = [
    {
      number: '9+',
      label: 'Years BFSI',
      subtext: 'Domain Expertise',
      icon: '📊'
    },
    {
      number: '90%',
      label: 'UI Coverage',
      subtext: 'Automation Excellence',
      icon: '🎯'
    },
    {
      number: '15+',
      label: 'Tech Tools',
      subtext: 'Mastered',
      icon: '🛠️'
    },
    {
      number: '8+',
      label: 'Team Led',
      subtext: 'QA Engineers',
      icon: '👥'
    },
    {
      number: '30%',
      label: 'Defect Rate',
      subtext: 'Reduction Achieved',
      icon: '📉'
    },
    {
      number: '100+',
      label: 'Certifications',
      subtext: '& Trainings',
      icon: '🏆'
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statSubtext}>{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

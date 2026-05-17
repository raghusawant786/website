import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

/**
 * Professional Stats Component
 * Displays key metrics and achievements with animated counters
 */
export default function ProfessionalStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    coverage: 0,
    tools: 0,
    team: 0,
    defect: 0,
    certs: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(`.${styles.statsSection}`);
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = { years: 9, coverage: 90, tools: 15, team: 8, defect: 30, certs: 100 };
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        years: Math.floor(targets.years * progress),
        coverage: Math.floor(targets.coverage * progress),
        tools: Math.floor(targets.tools * progress),
        team: Math.floor(targets.team * progress),
        defect: Math.floor(targets.defect * progress),
        certs: Math.floor(targets.certs * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  const stats = [
    {
      number: `${counts.years}+`,
      label: 'Years BFSI',
      subtext: 'Domain Expertise',
      icon: '📊'
    },
    {
      number: `${counts.coverage}%`,
      label: 'UI Coverage',
      subtext: 'Automation Excellence',
      icon: '🎯'
    },
    {
      number: `${counts.tools}+`,
      label: 'Tech Tools',
      subtext: 'Mastered',
      icon: '🛠️'
    },
    {
      number: `${counts.team}+`,
      label: 'Team Led',
      subtext: 'QA Engineers',
      icon: '👥'
    },
    {
      number: `${counts.defect}%`,
      label: 'Defect Rate',
      subtext: 'Reduction Achieved',
      icon: '📉'
    },
    {
      number: `${counts.certs}+`,
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
            <div 
              key={idx} 
              className={styles.statCard}
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${idx * 0.1}s both` : 'none',
              }}
            >
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

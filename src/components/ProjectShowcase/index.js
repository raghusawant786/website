import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

/**
 * Project Showcase Component
 * Displays QA automation projects and case studies
 */
export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Mobile Banking App - BDD Automation Framework',
      category: 'bfsi',
      company: 'Honeywell International',
      challenge: 'Mobile banking application with 50+ critical flows needed regression testing but manual testing took 5 days per sprint.',
      solution: 'Built comprehensive BDD framework using Appium + Serenity + Cucumber covering all payment, transfer, and balance check flows.',
      technologies: ['Appium', 'Serenity BDD', 'Cucumber', 'Java', 'TestNG'],
      impact: [
        'Reduced regression testing time from 5 days → 4 hours',
        '87% mobile UI automation coverage',
        '99% flake-free test execution',
        'Saved 120+ QA hours/month'
      ],
      icon: '📱',
      color: '#0f766e',
      metrics: {
        coverage: '87%',
        execution: '4 hrs',
        saved: '120 hrs/month'
      }
    },
    {
      id: 2,
      title: 'Payment Gateway API Testing Suite',
      category: 'bfsi',
      company: 'SS&C Technologies',
      challenge: 'Complex Payment Gateway with 200+ API endpoints, critical for IRS/DOL compliance. Manual API testing was error-prone.',
      solution: 'Developed Rest Assured automation suite with data-driven approach, covering happy path + edge cases + security scenarios.',
      technologies: ['Rest Assured', 'TestNG', 'Apache POI', 'SOAP', 'JSON'],
      impact: [
        'Automated 200+ API test cases (95% coverage)',
        'Detected compliance issues 2 weeks earlier',
        'Zero production API failures in 6 months',
        '100+ daily automated API executions'
      ],
      icon: '🔌',
      color: '#14a39a',
      metrics: {
        coverage: '95%',
        execution: '100+/day',
        uptime: '99.99%'
      }
    },
    {
      id: 3,
      title: 'Loan Processing System - Visual Regression Testing',
      category: 'bfsi',
      company: 'Qualitykiosk Technologies',
      challenge: 'Loan processing portal updated UI 4x/year but visual regressions went unnoticed, impacting user experience.',
      solution: 'Integrated Applitools AI visual testing with Selenium automation for automated screenshot comparison across browsers.',
      technologies: ['Selenium WebDriver', 'Applitools', 'TestNG', 'Chrome/Firefox/Safari'],
      impact: [
        'Detected 60+ visual regressions before production',
        'Eliminated manual screenshot reviews (save 30 hrs/quarter)',
        'Cross-browser UI consistency maintained',
        'Zero visual regression escapes to production'
      ],
      icon: '🎨',
      color: '#d97706',
      metrics: {
        bugs: '60+ caught',
        time_saved: '30 hrs/qtly',
        coverage: 'Multi-browser'
      }
    },
    {
      id: 4,
      title: 'Insurance Claims Workflow - BDD Test Automation',
      category: 'bfsi',
      company: 'Qualitykiosk Technologies',
      challenge: 'Complex 15-step claims workflow, business stakeholders wanted executable specifications they could understand.',
      solution: 'Implemented BDD using Serenity + Cucumber with Gherkin scenarios written in business language, fully automated with Jenkins CI/CD.',
      technologies: ['Serenity BDD', 'Cucumber', 'Selenium', 'Jenkins', 'GitHub'],
      impact: [
        'Business-readable test specifications (90% comprehensibility)',
        'Automated 80+ business scenarios',
        '85%+ test coverage achieved',
        'Reduced defect escape rate by 35%'
      ],
      icon: '📋',
      color: '#0f766e',
      metrics: {
        coverage: '85%',
        defect_reduction: '35%',
        scenarios: '80+'
      }
    },
    {
      id: 5,
      title: 'Compliance Reporting Dashboard - Performance Testing',
      category: 'performance',
      company: 'SS&C Technologies',
      challenge: 'Compliance reporting dashboard must handle 500k+ records, required performance validation under load.',
      solution: 'Conducted NeoLoad performance testing simulating 1000 concurrent users, identified bottlenecks, validated 95th percentile response times.',
      technologies: ['NeoLoad', 'JMeter', 'SQL Performance Tuning', 'Load Testing'],
      impact: [
        'Validated system handles 2x production load',
        'Identified 3 critical bottlenecks before production',
        'Optimized queries reducing load time by 40%',
        'SLA compliance: 99.8% uptime maintained'
      ],
      icon: '⚡',
      color: '#14a39a',
      metrics: {
        load: '1000 users',
        optimization: '40%',
        sla: '99.8%'
      }
    },
    {
      id: 6,
      title: 'Generative AI for Test Case Generation',
      category: 'ai',
      company: 'SS&C Technologies',
      challenge: 'Generating test cases manually was time-consuming; needed to explore AI for test case creation.',
      solution: 'Integrated ChatGPT API + Testim to generate edge case scenarios, then validated and refined with manual expertise.',
      technologies: ['ChatGPT API', 'Testim', 'Testim Self-Healing', 'Python', 'Prompt Engineering'],
      impact: [
        'Generated 150+ test cases in 1/10th the time',
        'AI identified 20+ edge cases humans missed',
        'Testim self-healing reduced maintenance by 50%',
        'Proof-of-concept for AI-driven QA transformation'
      ],
      icon: '🤖',
      color: '#d97706',
      metrics: {
        cases_generated: '150+',
        time_saved: '90%',
        maintenance_reduction: '50%'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '📂' },
    { id: 'bfsi', label: 'BFSI Domain', icon: '🏦' },
    { id: 'performance', label: 'Performance', icon: '⚡' },
    { id: 'ai', label: 'AI & Innovation', icon: '🤖' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeProject();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section className={styles.showcaseSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.showcaseTitle}>
            🚀 Project Portfolio & Case Studies
          </h2>
          <p className={styles.showcaseSubtitle}>
            Real-world QA automation projects delivering measurable business impact
          </p>
        </div>

        <div className={styles.filterContainer}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(cat.id)}
              aria-label={`Filter by ${cat.label}`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <article
              key={project.id}
              className={styles.projectCard}
              style={{ borderLeftColor: project.color }}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon} style={{ backgroundColor: project.color }}>
                  {project.icon}
                </div>
                <div className={styles.projectMeta}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectCompany}>{project.company}</p>
                </div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Solution Snapshot</h4>
                  <p className={styles.sectionText}>{project.solution}</p>
                </div>

                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Tech Stack</h4>
                  <div className={styles.techTags}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.metricsRow}>
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className={styles.metricCard} style={{ borderTopColor: project.color }}>
                      <div className={styles.metricValue}>{value}</div>
                      <div className={styles.metricLabel}>
                        {key.replace(/_/g, ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className={styles.caseStudyBtn}
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open full case study for ${project.title}`}
                >
                  View case study
                </button>
              </div>
            </article>
          ))}
        </div>

        {selectedProject && (
          <div
            className={styles.modalOverlay}
            role="presentation"
            onClick={closeProject}
          >
            <article
              className={styles.caseStudyModal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeProject}
                aria-label="Close case study"
              >
                ×
              </button>

              <div className={styles.modalHeader}>
                <div
                  className={styles.projectIcon}
                  style={{ backgroundColor: selectedProject.color }}
                >
                  {selectedProject.icon}
                </div>
                <div>
                  <p className={styles.projectCompany}>{selectedProject.company}</p>
                  <h3 id="case-study-title" className={styles.modalTitle}>
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className={styles.modalGrid}>
                <section className={styles.modalPanel}>
                  <h4 className={styles.sectionTitle}>Challenge</h4>
                  <p className={styles.sectionText}>{selectedProject.challenge}</p>
                </section>

                <section className={styles.modalPanel}>
                  <h4 className={styles.sectionTitle}>Solution</h4>
                  <p className={styles.sectionText}>{selectedProject.solution}</p>
                </section>
              </div>

              <section className={styles.modalPanel}>
                <h4 className={styles.sectionTitle}>Impact & Results</h4>
                <ul className={styles.impactList}>
                  {selectedProject.impact.map((item, idx) => (
                    <li key={idx} className={styles.impactItem}>✓ {item}</li>
                  ))}
                </ul>
              </section>

              <div className={styles.metricsRow}>
                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                  <div key={key} className={styles.metricCard} style={{ borderTopColor: selectedProject.color }}>
                    <div className={styles.metricValue}>{value}</div>
                    <div className={styles.metricLabel}>
                      {key.replace(/_/g, ' ')}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        )}


      </div>
    </section>
  );
}

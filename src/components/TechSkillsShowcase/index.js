import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * Tech Skills Showcase Component
 * Displays technical skills by category with filtering
 */
export default function TechSkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'testing', label: '🎯 Testing', color: '#b982e0' },
    { id: 'automation', label: '🔧 Automation', color: '#64c8c8' },
    { id: 'languages', label: '💻 Languages', color: '#ffa726' },
    { id: 'devops', label: '🛠️ DevOps/CI-CD', color: '#ff7675' },
    { id: 'databases', label: '🗄️ Databases', color: '#5dade2' },
    { id: 'ai', label: '🤖 AI/ML', color: '#9f7aea' },
  ];

  const skills = [
    {
      category: 'testing',
      label: 'BDD/Serenity',
      level: 'Expert',
      proficiency: 95,
    },
    {
      category: 'testing',
      label: 'Cucumber/Gherkin',
      level: 'Expert',
      proficiency: 90,
    },
    {
      category: 'testing',
      label: 'API Testing',
      level: 'Advanced',
      proficiency: 85,
    },
    {
      category: 'automation',
      label: 'Selenium WebDriver',
      level: 'Expert',
      proficiency: 95,
    },
    {
      category: 'automation',
      label: 'Appium',
      level: 'Advanced',
      proficiency: 80,
    },
    {
      category: 'automation',
      label: 'Rest Assured',
      level: 'Advanced',
      proficiency: 85,
    },
    {
      category: 'languages',
      label: 'Java',
      level: 'Advanced',
      proficiency: 90,
    },
    {
      category: 'languages',
      label: 'JavaScript',
      level: 'Proficient',
      proficiency: 75,
    },
    {
      category: 'languages',
      label: 'Python',
      level: 'Proficient',
      proficiency: 70,
    },
    {
      category: 'devops',
      label: 'Jenkins',
      level: 'Advanced',
      proficiency: 85,
    },
    {
      category: 'devops',
      label: 'Git/GitHub',
      level: 'Advanced',
      proficiency: 90,
    },
    {
      category: 'devops',
      label: 'Docker',
      level: 'Proficient',
      proficiency: 75,
    },
    {
      category: 'databases',
      label: 'MySQL/PostgreSQL',
      level: 'Advanced',
      proficiency: 85,
    },
    {
      category: 'databases',
      label: 'Oracle DB',
      level: 'Proficient',
      proficiency: 70,
    },
    {
      category: 'ai',
      label: 'Machine Learning (TensorFlow/Scikit-learn)',
      level: 'Proficient',
      proficiency: 75,
    },
    {
      category: 'ai',
      label: 'AI-Powered Test Generation (Testim)',
      level: 'Advanced',
      proficiency: 80,
    },
    {
      category: 'ai',
      label: 'Visual AI Testing (Applitools)',
      level: 'Advanced',
      proficiency: 85,
    },
    {
      category: 'ai',
      label: 'LLM Integration & ChatGPT API',
      level: 'Proficient',
      proficiency: 75,
    },
    {
      category: 'ai',
      label: 'Predictive Defect Analysis',
      level: 'Advanced',
      proficiency: 80,
    },
    {
      category: 'ai',
      label: 'Natural Language Processing (NLP)',
      level: 'Proficient',
      proficiency: 70,
    },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return '#10b981';
      case 'Advanced': return '#3b82f6';
      case 'Proficient': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.skillsTitle}>Technical Expertise</h2>
        
        <div className={styles.categoryFilter}>
          <button
            className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.active : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              style={{ borderBottomColor: activeCategory === cat.id ? cat.color : 'transparent' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <h3 className={styles.skillName}>{skill.label}</h3>
                <span className={styles.skillLevel} style={{ backgroundColor: getLevelColor(skill.level) }}>
                  {skill.level}
                </span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <p className={styles.proficiency}>{skill.proficiency}% Proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

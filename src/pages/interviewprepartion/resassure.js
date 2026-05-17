import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './resassure.module.css';
import { restAssuredSections } from '../../data/restAssuredContent';

export default function RestAssuredComponent() {
  const [activeSection, setActiveSection] = useState('fundamentals');

  const currentSection = restAssuredSections.find(s => s.id === activeSection);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    // Scroll content to top
    const contentArea = document.querySelector(`.${styles.contentArea}`);
    if (contentArea) {
      contentArea.scrollTop = 0;
    }
  };

  return (
    <Layout
      title="Interview Preparation - REST Assured"
      description="Comprehensive REST Assured API testing reference guide. Q&A, best practices, code examples, and senior-level tips for 9+ years experience."
    >
      <div className={styles.interviewContainer}>
        <div className={styles.heroSection}>
          <h1 className={styles.mainTitle}>📚 REST Assured API Testing Reference</h1>
          <p className={styles.tagline}>
            Complete guide to API testing, REST principles, HTTP methods, status codes, authentication, and REST Assured framework best practices.
          </p>
        </div>

        <div className={styles.layoutContainer}>
          {/* LEFT SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <span className={styles.sidebarTitle}>📖 Topics</span>
            </div>

            <nav className={styles.sectionNav}>
              {restAssuredSections.map((section) => (
                <button
                  key={section.id}
                  className={`${styles.sectionItem} ${
                    activeSection === section.id ? styles.sectionItemActive : ''
                  }`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <span className={styles.sectionIcon}>{section.icon}</span>
                  <span className={styles.sectionLabel}>{section.title}</span>
                </button>
              ))}
            </nav>

            <div className={styles.sidebarFooter}>
              <p className={styles.sidebarHint}>
                ✨ Click any topic to explore comprehensive notes, code examples, and best practices.
              </p>
            </div>
          </aside>

          {/* RIGHT CONTENT AREA */}
          <main className={styles.contentArea}>
            {currentSection && (
              <article className={styles.contentArticle}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionHeaderIcon}>{currentSection.icon}</span>
                  <h2 className={styles.sectionTitle}>{currentSection.title}</h2>
                </div>

                <div
                  className={styles.contentBody}
                  dangerouslySetInnerHTML={{
                    __html: currentSection.content
                      .split('\n\n')
                      .map((paragraph) => {
                        // Convert markdown-like syntax to HTML
                        let html = paragraph
                          .replace(/^## (.*?)$/gm, '<h3>$1</h3>')
                          .replace(/^### (.*?)$/gm, '<h4>$1</h4>')
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/`(.*?)`/g, '<code>$1</code>')
                          .replace(/^\- (.*?)$/gm, '<li>$1</li>')
                          .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
                          .replace(/\| (.*?) \|/g, (match, content) => {
                            const cells = content.split('|').map(cell => `<td>${cell.trim()}</td>`).join('');
                            return `<tr>${cells}</tr>`;
                          });

                        // Wrap tables
                        if (html.includes('<tr>')) {
                          html = html.replace(/(<tr>.*<\/tr>)/s, '<table><tbody>$1</tbody></table>');
                        }

                        // Wrap code blocks
                        html = html.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>');

                        return `<div class="content-block">${html}</div>`;
                      })
                      .join(''),
                  }}
                />
              </article>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}

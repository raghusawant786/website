import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { interviewTopics, topicKeys } from '../../data/interviewTopicsStructure';
import { restAssuredSections } from '../../data/restAssuredContent';
import { javaSections } from '../../data/javaContent';
import { cucumberSerenitySections } from '../../data/cucumberSerenityContent';
import { playwrightSections } from '../../data/playwrightContent';
import { seleniumSections } from '../../data/seleniumContent';

// Map main topics to their content data
const contentMap = {
  restassured: restAssuredSections,
  java: javaSections,
  cucumber: cucumberSerenitySections,
  playwright: playwrightSections,
  selenium: seleniumSections,
};

export default function InterviewPreparation() {
  const [selectedTopic, setSelectedTopic] = useState('restassured');
  const [selectedSubtopic, setSelectedSubtopic] = useState('fundamentals');
  const [expandedTopics, setExpandedTopics] = useState({ restassured: true });

  const topicData = interviewTopics[selectedTopic];
  const contentData = contentMap[selectedTopic];
  const currentSection = contentData?.find(s => s.id === selectedSubtopic);

  const handleTopicChange = (topicKey) => {
    setSelectedTopic(topicKey);
    // Reset to first subtopic
    setSelectedSubtopic(interviewTopics[topicKey].subtopics[0].id);
    // Auto-expand the topic's subtopics dropdown
    setExpandedTopics(prev => ({
      ...prev,
      [topicKey]: true
    }));
  };

  const handleSubtopicChange = (subtopicId) => {
    setSelectedSubtopic(subtopicId);
    const contentArea = document.querySelector(`.${styles.contentArea}`);
    if (contentArea) {
      contentArea.scrollTop = 0;
    }
  };

  const toggleTopicExpand = (topicKey) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicKey]: !prev[topicKey]
    }));
  };

  // Convert Markdown to HTML with proper table and code block handling
  const escapeHtml = (text) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  };

  const markdownToHtml = (markdown, options = {}) => {
    let html = markdown;

    if (options.hideCombinedJavaExamples) {
      html = html.replace(/\n### Java Code Examples\n\n```[\s\S]*?```\n?/g, '\n');
      html = html.replace(/\n\*\*Programs Covered:\*\*[\s\S]*?(?=\n\*\*Key Concepts:\*\*)/g, '\n');
    }

    // ■■■ PROCESS CODE BLOCKS FIRST (preserve formatting) ■■■
    html = html.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, language, code) => {
      const languageClass = language ? ` class="language-${language}"` : '';
      const escapedCode = escapeHtml(code.trim());
      return `<pre><code${languageClass}>${escapedCode}</code></pre>`;
    });

    // ■■■ PROCESS INLINE CODE ■■■
    html = html.replace(/`([^`]+)`/g, (match, code) => {
      const escapedCode = escapeHtml(code);
      return `<code>${escapedCode}</code>`;
    });

    // ■■■ PROCESS TABLES ■■■
    const tableRegex = /\|(.+)\n\|[-|\s]+\n((?:\|.+\n?)*)/g;
    html = html.replace(tableRegex, (match) => {
      const lines = match.trim().split('\n');
      const headerCells = lines[0]
        .split('|')
        .map(cell => cell.trim())
        .filter(cell => cell);
      const bodyRows = lines.slice(2).map(line =>
        line
          .split('|')
          .map(cell => cell.trim())
          .filter(cell => cell)
      );

      let table = '<table><thead><tr>';
      headerCells.forEach(cell => {
        table += `<th>${escapeHtml(cell)}</th>`;
      });
      table += '</tr></thead><tbody>';

      bodyRows.forEach(row => {
        if (row.length > 0) {
          table += '<tr>';
          row.forEach(cell => {
            table += `<td>${cell}</td>`;
          });
          table += '</tr>';
        }
      });

      table += '</tbody></table>';
      return table;
    });

    // ■■■ PROCESS OTHER MARKDOWN ■■■
    html = html
      .replace(/^## (.*?)$/gm, '<h3>$1</h3>')
      .replace(/^### (.*?)$/gm, '<h4>$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^\- (.*?)$/gm, '<li>$1</li>')
      .replace(/((?:<li>.*?<\/li>\n?)+)/g, '<ul>$1</ul>');

    // ■■■ WRAP PARAGRAPHS ■■■
    const parts = html.split(/(<h3>|<h4>|<table>|<pre>|<ul>)/);
    const result = parts
      .map((part, idx) => {
        if (
          part.match(/^<h[34]>/) ||
          part.match(/^<table>/) ||
          part.match(/^<pre>/) ||
          part.match(/^<ul>/) ||
          !part.trim()
        ) {
          return part;
        }
        return `<p>${part}</p>`;
      })
      .join('');

    return result;
  };

  const renderProgramExamples = (examples = []) => {
    if (!examples.length) {
      return null;
    }

    return (
      <section className={styles.programExamples}>
        <h3>Programs Covered</h3>
        {examples.map((example) => (
          <article className={styles.programExample} key={example.title}>
            <h4>{example.title}</h4>
            <pre>
              <code className="language-java">{example.code.trim()}</code>
            </pre>
          </article>
        ))}
      </section>
    );
  };

  return (
    <Layout
      title="Interview Preparation"
      description="Comprehensive interview preparation guides for REST Assured, Java, TestNG, and more."
    >
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h2 className={styles.mainTitle}>📚 Interview Preparation</h2>
          <p className={styles.tagline}>
            Comprehensive guides for API testing, frameworks, and best practices
          </p>
        </div>

        <div className={styles.layoutContainer}>
          {/* LEFT SIDEBAR - MAIN TOPICS + SUBTOPICS */}
          <aside className={styles.sidebar}>
            {/* MAIN TOPICS - Switch between REST Assured, Java, etc. */}
            <nav className={styles.mainTopicsNav}>
              {topicKeys.map((topicKey) => (
                <button
                  key={topicKey}
                  className={`${styles.mainTopic} ${
                    selectedTopic === topicKey ? styles.mainTopicActive : ''
                  }`}
                  onClick={() => handleTopicChange(topicKey)}
                >
                  <span className={styles.topicIcon}>{interviewTopics[topicKey].icon}</span>
                  <span>{interviewTopics[topicKey].title}</span>
                </button>
              ))}
            </nav>

            {/* SUBTOPICS */}
            {topicData && (
              <div className={styles.subtopicSection}>
                <button
                  className={styles.collapsibleHeader}
                  onClick={() => toggleTopicExpand(selectedTopic)}
                >
                  <span className={styles.expandArrow}>
                    {expandedTopics[selectedTopic] ? '▼' : '▶'}
                  </span>
                  <span className={styles.subtopicHeaderText}>
                    {topicData.title}
                  </span>
                </button>

                {expandedTopics[selectedTopic] && (
                  <nav className={styles.subtopicNav}>
                    {topicData.subtopics.map((subtopic) => (
                      <button
                        key={subtopic.id}
                        className={`${styles.subtopic} ${
                          selectedSubtopic === subtopic.id ? styles.subtopicActive : ''
                        }`}
                        onClick={() => handleSubtopicChange(subtopic.id)}
                      >
                        {subtopic.label}
                      </button>
                    ))}
                  </nav>
                )}
              </div>
            )}
          </aside>

          {/* RIGHT CONTENT AREA */}
          <main className={styles.contentArea}>
            {currentSection && (
              <article className={styles.contentArticle}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionIcon}>{currentSection.icon}</span>
                  <h2 className={styles.sectionTitle}>{currentSection.title}</h2>
                </div>

                <div
                  className={styles.contentBody}
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(currentSection.content, {
                      hideCombinedJavaExamples: Boolean(currentSection.examples),
                    }),
                  }}
                />

                {renderProgramExamples(currentSection.examples)}
              </article>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}

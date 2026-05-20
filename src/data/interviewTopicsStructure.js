// Main topics with their subtopics
export const interviewTopics = {
  restassured: {
    title: 'REST Assured',
    icon: '🚀',
    subtopics: [
      { id: 'fundamentals', label: 'API & REST Fundamentals' },
      { id: 'http-methods', label: 'HTTP Methods Deep Dive' },
      { id: 'status-codes', label: 'HTTP Status Codes' },
      { id: 'authentication', label: 'Authentication & Security' },
      { id: 'rest-assured-core', label: 'REST Assured Core' },
      { id: 'advanced-techniques', label: 'Advanced Techniques' },
      { id: 'best-practices', label: 'Best Practices & Senior Tips' },
      { id: 'quick-reference', label: 'Quick Reference Cheat Sheet' },
    ],
  },
  java: {
    title: 'Java & OOP Programs',
    icon: '☕',
    subtopics: [
      { id: 'numbers', label: 'Numbers (20 Programs)' },
      { id: 'strings', label: 'Strings (21 Programs)' },
      { id: 'arrays-collections', label: 'Arrays & Collections (13 Programs)' },
      { id: 'oop-core', label: 'OOP Core Concepts (6 Concepts)' },
      { id: 'design-patterns', label: 'Design Patterns (5 Patterns)' },
      { id: 'solid-exceptions', label: 'SOLID & Exception Handling (10 Programs)' },
      { id: 'multithreading-java8', label: 'Multithreading, Java 8 & Advanced (5+ Topics)' },
    ],
  },
  cucumber: {
    title: 'Cucumber BDD & Serenity',
    icon: '🥒',
    subtopics: [
      { id: 'bdd-fundamentals', label: 'BDD Fundamentals' },
      { id: 'cucumber-core', label: 'Cucumber Core Concepts' },
      { id: 'step-definitions-hooks-tags', label: 'Step Definitions, Hooks & Tags' },
      { id: 'advanced-cucumber', label: 'Advanced Cucumber' },
      { id: 'cucumber-selenium', label: 'Cucumber + Selenium' },
      { id: 'runner-reports', label: 'Runner, Options & Reports' },
      { id: 'maven-commands', label: 'Maven Commands' },
      { id: 'serenity-introduction', label: 'Serenity BDD Introduction' },
      { id: 'serenity-cucumber-integration', label: 'Serenity + Cucumber Integration' },
      { id: 'serenity-config-qa', label: 'Serenity Config & Interview Q&A' },
    ],
  },
  playwright: {
    title: 'Playwright JS',
    icon: '🎭',
    subtopics: [
      { id: 'installation-setup', label: 'Installation & Project Setup' },
      { id: 'cli-commands', label: 'Playwright CLI Commands' },
      { id: 'config-structure', label: 'Project Structure & Config' },
      { id: 'locators-selectors', label: 'Locators & Selectors' },
      { id: 'user-actions', label: 'User Actions' },
      { id: 'assertions', label: 'Assertions' },
      { id: 'waits-timeouts', label: 'Waits & Timeouts' },
      { id: 'screenshots-videos-traces', label: 'Screenshots, Videos & Traces' },
      { id: 'hooks-fixtures', label: 'Hooks, Tags & Fixtures' },
      { id: 'page-object-model', label: 'Page Object Model' },
      { id: 'dialogs-frames-shadow', label: 'Dialogs, Frames & Shadow DOM' },
      { id: 'file-upload-download', label: 'File Upload & Download' },
      { id: 'api-testing', label: 'API Testing' },
      { id: 'network-mocking', label: 'Network Interception & Mocking' },
      { id: 'multi-tab-browser', label: 'Multi-Tab & Multi-Browser' },
      { id: 'authentication-storage', label: 'Authentication & Storage State' },
      { id: 'data-driven-tests', label: 'Parameterization & Data-Driven Tests' },
      { id: 'reporters-allure', label: 'Reporters & Allure' },
      { id: 'cicd', label: 'CI/CD - GitHub Actions' },
      { id: 'best-practices', label: 'Expert Tips & Best Practices' },
    ],
  },
  // Future topics can be added here
  // testng: {
  //   title: 'TestNG',
  //   icon: '🧪',
  //   subtopics: [...]
  // },
};

// Export topic keys for iteration
export const topicKeys = Object.keys(interviewTopics);

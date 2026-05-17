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
  // Future topics can be added here
  // java: {
  //   title: 'Java',
  //   icon: '☕',
  //   subtopics: [...]
  // },
  // testng: {
  //   title: 'TestNG',
  //   icon: '🧪',
  //   subtopics: [...]
  // },
};

// Export topic keys for iteration
export const topicKeys = Object.keys(interviewTopics);

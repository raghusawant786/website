export const bddQA = [
  {
    category: 'BDD Concepts',
    questions: [
      {
        q: 'What is BDD (Behavior-Driven Development)?',
        a: 'BDD is development approach focusing on behavior. Uses Given-When-Then format. Cucumber is popular tool. Bridges gap between business and tech teams.',
      },
      {
        q: 'What is Gherkin and why is it used?',
        a: 'Gherkin is plain English DSL for writing test scenarios. Uses Given-When-Then structure. Business analysts understand it. Tools like Cucumber parse Gherkin.',
      },
      {
        q: 'What is the difference between BDD and TDD?',
        a: 'TDD: developer writes tests first, then code. BDD: test scenarios written in plain English, focus on behavior. BDD is TDD + clear communication.',
      },
      {
        q: 'Explain Given-When-Then structure.',
        a: 'Given: preconditions/setup. When: action/trigger. Then: expected result/assertion. Example: Given user is on login page, When user enters credentials, Then user is logged in.',
      },
    ],
  },
  {
    category: 'Cucumber & Serenity',
    questions: [
      {
        q: 'What is Cucumber and what are its components?',
        a: 'Cucumber is BDD automation tool. Components: Feature files (Gherkin), Step definitions (Java/Python code), Runners (execute tests), Hooks (setup/teardown).',
      },
      {
        q: 'What is the difference between Cucumber and Serenity BDD?',
        a: 'Cucumber is core framework for BDD. Serenity is wrapper around Cucumber providing better reporting, page objects, screenshots. Serenity = Cucumber + enhancements.',
      },
      {
        q: 'How do you write step definitions in Cucumber?',
        a: 'Create class with methods. Use @Given, @When, @Then annotations with regex patterns. Match with feature file steps. Can share steps across scenarios.',
      },
      {
        q: 'What is the difference between Background and Hooks?',
        a: 'Background: runs before each scenario in feature file (defined in feature). Hooks: runs before/after all scenarios globally (@Before, @After in step defs).',
      },
    ],
  },
  {
    category: 'Serenity Best Practices',
    questions: [
      {
        q: 'What is Serenity BDD and why use it?',
        a: 'Serenity is BDD framework built on Cucumber. Provides better reports, page objects, screenshots on failure, supports Selenium integration. Great for enterprise automation.',
      },
      {
        q: 'How do you implement Page Objects in Serenity?',
        a: 'Extend PageObject class, use @FindBy for elements, implement page-specific methods. Use PageObjects in step definitions. Separates UI from test logic.',
      },
      {
        q: 'What are annotations in Serenity?',
        a: '@Managed: manages driver lifecycle. @Steps: injects step definitions. @WithDriver: for page objects. @FindBy: locate web elements. @DefaultUrl: page base URL.',
      },
      {
        q: 'How do you generate Serenity reports?',
        a: 'Run tests via Maven: mvn verify serenity:aggregate. Reports generated in target/site/serenity. Contains detailed steps, screenshots, execution time.',
      },
    ],
  },
  {
    category: 'Advanced BDD',
    questions: [
      {
        q: 'What is scenario outline and data tables in Cucumber?',
        a: 'Scenario Outline: parametrized scenario with Examples table. Data Tables: passing data within steps using | separator. Both enable data-driven testing.',
      },
      {
        q: 'How do you handle complex test scenarios in BDD?',
        a: 'Break into smaller scenarios, use scenario outlines for variations, implement shared steps, use hooks for setup/teardown, maintain clear feature files.',
      },
      {
        q: 'What is a feature file and its structure?',
        a: 'Feature file (.feature): contains scenarios in Gherkin. Structure: Feature description, Background (optional), Scenario 1, Scenario 2... Each scenario has Given-When-Then steps.',
      },
      {
        q: 'How do you run specific scenarios in Cucumber?',
        a: 'Use @tags on scenarios, run with tag expression. Use runner class with @CucumberOptions. Command: mvn test -Dtest=RunnerClass. Tags enable selective execution.',
      },
    ],
  },
];

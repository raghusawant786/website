export const testngQA = [
  {
    category: 'TestNG Basics',
    questions: [
      {
        q: 'What are the key annotations in TestNG?',
        a: '@BeforeSuite, @BeforeTest, @BeforeClass, @BeforeMethod, @Test, @AfterMethod, @AfterClass, @AfterTest, @AfterSuite. They define test lifecycle.',
      },
      {
        q: 'What is the difference between @Before/@After and @BeforeMethod/@AfterMethod?',
        a: '@Before/@After are JUnit. TestNG uses @BeforeMethod/@AfterMethod which run before/after each test method. @BeforeClass/@AfterClass run once per class.',
      },
      {
        q: 'How do you parameterize tests in TestNG?',
        a: 'Use @Parameters annotation with testng.xml or use @DataProvider annotation. DataProvider is more flexible and returns Object[][] of test data.',
      },
      {
        q: 'What is the difference between @Parameters and @DataProvider?',
        a: '@Parameters: simple data from XML file. @DataProvider: complex data structures, multiple test scenarios, returns Object[][], more reusable.',
      },
    ],
  },
  {
    category: 'TestNG Groups & Dependencies',
    questions: [
      {
        q: 'How do you group tests in TestNG?',
        a: 'Use groups attribute: @Test(groups="smoke"). Run specific groups via testng.xml or IDE. Allows categorizing tests for selective execution.',
      },
      {
        q: 'What are test dependencies in TestNG?',
        a: 'Use dependsOnMethods or dependsOnGroups. Test B depends on Test A means B runs only if A passes. Be careful: creates brittle tests.',
      },
      {
        q: 'How do you skip a test in TestNG?',
        a: 'Use @Test(enabled=false) to skip. Throw SkipException during test execution for conditional skipping based on runtime conditions.',
      },
    ],
  },
  {
    category: 'Assertions & Reporting',
    questions: [
      {
        q: 'What assertion methods are commonly used in TestNG?',
        a: 'assertEquals, assertTrue, assertFalse, assertNull, assertNotNull, fail. TestNG also supports soft assertions via SoftAssert for non-failing assertions.',
      },
      {
        q: 'What is SoftAssert in TestNG?',
        a: 'SoftAssert collects multiple assertion failures and reports them at the end. Allows test to continue after failures. Call assertAll() to throw collected errors.',
      },
      {
        q: 'How do you generate reports in TestNG?',
        a: 'TestNG generates default HTML/XML reports in test-output folder. Use listeners (ITestListener) for custom reporting. Integrate with Allure or ReportNG for advanced reports.',
      },
    ],
  },
  {
    category: 'Advanced TestNG',
    questions: [
      {
        q: 'What are TestNG listeners?',
        a: 'Interfaces like ITestListener, ISuiteListener to hook into test lifecycle. Implement onTestStart, onTestSuccess, onTestFailure for custom logic like logging, screenshots.',
      },
      {
        q: 'How do you run tests in parallel with TestNG?',
        a: 'Use parallel attribute in testng.xml: parallel="tests" or parallel="methods". Set thread-count for number of threads. Ensures thread safety in tests.',
      },
      {
        q: 'What is the difference between @Test and @Factory?',
        a: '@Test marks a test method. @Factory returns Object[] of test instances, allowing dynamic test generation from a factory method.',
      },
    ],
  },
];

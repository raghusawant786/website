export const seleniumQA = [
  {
    category: 'Selenium Fundamentals',
    questions: [
      {
        q: 'What is Selenium WebDriver and what are its key components?',
        a: 'Selenium WebDriver is an automation tool. Key components: WebDriver API, browser drivers (ChromeDriver, FirefoxDriver), Selenium Grid for distributed testing.',
      },
      {
        q: 'What are the different types of waits in Selenium?',
        a: 'Implicit wait: global timeout for all elements. Explicit wait (WebDriverWait): wait for specific condition. Fluent wait: polling with custom intervals. Avoid mixing them.',
      },
      {
        q: 'What is the difference between driver.get() and driver.navigate()?',
        a: 'get() waits for page load, navigate() doesn\'t always wait. navigate() supports back(), forward(), refresh(). get() is simpler for initial page load.',
      },
      {
        q: 'What are locators in Selenium?',
        a: 'Strategies to find elements: id, name, className, tagName, CSS selector, XPath, linkText, partialLinkText. XPath and CSS are most flexible.',
      },
    ],
  },
  {
    category: 'Element Interaction',
    questions: [
      {
        q: 'How do you handle stale element reference exception?',
        a: 'Occurs when element is no longer attached to DOM. Solution: re-find element, use explicit waits, refresh reference, implement retry logic.',
      },
      {
        q: 'What is the difference between click() and submit()?',
        a: 'click() simulates mouse click on element. submit() triggers form submission if element is inside a form. Use submit() for form submission.',
      },
      {
        q: 'How do you handle multiple windows/tabs in Selenium?',
        a: 'Use getWindowHandles() to get all window handles. Switch using switchTo().window(). Store handles in list, loop through, switch as needed.',
      },
      {
        q: 'How do you handle dropdown selection?',
        a: 'Use Select class: selectByValue(), selectByVisibleText(), selectByIndex(). Or use click() + select item approach for custom dropdowns.',
      },
    ],
  },
  {
    category: 'Advanced Concepts',
    questions: [
      {
        q: 'What is Selenium Grid and how does it work?',
        a: 'Selenium Grid enables distributed testing across multiple machines. Hub is central server, Nodes are remote machines. Driver connects to Hub, Hub routes to Node.',
      },
      {
        q: 'How do you handle JavaScript alerts/popups?',
        a: 'Use switchTo().alert() to switch to alert. Use accept(), dismiss(), getText(), sendKeys() methods. Handle NoAlertPresentException if no alert exists.',
      },
      {
        q: 'What are desired capabilities in Selenium?',
        a: 'Configuration settings for WebDriver: browser name, version, platform. DesiredCapabilities object passed to driver initialization. Example: chrome options, headless mode.',
      },
      {
        q: 'How do you execute JavaScript in Selenium?',
        a: 'Use JavaScriptExecutor: driver.executeScript(). Pass script string and arguments. Useful for scrolling, clicking hidden elements, getting values.',
      },
    ],
  },
  {
    category: 'Best Practices',
    questions: [
      {
        q: 'What is Page Object Model (POM)?',
        a: 'Design pattern that separates page UI elements from test logic. Each page has corresponding class with web elements and methods. Improves maintainability, reusability.',
      },
      {
        q: 'How do you handle dynamic elements?',
        a: 'Use waits instead of sleep(). Use flexible XPath/CSS selectors. Implement retry logic in waits. Handle StaleElementReferenceException.',
      },
      {
        q: 'What are common challenges in Selenium automation?',
        a: 'Timing issues (use waits), dynamic elements, cross-browser compatibility, flaky tests, maintenance overhead. Solution: proper wait strategy, POM, CI/CD integration.',
      },
    ],
  },
];

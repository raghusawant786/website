export const cucumberSerenitySections = [
  {
    id: 'bdd-fundamentals',
    title: 'BDD Fundamentals',
    icon: '🤝',
    content: `
## BDD - Behavior-Driven Development

Behavior-Driven Development is an Agile practice where the team describes expected application behavior before implementation. It helps business, development, and QA agree on examples using plain language.

**Key Principles:**
- Write scenarios in business-readable language.
- Use the 3 Amigos: Business Analyst, Developer, and QA.
- Focus on behavior and business value, not implementation details.
- Treat scenarios as living documentation.
- Follow the red, green, refactor cycle.

## BDD vs TDD vs ATDD

| Aspect | TDD | BDD | ATDD |
|--------|-----|-----|------|
| Written by | Developers | Whole team | Testers + BA |
| Language | Unit test code | Gherkin | Acceptance criteria |
| Focus | Code correctness | Business behavior | User acceptance |
| Tools | JUnit, TestNG | Cucumber, Serenity | FitNesse, Robot |

## BDD Workflow

- Discuss the story with BA, Dev, and QA.
- Convert acceptance criteria into Gherkin scenarios.
- Automate step definitions.
- Run tests and see them fail first.
- Implement code until tests pass.
- Refactor while keeping behavior green.

**Interview Focus:** The 3 Amigos meeting discovers missing examples and edge cases before coding starts.
    `,
  },
  {
    id: 'cucumber-core',
    title: 'Cucumber Core Concepts',
    icon: '🥒',
    content: `
## What is Cucumber?

Cucumber is a BDD automation framework that reads executable specifications written in Gherkin and maps them to automation code through step definitions.

**Core Components:**
- Feature files contain Gherkin scenarios.
- Step definitions connect plain English steps to Java methods.
- Hooks handle setup and teardown.
- Tags filter scenarios for selective execution.
- Runner classes configure features, glue, plugins, and reports.

## Gherkin Keywords

| Keyword | Purpose |
|---------|---------|
| Feature | Describes the feature under test |
| Background | Common steps before each scenario |
| Scenario | Single test case |
| Scenario Outline | Template for multiple test data rows |
| Given | Preconditions |
| When | User action or trigger |
| Then | Expected result |
| And / But | Additional steps |
| Examples | Data for Scenario Outline |
| @Tag | Scenario filtering |

## Feature File Example

\`\`\`gherkin
Feature: User Authentication
  As a registered user
  I want to log in
  So that I can access my account

  Background:
    Given the browser is open
    And the user navigates to "https://example.com/login"

  @SmokeTest @Regression
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters username "admin" and password "admin123"
    And the user clicks the Login button
    Then the user should be redirected to the dashboard
    And a welcome message "Hello, Admin" should be displayed
\`\`\`
    `,
  },
  {
    id: 'step-definitions-hooks-tags',
    title: 'Step Definitions, Hooks & Tags',
    icon: '🔗',
    content: `
## Step Definitions

Step definitions are Java methods mapped to Gherkin steps with Cucumber annotations.

\`\`\`java
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginSteps {
    private WebDriver driver;

    @Given("the browser is open")
    public void theBrowserIsOpen() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Given("the user navigates to {string}")
    public void navigateTo(String url) {
        driver.get(url);
    }

    @When("the user enters username {string} and password {string}")
    public void enterCredentials(String username, String password) {
        driver.findElement(By.id("username")).sendKeys(username);
        driver.findElement(By.id("password")).sendKeys(password);
    }

    @When("the user clicks the Login button")
    public void clickLogin() {
        driver.findElement(By.id("loginBtn")).click();
    }

    @Then("a welcome message {string} should be displayed")
    public void verifyWelcomeMessage(String expectedMessage) {
        String actualMessage = driver.findElement(By.id("welcomeMsg")).getText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }
}
\`\`\`

## Hooks

\`\`\`java
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hooks {
    @Before(order = 1)
    public void launchBrowser() {
        DriverManager.initDriver("chrome");
    }

    @Before(value = "@SmokeTest", order = 2)
    public void clearCookies() {
        DriverManager.getDriver().manage().deleteAllCookies();
    }

    @After
    public void takeScreenshotOnFailure(Scenario scenario) {
        if (scenario.isFailed()) {
            byte[] screenshot = ((TakesScreenshot) DriverManager.getDriver())
                    .getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot, "image/png", "Failure Screenshot");
        }
        DriverManager.quitDriver();
    }
}
\`\`\`

## Tag Expressions

| Expression | Meaning |
|------------|---------|
| @SmokeTest | Run smoke scenarios |
| @SmokeTest and @Login | Must have both tags |
| @SmokeTest or @Regression | Has either tag |
| not @WIP | Exclude work in progress |
| (@SmokeTest or @Regression) and not @WIP | Combined filtering |

**Interview Focus:** Lower order runs first for @Before hooks and last for @After hooks.
    `,
  },
  {
    id: 'advanced-cucumber',
    title: 'Advanced Cucumber',
    icon: '🧩',
    content: `
## Scenario Outline

Scenario Outline runs the same scenario multiple times with different values from an Examples table.

\`\`\`gherkin
Feature: User Login

  Scenario Outline: Login with different credentials
    Given the user is on the login page
    When the user enters username "<username>" and password "<password>"
    Then the login result should be "<result>"

    Examples:
      | username | password | result             |
      | admin    | admin123 | Login Successful   |
      | user1    | pass123  | Login Successful   |
      | admin    | wrong    | Invalid credentials |
\`\`\`

## DataTables

Use DataTables when a single step needs multiple rows of structured data.

\`\`\`gherkin
Scenario: Register multiple users
  When the admin creates the following users:
    | firstName | email            | role   |
    | John      | john@example.com | Admin  |
    | Jane      | jane@example.com | Viewer |
  Then all users should appear in the user list
\`\`\`

\`\`\`java
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.When;
import java.util.List;
import java.util.Map;

public class UserSteps {
    @When("the admin creates the following users:")
    public void createUsers(DataTable dataTable) {
        List<Map<String, String>> users = dataTable.asMaps(String.class, String.class);

        for (Map<String, String> user : users) {
            String firstName = user.get("firstName");
            String email = user.get("email");
            String role = user.get("role");
            userService.createUser(firstName, email, role);
        }
    }
}
\`\`\`

## Background vs Hooks

| Topic | Background | @Before Hook |
|-------|------------|--------------|
| Location | Feature file | Java class |
| Visibility | Visible in reports | Technical setup |
| Best for | Business setup | Browser, cookies, data cleanup |
| Execution | After @Before | Before Background |
    `,
  },
  {
    id: 'cucumber-selenium',
    title: 'Cucumber + Selenium',
    icon: '🌐',
    content: `
## Recommended Project Structure

\`\`\`text
src/test/java
  runners/TestRunner.java
  stepDefinitions/LoginSteps.java
  hooks/Hooks.java
  pages/LoginPage.java
  utils/DriverManager.java
src/test/resources
  features/login.feature
\`\`\`

## Thread-Safe DriverManager

\`\`\`java
import io.github.bonigarcia.wdm.WebDriverManager;
import java.time.Duration;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public final class DriverManager {
    private static final ThreadLocal<WebDriver> DRIVER = new ThreadLocal<>();

    private DriverManager() {
    }

    public static WebDriver getDriver() {
        return DRIVER.get();
    }

    public static void initDriver(String browser) {
        WebDriver driver;

        switch (browser.toLowerCase()) {
            case "chrome":
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                break;
            case "firefox":
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
                break;
            default:
                throw new IllegalArgumentException("Unsupported browser: " + browser);
        }

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        DRIVER.set(driver);
    }

    public static void quitDriver() {
        WebDriver driver = DRIVER.get();
        if (driver != null) {
            driver.quit();
            DRIVER.remove();
        }
    }
}
\`\`\`

## Page Object Model

\`\`\`java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    @FindBy(id = "username")
    private WebElement usernameField;

    @FindBy(id = "password")
    private WebElement passwordField;

    @FindBy(id = "loginBtn")
    private WebElement loginButton;

    @FindBy(id = "welcomeMsg")
    private WebElement welcomeMessage;

    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void login(String username, String password) {
        usernameField.clear();
        usernameField.sendKeys(username);
        passwordField.clear();
        passwordField.sendKeys(password);
        loginButton.click();
    }

    public String getWelcomeMessage() {
        return welcomeMessage.getText();
    }
}
\`\`\`
    `,
  },
  {
    id: 'runner-reports',
    title: 'Runner, Options & Reports',
    icon: '📊',
    content: `
## TestRunner with CucumberOptions

\`\`\`java
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = {"stepDefinitions", "hooks"},
        plugin = {
                "pretty",
                "html:target/cucumber-reports/report.html",
                "json:target/cucumber-reports/report.json",
                "junit:target/cucumber-reports/report.xml",
                "rerun:target/failedTests.txt"
        },
        tags = "@SmokeTest and not @WIP",
        dryRun = false,
        monochrome = true,
        publish = false
)
public class TestRunner {
}
\`\`\`

## Important CucumberOptions

| Option | Purpose |
|--------|---------|
| features | Path to feature files |
| glue | Packages containing step definitions and hooks |
| tags | Filter scenarios |
| plugin | Configure reports |
| dryRun | Validate step mappings without running browser steps |
| monochrome | Cleaner console output |
| publish | Publish report to Cucumber service |

## Report Plugins

- pretty: readable console output.
- html: local HTML report.
- json: machine-readable output for report integrations.
- junit: XML output for Jenkins and CI.
- rerun: stores failed scenario paths for re-execution.
- timeline: visual timeline for parallel execution.

**Interview Focus:** \`dryRun = true\` is used to verify undefined or missing step definitions without executing the test flow.
    `,
  },
  {
    id: 'maven-commands',
    title: 'Maven Commands',
    icon: '⌨️',
    content: `
## Common Commands

\`\`\`bash
mvn test
mvn clean test
mvn test -Dcucumber.filter.tags="@SmokeTest"
mvn test -Dcucumber.filter.tags="@Smoke and @Login"
mvn test -Dcucumber.filter.tags="@Smoke or @Regression"
mvn test -Dcucumber.filter.tags="not @WIP"
mvn test -Dcucumber.features="src/test/resources/features/Login.feature"
mvn test -Dcucumber.plugin="html:target/report.html"
mvn test -Dcucumber.plugin="json:target/report.json"
mvn clean install -DskipTests
mvn test -Dparallel=classes -DthreadCount=4
mvn test -Dcucumber.features="@target/failedTests.txt"
\`\`\`

## Surefire Parallel Execution

\`\`\`xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>3.0.0</version>
    <configuration>
        <parallel>classes</parallel>
        <threadCount>4</threadCount>
        <perCoreThreadCount>true</perCoreThreadCount>
    </configuration>
</plugin>
\`\`\`

**Senior Tip:** For parallel browser runs, use ThreadLocal WebDriver and avoid shared mutable state in step definition classes.
    `,
  },
  {
    id: 'serenity-introduction',
    title: 'Serenity BDD Introduction',
    icon: '📝',
    content: `
## What is Serenity BDD?

Serenity BDD enhances Cucumber and JUnit tests with rich living documentation, automatic screenshots, managed WebDriver, step instrumentation, and detailed reports.

## Serenity vs Plain Cucumber

| Feature | Plain Cucumber | Serenity BDD |
|---------|----------------|--------------|
| Reports | Basic HTML/JSON | Rich narrative HTML |
| Screenshots | Manual hooks | Automatic by setting |
| Living docs | Limited | Full feature coverage |
| Step reuse | Manual | @Step methods |
| WebDriver | Manual management | @Managed support |
| Page objects | Standard POM | PageObject + WebElementFacade |

## Key Serenity Concepts

- @Steps injects and instruments a Steps class.
- @Step records a reusable business action in the report.
- PageObject provides built-in driver, waits, and helper methods.
- @Managed lets Serenity create and clean up WebDriver.
- CucumberWithSerenity runs Cucumber with Serenity reporting.
- Serenity reports show steps, screenshots, requirements, and coverage.

**Interview Focus:** Serenity does not replace Cucumber. It wraps and enhances Cucumber with reporting, WebDriver management, and living documentation.
    `,
  },
  {
    id: 'serenity-cucumber-integration',
    title: 'Serenity + Cucumber Integration',
    icon: '🧪',
    content: `
## Maven Dependencies

\`\`\`xml
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-core</artifactId>
    <version>3.6.12</version>
</dependency>
<dependency>
    <groupId>net.serenity-bdd</groupId>
    <artifactId>serenity-cucumber</artifactId>
    <version>3.6.12</version>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
\`\`\`

## Serenity Runner

\`\`\`java
import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = {"stepDefinitions"},
        plugin = {"pretty"},
        tags = "@SmokeTest"
)
public class CucumberTestSuite {
}
\`\`\`

## Serenity Steps Class

\`\`\`java
import net.thucydides.core.annotations.Step;

public class LoginActions {
    LoginPage loginPage;

    @Step("Open the login page")
    public void openLoginPage() {
        loginPage.open();
    }

    @Step("Enter username {0} and password {1}")
    public void enterCredentials(String username, String password) {
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
    }

    @Step("Verify welcome message is {0}")
    public void verifyWelcomeMessage(String expectedMessage) {
        loginPage.welcomeMessage().shouldContainText(expectedMessage);
    }
}
\`\`\`

## Step Definition Using @Steps

\`\`\`java
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;

public class LoginStepDefinitions {
    @Steps
    LoginActions loginActions;

    @Given("the user is on the login page")
    public void userIsOnLoginPage() {
        loginActions.openLoginPage();
    }

    @When("the user logs in with {string} and {string}")
    public void login(String username, String password) {
        loginActions.enterCredentials(username, password);
    }

    @Then("the welcome message {string} should be displayed")
    public void verifyWelcomeMessage(String message) {
        loginActions.verifyWelcomeMessage(message);
    }
}
\`\`\`
    `,
  },
  {
    id: 'serenity-config-qa',
    title: 'Serenity Config & Interview Q&A',
    icon: '✅',
    content: `
## serenity.properties

\`\`\`properties
webdriver.driver=chrome
webdriver.base.url=https://example.com
serenity.take.screenshots=AFTER_EACH_STEP
serenity.project.name=My BDD Project
serenity.report.encoding=UTF-8
home.page=https://example.com
\`\`\`

## Screenshot Options

| Option | Meaning |
|--------|---------|
| FOR_EACH_ACTION | Screenshot after every WebDriver action |
| BEFORE_AND_AFTER_EACH_STEP | Before and after each Serenity step |
| AFTER_EACH_STEP | Balanced option for reporting |
| FOR_FAILURES | Screenshots only on failure |
| DISABLED | No screenshots |

## Running Serenity Reports

\`\`\`bash
mvn clean verify
mvn clean verify -Dcucumber.filter.tags="@SmokeTest"
mvn serenity:aggregate
\`\`\`

Reports are generated at \`target/site/serenity/index.html\`.

## Most Asked Questions

| Question | Short Answer |
|----------|--------------|
| What is @Steps? | Injects and instruments a Serenity Steps class |
| What is @Step? | Records a method as a reportable business step |
| Where are reports generated? | target/site/serenity/index.html |
| Why Serenity over Cucumber? | Better reports, screenshots, managed driver, living documentation |
| Background vs @Before? | Background is business-visible; @Before is technical setup |
| Scenario Outline vs DataTable? | Outline repeats scenario; DataTable passes rows into one step |
| Missing step definition? | Cucumber marks it undefined and suggests a snippet |
| Parallel execution? | Use Maven parallel settings and thread-safe driver management |
    `,
  },
];

export const seleniumSections = [
  {
    id: 'architecture-webdriver',
    title: 'Selenium Architecture & WebDriver Internals',
    content: `
## How WebDriver Works

Selenium WebDriver is **not a browser plugin**. It is an HTTP client that speaks to a browser-specific driver executable (chromedriver, geckodriver, msedgedriver) via RESTful endpoints.

### Execution Flow:
\`\`\`
Test Script (Java/Python)
  → HTTP Request (W3C Protocol)
  → Driver Executable (chromedriver on port 9511)
  → Browser (Chrome/FF/Edge)
  → JSON Response (element ID, screenshot bytes, etc.)
\`\`\`

**Key Insight:** Every \`driver.findElement()\` is an HTTP POST to \`/session/{id}/element\`. Every \`element.click()\` is a POST to \`/session/{id}/element/{id}/click\`.

## WebElement Hierarchy Architecture

### Interface Hierarchy:

\`\`\`
SearchContext [interface]
    ├── findElement()
    └── findElements()
          ↓
          ↓ EXTENDS
          ↓
    WebElement [interface]
    ├── click()
    ├── getText()
    ├── isSelected()
    ├── isEnabled()
          ↓
          ↓ EXTENDS
          ↓
    RemoteWebElement [fully implemented class]
\`\`\`

### Key Classes in WebElement Hierarchy:

1. **SearchContext Interface**
   - Defines methods to find elements: \`findElement()\`, \`findElements()\`
   - Base contract for any object that can search within itself

2. **WebElement Interface**
   - Extends SearchContext
   - Defines element interactions: \`click()\`, \`sendKeys()\`, \`submit()\`
   - Defines element state queries: \`isDisplayed()\`, \`isEnabled()\`, \`isSelected()\`
   - Defines element properties: \`getAttribute()\`, \`getText()\`, \`getTagName()\`

3. **RemoteWebElement Class**
   - Fully implemented class implementing WebElement
   - Used for remote interactions via WebDriver protocol
   - Handles serialization/deserialization of element references

### Key Methods:

\`\`\`java
// SearchContext methods
WebElement findElement(By by)
List<WebElement> findElements(By by)

// WebElement methods
void click()
void sendKeys(CharSequence... keysToSend)
void submit()
String getText()
String getAttribute(String name)
String getCssValue(String propertyName)
boolean isDisplayed()
boolean isEnabled()
boolean isSelected()
Rectangle getRect()
Dimension getSize()
Point getLocation()
\`\`\`

## WebDriver Implementation Hierarchy

### Driver Class Hierarchy:

![WebDriver Class Hierarchy](/website/resources/selenium%20art.png)

**Diagram Explanation:**

- **SearchContext [interface]** → Base interface defining element search methods
- **WebDriver [interface]** → Extends SearchContext, defines all browser operations
  - Abstract Methods: \`get()\`, \`close()\`, \`quit()\`, \`getWindowHandle()\`, \`getTitle()\`, \`getCurrentUrl()\`
  - Nested Interfaces: Window, Navigation, TargetLocator, timeHandler, timeOut
- **RemoteWebDriver [class]** → Core HTTP-based implementation
  - Implements WebDriver interface
  - Communicates with browser drivers via W3C protocol
  - Base class for all browser-specific drivers
- **Browser-Specific Drivers:**
  - **ChromiumDriver** → Base for Chromium-based browsers
    - **ChromeDriver** → Controls Google Chrome
  - **FirefoxDriver** → Controls Mozilla Firefox
  - **EdgeDriver** → Controls Microsoft Edge
  - **SafariDriver** → Controls Apple Safari

### Key Driver Classes:

1. **WebDriver Interface**
   - Abstract definition of all WebDriver methods
   - Contains nested interfaces for specific operations
   - Defines core browser operations: \`get()\`, \`quit()\`, \`getWindowHandle()\`

2. **RemoteWebDriver Class**
   - Core implementation of WebDriver
   - Communicates with browser via HTTP (W3C Protocol)
   - Base class for all browser-specific drivers
   - Fully implements W3C WebDriver specification

3. **Browser-Specific Drivers**
   - **ChromeDriver** → extends RemoteWebDriver → controls Chrome/Chromium
   - **FirefoxDriver** → extends RemoteWebDriver → controls Firefox
   - **EdgeDriver** → extends RemoteWebDriver → controls Microsoft Edge
   - **SafariDriver** → extends RemoteWebDriver → controls Safari

### WebDriver Nested Interfaces:

\`\`\`java
// Navigation interface - handles page navigation
driver.navigate().to(url)
driver.navigate().back()
driver.navigate().forward()
driver.navigate().refresh()

// TargetLocator interface - switches context
driver.switchTo().window(handle)
driver.switchTo().frame(element)
driver.switchTo().alert()
driver.switchTo().defaultContent()

// Window interface - manages window properties
driver.manage().window().maximize()
driver.manage().window().setSize(dimension)
driver.manage().window().getSize()

// Timeouts interface - sets implicit/explicit waits
driver.manage().timeouts().implicitlyWait(duration)
driver.manage().timeouts().pageLoadTimeout(duration)

// Options interface - manages driver options
driver.manage().getCookies()
driver.manage().addCookie(cookie)
driver.manage().deleteAllCookies()
\`\`\`

## Execution Flow Diagram

\`\`\`
┌─────────────────────────────────────────┐
│       Test Code (Java/Python)           │
│  WebDriver driver = new ChromeDriver(); │
│  driver.get("https://example.com");     │
└────────────────┬────────────────────────┘
                 │
                 ↓
┌──────────────────────────────────────┐
│   Selenium Language Bindings         │
│   (Java, Python, C#, Ruby, etc)      │
│   - Serializes commands to JSON      │
│   - HTTP client via W3C Protocol     │
└────────────────┬─────────────────────┘
                 │
                 ↓ HTTP POST/GET
┌──────────────────────────────────────┐
│   Browser Driver Executable          │
│   (chromedriver, geckodriver, etc)   │
│   - Listens on port 9515/9516/etc   │
│   - RESTful WebDriver API            │
└────────────────┬─────────────────────┘
                 │
                 ↓ Chrome DevTools Protocol (CDP)
┌──────────────────────────────────────┐
│   Web Browser (Chrome/FF/Edge)       │
│   - Executes commands                │
│   - Returns JSON response            │
│   - Element references               │
└──────────────────────────────────────┘
\`\`\`

## Selenium 3 vs Selenium 4

| Aspect | Selenium 3 | Selenium 4 |
|--------|-----------|-----------|
| Protocol | JSON Wire Protocol (JWP) | W3C WebDriver Standard |
| Capabilities | \`DesiredCapabilities\` | \`Options\` classes (\`ChromeOptions\`) |
| Driver Management | WebDriverManager (external lib) | SeleniumManager (built-in since 4.6) |
| CDP Access | Not available | Native Chrome DevTools Protocol |
| Window/Tab | Manual JS workarounds | \`driver.switchTo().newWindow(WindowType.TAB)\` |
| Relative Locators | Not available | \`RelativeLocator\` (Friendly locators) |
| Screenshots | Viewport only | Full page + WebElement screenshots |
| Architecture | JWP endpoints | W3C standard endpoints |

**Interview Tip:** Selenium 4 removed \`DesiredCapabilities\` as the primary mechanism. Always pass Options objects to RemoteWebDriver for W3C compliance.

## W3C Protocol Deep Dive

- **Why it matters:** JWP used custom OSS endpoints. W3C standardizes payload shape (\`capabilities.alwaysMatch\`, \`capabilities.firstMatch\`)
- **Impact:** Cloud providers (BrowserStack, SauceLabs) migrated to W3C. Legacy JWP capabilities are silently dropped
- **Modern Capabilities Example:**

\`\`\`java
ChromeOptions options = new ChromeOptions();
options.setCapability("browserName", "chrome");
options.setCapability("browserVersion", "latest");
options.setCapability("platformName", "Linux");
// W3C standard keys
\`\`\`

## WebDriverManager / SeleniumManager

- **Selenium 4.6+:** \`SeleniumManager\` (Rust binary) auto-downloads drivers and browsers
- **Legacy:** Boni Garcia's \`WebDriverManager\` library. Still useful for custom mirror URLs
- **Enterprise CI:** Behind a firewall, SeleniumManager may fail. Pre-download drivers to shared mount

### SeleniumManager Example:

\`\`\`java
// Selenium 4.6+ - Automatic driver management
WebDriver driver = new ChromeDriver(); // Auto-downloads chromedriver

// Legacy WebDriverManager approach
WebDriverManager.chromedriver().setup();
WebDriver driver = new ChromeDriver();
\`\`\`

## Interview Q&A on Architecture

**Q: What is the difference between WebDriver and RemoteWebDriver?**

**A:** WebDriver is the interface defining all operations. RemoteWebDriver is the concrete implementation that communicates with a browser driver via HTTP. When you instantiate ChromeDriver, FirefoxDriver, etc., you're creating RemoteWebDriver instances.

**Q: Why can't you directly access element properties after closing the driver?**

**A:** Elements are references to DOM nodes maintained by the browser driver. Once \`driver.quit()\` is called, the WebDriver session is destroyed, and all element references become invalid. Attempting to interact with elements throws \`StaleElementReferenceException\`.

**Q: How does Selenium serialize element references?**

**A:** When an element is found, the browser driver returns a unique element reference (UUID). Selenium maintains this reference internally. When you interact with the element, Selenium sends the element reference along with the command to the driver.

**Q: What is the role of SearchContext interface?**

**A:** SearchContext defines the contract for finding elements. Both WebDriver and WebElement implement SearchContext, enabling nested searches. This allows searching within a specific element (e.g., finding child elements).
    `
  },
  {
    id: 'locators-advanced',
    title: 'Locators: Advanced Strategies',
    content: `
## Locator Priority (Performance)

1. **ID** – Fastest, O(1) lookup in browser engines
2. **Name** – Good for form elements
3. **CSS Selector** – Native \`querySelector\`, faster than XPath
4. **XPath** – Most flexible, traverses DOM tree; slower on large pages
5. **Link Text / Partial** – Readable but brittle
6. **Tag Name / Class Name** – Too generic; use only with parent context

**Rule:** Never use absolute XPath \`//*\`. Never use auto-generated Chrome DevTools copy-XPath blindly.

## Advanced XPath Techniques

| Technique | Syntax | When to Use |
|-----------|--------|------------|
| Text contains | \`//button[contains(text(),'Submit')]\` | Dynamic buttons with stable text |
| Normalize space | \`//span[normalize-space()='Price']\` | Text with whitespace or leading spaces |
| Following-sibling | \`//td[text()='Label']/following-sibling::td[1]\` | Table cell next to known label |
| Ancestor | \`//input[@id='x']/ancestor::form[1]\` | Find parent form from child |
| Parent | \`//span[text()='X']/parent::div\` | Traverse up one level |
| AND/OR | \`//input[@type='text' and @name='user']\` | Multiple attribute match |
| Starts-with | \`//div[starts-with(@id,'prefix-')]\` | Dynamic IDs with static prefix |
| Position/Index | \`(//div[@class='item'])[3]\` | Specific index in list |
| Last | \`(//div[@class='item'])[last()]\` | Last item in dynamic list |

## CSS Selector Advanced

\`\`\`css
/* Prefix match */
input[id^='user']

/* Suffix match */
input[id$='name']

/* Substring */
input[id*='email']

/* Direct child */
div.container > input.form-control

/* Pseudo-classes */
tr:nth-child(2)
button:not([disabled])
li:first-child, li:last-child
\`\`\`

**Why CSS over XPath?** CSS selectors are resolved by browser's native \`querySelector\` API (optimized C++). XPath is slower by 10-30% on average.

## Selenium 4 Relative Locators

Used when an element has no stable attributes but is spatially related to a stable anchor.

\`\`\`java
import static org.openqa.selenium.support.locators.RelativeLocator.with;

WebElement ref = driver.findElement(By.id("username"));
WebElement pwd = driver.findElement(with(By.tagName("input")).below(ref));
WebElement cancel = driver.findElement(with(By.tagName("button")).toLeftOf(By.id("submit")));
\`\`\`

**Internals:** Selenium executes JavaScript \`getBoundingClientRect()\` on reference and target elements to determine spatial relationships.

**Pitfall:** Relative locators are NOT reliable in responsive layouts where element positions change based on viewport.

## Shadow DOM Handling

Modern web components (Lit, Stencil, Angular) encapsulate DOM inside ShadowRoot.

### Selenium 4 Approach (Open ShadowRoot):

\`\`\`java
SearchContext shadowRoot = driver.findElement(By.cssSelector("bookapp")).getShadowRoot();
WebElement book = shadowRoot.findElement(By.cssSelector(".book-title"));
\`\`\`

### Closed Shadow DOM:

\`\`\`java
JavascriptExecutor js = (JavascriptExecutor) driver;
WebElement element = (WebElement) js.executeScript(
  "return document.querySelector('bookapp').shadowRoot.querySelector('.book-title')"
);
\`\`\`

**Best Practice:** Ask devs to add \`shadowRoot.mode = 'open'\` for testability.
    `
  },
  {
    id: 'waits-synchronization',
    title: 'Waits & Synchronization',
    content: `
## Implicit Wait

\`\`\`java
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
\`\`\`

- **Scope:** Global for the \`WebDriver\` instance lifetime
- **Mechanism:** Polls DOM every 500ms until element found or timeout
- **Senior Opinion:** Avoid in enterprise frameworks. It makes negative tests slow and masks real timing issues

## Explicit Wait (The Standard)

\`\`\`java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));
WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("submit")));
\`\`\`

### Custom ExpectedCondition (Lambda):

\`\`\`java
WebElement toast = wait.until(d -> {
  WebElement el = d.findElement(By.cssSelector(".toast-message"));
  return el.isDisplayed() ? el : null;
});
\`\`\`

**Why use Explicit?**
- Condition-specific (visible, clickable, present, stale-refreshed)
- Non-intrusive: only affects the specific element
- Throws \`TimeoutException\` with clear stack trace

## Fluent Wait

\`\`\`java
Wait<WebDriver> fluent = new FluentWait<>(driver)
  .withTimeout(Duration.ofSeconds(30))
  .pollingEvery(Duration.ofMillis(500))
  .ignoring(NoSuchElementException.class)
  .ignoring(StaleElementReferenceException.class);

Boolean loaded = fluent.until(d -> 
  d.findElement(By.id("spinner")).getAttribute("class").contains("hidden"));
\`\`\`

**When to use:** Polling APIs, file processing UIs, elements with rapid state transitions.

## Synchronization in SPAs (React/Angular/Vue)

\`\`\`java
// Wait for jQuery AJAX (legacy)
Boolean ajaxDone = (Boolean) js.executeScript(
  "return window.jQuery != undefined && jQuery.active == 0"
);

// Wait for Angular
Boolean angularReady = (Boolean) js.executeScript(
  "return window.getAllAngularTestabilities().findIndex(x => !x.isStable()) === -1"
);

// Generic: Wait for loading overlay to disappear
wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("loadingoverlay")));
\`\`\`

**Pitfall:** Never mix Implicit + Explicit. The waits compound unpredictably.
    `
  },
  {
    id: 'frames-alerts-windows',
    title: 'Frames, Alerts, Windows, Tabs',
    content: `
## Frames & iFrames

Always switch context. Selenium executes commands in the current context only.

\`\`\`java
// By index (fragile)
driver.switchTo().frame(0);

// By ID/Name
driver.switchTo().frame("frameName");

// By WebElement (robust)
driver.switchTo().frame(driver.findElement(By.cssSelector("iframe[src*='login']")));

// Nested frames: chain switches
driver.switchTo().frame("outer").switchTo().frame("inner");

// Return to main
driver.switchTo().defaultContent();

// Return one level up
driver.switchTo().parentFrame();
\`\`\`

**Wait Strategy:** Use \`ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.id("frame"))\`.

## Alerts

\`\`\`java
Alert alert = wait.until(ExpectedConditions.alertIsPresent());
String text = alert.getText();
alert.sendKeys("confirmation");
alert.accept(); // or alert.dismiss();
\`\`\`

**Pitfall:** \`NoAlertPresentException\` occurs if you switch before the alert is triggered. Always use Explicit wait.

## Windows & Tabs (Selenium 4)

\`\`\`java
// Open new tab
driver.switchTo().newWindow(WindowType.TAB);

// Open new window
driver.switchTo().newWindow(WindowType.WINDOW);

// Switch by handle
String original = driver.getWindowHandle();
for (String handle : driver.getWindowHandles()) {
  if (!handle.equals(original)) {
    driver.switchTo().window(handle);
    break;
  }
}
\`\`\`

**Senior Tip:** In pop-up heavy apps, maintain a Deque of window handles as a stack to return to the correct context.
    `
  },
  {
    id: 'actions-javascript',
    title: 'Actions Class & JavaScriptExecutor',
    content: `
## Actions Class

Builds composite actions. Useful for hover menus, drag-and-drop, slider controls.

\`\`\`java
Actions actions = new Actions(driver);
actions.moveToElement(menu)
  .pause(Duration.ofMillis(500))
  .click(subMenu)
  .build()
  .perform();

// Drag and Drop
actions.dragAndDrop(source, target).perform();

// Click and hold with offset (sliders)
actions.clickAndHold(slider)
  .moveByOffset(200, 0)
  .release()
  .perform();
\`\`\`

**Pitfall:** \`moveToElement\` scrolls to the element's center. If a sticky header covers it, use \`moveToElement(element, xOffset, yOffset)\` or JS scroll.

## JavaScriptExecutor

Use when WebDriver actions are blocked by framework event handling or element obscurity.

\`\`\`java
JavascriptExecutor js = (JavascriptExecutor) driver;

// Scroll into view
js.executeScript("arguments[0].scrollIntoView({block: 'center'});", element);

// Click bypassing overlay
js.executeScript("arguments[0].click();", element);

// Remove readonly for datepickers
js.executeScript("arguments[0].removeAttribute('readonly');", dateInput);

// Set value directly (bypasses key events; may break React state)
js.executeScript(
  "arguments[0].value='2024-01-01'; arguments[0].dispatchEvent(new Event('input'));",
  input
);
\`\`\`

**When NOT to use JS:** If the application relies on \`onChange\`/\`onInput\` events for state management (React controlled components), setting \`.value\` directly may leave the component in an inconsistent state. Prefer \`sendKeys\` or use \`dispatchEvent\`.
    `
  },
  {
    id: 'dropdowns-file-operations',
    title: 'Dropdowns, File Upload/Download',
    content: `
## Dropdown Handling

### Native HTML <select>

\`\`\`java
Select select = new Select(driver.findElement(By.id("country")));
select.selectByVisibleText("India");
select.selectByValue("IN");
select.selectByIndex(2);

// Multi-select
if (select.isMultiple()) {
  select.deselectAll();
}
\`\`\`

### Custom Dropdown (div/ul/li)

\`\`\`java
driver.findElement(By.id("dropdown-trigger")).click();
wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//li[text()='Option 2']"))).click();
\`\`\`

## File Upload

### Best way: direct sendKeys to <input type="file">

\`\`\`java
WebElement upload = driver.findElement(By.cssSelector("input[type='file']"));
String filePath = System.getProperty("user.dir") + "/data/report.pdf";
upload.sendKeys(filePath);
\`\`\`

Element may be hidden; unhide via JS if needed.

### If input is not present (e.g., drag-drop zone):

- Use CDP \`DOM.setFileInputFiles\` (Selenium 4 + Chrome)
- Or use Robot class (brittle, OS-specific)
- Or Sikuli/AutoIT (not recommended for CI)

## File Download (Chrome)

\`\`\`java
ChromeOptions options = new ChromeOptions();
Map<String, Object> prefs = new HashMap<>();
prefs.put("download.default_directory", "/path/to/downloads");
prefs.put("download.prompt_for_download", false);
prefs.put("download.directory_upgrade", true);
prefs.put("safebrowsing.enabled", true);
options.setExperimentalOption("prefs", prefs);
\`\`\`

### Headless Download Issue:

\`\`\`java
((ChromeDriver)driver).executeCdpCommand("Page.setDownloadBehavior",
  Map.of("behavior", "allow", "downloadPath", "/path"));
\`\`\`
    `
  },
  {
    id: 'dynamic-elements-stale',
    title: 'Dynamic Elements & StaleElementReferenceException',
    content: `
## Handling Dynamic Elements

- **Attribute changes:** Use \`contains()\`, \`starts-with()\`, or CSS substring selectors
- **List iteration:** Always re-query the list inside the loop if the DOM refreshes

\`\`\`java
List<WebElement> rows = driver.findElements(By.cssSelector("tr.item"));
for (int i = 0; i < rows.size(); i++) {
  // Re-find to avoid StaleElement
  WebElement row = driver.findElements(By.cssSelector("tr.item")).get(i);
  row.findElement(By.cssSelector("button.delete")).click();
  wait.until(ExpectedConditions.stalenessOf(row)); // wait until it disappears
}
\`\`\`

## StaleElementReferenceException (SERE)

**Root Cause:** The element's ID in the DOM changed (React re-render, AJAX refresh, pagination).

### Solutions (in order of preference):

#### 1. Re-find inside loop/catch:

\`\`\`java
public void safeClick(By locator) {
  for (int i = 0; i < 3; i++) {
    try {
      driver.findElement(locator).click();
      return;
    } catch (StaleElementReferenceException e) {
      if (i == 2) throw e;
      wait.until(ExpectedConditions.presenceOfElementLocated(locator));
    }
  }
}
\`\`\`

#### 2. Use ExpectedConditions.refreshed():

\`\`\`java
wait.until(ExpectedConditions.refreshed(
  ExpectedConditions.elementToBeClickable(By.id("dynamicBtn"))
));
\`\`\`

#### 3. POM without caching:

Use By locators instead of @FindBy proxies if the page is highly dynamic.

**Interview Q:** Why does Page Factory cause more SERE in React apps?

**Answer:** PageFactory.initElements creates proxy WebElement instances. If the DOM node is recycled by React, the proxy's cached element reference becomes stale. Using By locators and re-finding on every interaction is safer for SPAs.
    `
  },
  {
    id: 'exception-handling',
    title: 'Exception Handling Strategies',
    content: `
## Common Exceptions & Resolution

| Exception | Root Cause | Fix |
|-----------|-----------|-----|
| \`NoSuchElementException\` | Locator wrong, element not yet loaded | Explicit wait, verify locator |
| \`TimeoutException\` | Condition not met in wait time | Increase wait, check condition logic |
| \`ElementNotInteractableException\` | Element hidden, disabled, or obscured | Scroll, wait for overlay, JS click |
| \`StaleElementReferenceException\` | DOM refreshed | Re-find element, use \`refreshed()\` |
| \`NoAlertPresentException\` | Alert not yet triggered | Explicit wait for alert |
| \`NoSuchFrameException\` | Frame not loaded or wrong ID | Wait for frame availability |
| \`SessionNotFoundException\` | Browser crashed or \`driver.quit()\` called | Restart driver, check resource limits |
| \`ElementClickInterceptedException\` | Overlay (cookie banner, modal) | Close banner, scroll, JS click |

## Retry Mechanism (TestNG)

\`\`\`java
public class RetryAnalyzer implements IRetryAnalyzer {
  private int count = 0;
  private static final int MAX_RETRY = 2;

  @Override
  public boolean retry(ITestResult result) {
    if (count < MAX_RETRY) {
      count++;
      return true;
    }
    return false;
  }
}

// In test class
@Test(retryAnalyzer = RetryAnalyzer.class)
public void flakyTest() { ... }
\`\`\`

**Senior Tip:** Combine with a Listener to reset count and log retry attempts to Extent Reports. Never retry without root-cause analysis.

## Global Listener for Screenshots

\`\`\`java
public class TestListener implements ITestListener {
  @Override
  public void onTestFailure(ITestResult result) {
    WebDriver driver = BaseTest.getDriver(); // ThreadLocal retrieval
    File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    // Attach to Allure or Extent
  }
}
\`\`\`
    `
  },
  {
    id: 'selenium-grid-parallel',
    title: 'Selenium Grid 4, Parallel Execution & Infrastructure',
    content: `
## Selenium Grid 4 Architecture

Grid 4 is fully distributed with separate components:

- **Router:** Entry point, routes to correct node
- **Distributor:** Registers and tracks nodes
- **SessionMap:** Stores active session info (Redis-backed for scale)
- **EventBus:** Communicates events between components
- **Node:** Runs browsers

### Docker Deployment:

\`\`\`yaml
services:
  selenium-hub:
    image: selenium/hub:4.18
    ports: ["4442:4442", "4443:4443", "4444:4444"]
  chrome:
    image: selenium/node-chrome:4.18
    shm_size: 2gb
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_NODE_MAX_SESSIONS=4
\`\`\`

## Parallel Execution

\`\`\`xml
<!-- TestNG suite xml -->
<suite name="ParallelSuite" parallel="methods" thread-count="8">
\`\`\`

### Thread Safety: ThreadLocal is mandatory

\`\`\`java
public class DriverManager {
  private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

  public static WebDriver getDriver() {
    return driver.get();
  }

  public static void setDriver(WebDriver drv) {
    driver.set(drv);
  }

  public static void quit() {
    if (getDriver() != null) {
      getDriver().quit();
      driver.remove();
    }
  }
}
\`\`\`

**Pitfall:** Static WebDriver variable without ThreadLocal causes tests to overwrite each other's browser instances, leading to \`NoSuchSessionException\`.

## Headless Execution

\`\`\`java
ChromeOptions options = new ChromeOptions();
options.addArguments("--headless=new"); // Chrome 109+
options.addArguments("--disable-gpu");
options.addArguments("--window-size=1920,1080");
\`\`\`

- **When to use:** CI/CD pipelines, smoke tests, Linux agents
- **When NOT to use:** Visual regression, OS-native dialogs, font rendering checks, download tests

## Cross-Browser & Cloud

### BrowserStack/SauceLabs W3C Example:

\`\`\`java
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("name", "Login Test");
sauceOptions.setCapability("build", "v1.2.3");

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("latest");
browserOptions.setCapability("sauce:options", sauceOptions);

WebDriver driver = new RemoteWebDriver(new URL(GRID_URL), browserOptions);
\`\`\`
    `
  },
  {
    id: 'design-patterns',
    title: 'Design Patterns in Automation',
    content: `
## Page Object Model (POM)

### Golden Rules:

- Page class = one web page or significant fragment
- Locators: \`private By\` fields. Never expose WebElements publicly
- Methods return Page Objects for navigation flow
- No assertions inside Page Objects

\`\`\`java
public class LoginPage {
  private final WebDriver driver;
  private final By usernameBy = By.id("username");
  private final By passwordBy = By.id("password");
  private final By loginBtnBy = By.id("login");

  public LoginPage(WebDriver driver) {
    this.driver = driver;
  }

  public LoginPage enterUsername(String user) {
    driver.findElement(usernameBy).sendKeys(user);
    return this;
  }

  public HomePage clickLogin() {
    driver.findElement(loginBtnBy).click();
    return new HomePage(driver);
  }
}
\`\`\`

## Page Factory vs Raw POM

### Page Factory:

\`\`\`java
public class LoginPage {
  @FindBy(id = "username") private WebElement username;

  public LoginPage(WebDriver driver) {
    PageFactory.initElements(new AjaxElementLocatorFactory(driver, 10), this);
  }
}
\`\`\`

- **Pros:** Less boilerplate, lazy loading via proxy
- **Cons:** Proxies cache element references. In SPAs with virtual DOM diffing, this causes SERE. Also uses reflection (marginally slower)
- **Senior Verdict:** For enterprise SPAs (React/Angular), prefer **Raw POM with By locators** and explicit re-finding

## Other Patterns

- **Singleton (DriverManager):** Ensures one driver instance per thread using ThreadLocal
- **Factory Pattern (BrowserFactory):** Create driver instances based on browser type
- **Builder Pattern:** Complex test data or configuration
- **Dependency Injection:** Decouple test logic from driver/page instantiation (Guice, Spring)
    `
  },
  {
    id: 'reporting-listeners-cicd',
    title: 'Reporting, Listeners, CI/CD',
    content: `
## Reporting: ExtentReports vs Allure

| Feature | ExtentReports | Allure |
|---------|---------------|--------|
| Setup | Java API, HTML output | Java annotations, JSON + HTML |
| Screenshots | Manual attach via API | \`@Attachment\` annotation |
| History | Basic | Built-in trend/history |
| CI Integration | HTML publish | Jenkins/TeamCity plugin |
| Readability | Business-friendly | Dev/QA friendly |

### ExtentReports Example:

\`\`\`java
ExtentTest test = extent.createTest("Login Test");
test.log(Status.INFO, "Navigating to URL");
try {
  // test steps
  test.pass("Login successful");
} catch (Exception e) {
  test.fail(e.getMessage(),
    MediaEntityBuilder.createScreenCaptureFromPath(path).build());
}
\`\`\`

## TestNG Listeners

- **ITestListener:** Test start/pass/fail/skip events
- **IInvokedMethodListener:** Before/after every configuration/test method
- **IReporter:** Custom report generation after suite
- **IMethodInterceptor:** Reorder/filter tests at runtime

## Jenkins CI/CD

### Jenkinsfile (Declarative Pipeline):

\`\`\`groovy
pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: '...'
      }
    }
    stage('Test') {
      steps {
        sh 'mvn clean test -Dsuite=regression.xml -Dbrowser=chrome -DthreadCount=4'
      }
    }
    stage('Report') {
      steps {
        allure includeProperties: false, jdk: '', results: [[path: 'target/allure-results']]
      }
    }
  }
}
\`\`\`

## Git Branching Strategy

- **Mono-repo:** Automation PRs run smoke tests against app branch. Shift-left
- **Separate repo:** Use \`main\` for stable release suite, \`develop\` for active work, \`feature/*\` for new tests. Tag releases matching app versions
- **Pre-merge checks:** Run \`@smoke\` tagged tests on every PR. Full \`@regression\` nightly
    `
  },
  {
    id: 'advanced-topics',
    title: 'Advanced Topics',
    content: `
## Selenium Limitations

### 1. Desktop/Mobile Native
Selenium is for web only. Use Appium for mobile, WinAppDriver/Sikuli for desktop.

### 2. CAPTCHA/reCAPTCHA
Designed to prevent automation. Bypass via:
- Test environment flags to disable
- API keys/secrets injected via config
- Visual AI (last resort, not recommended for production CI)

### 3. Canvas/WebGL
Cannot inspect internal elements. Use screenshot comparison or JS execution.

### 4. Browser Dialogs (Basic Auth)
Use CDP \`Network.enable\` with \`Fetch.continueWithAuth\`, or embed credentials in URL \`https://user:pass@site.com\` (insecure).

### 5. File System
Sandboxed. Use profile prefs or CDP for downloads.

## AI in Test Automation

- **Self-Healing Locators:** Tools like Healenium use ML to find the best match when a locator breaks
- **Visual AI:** Applitools/Percy captures screenshots and compares pixel/AI-perceptual diffs
- **Test Generation:** LLMs generating Page Objects from HTML (experimental, requires human review)

**Senior Take:** AI augments but does not replace robust locator strategy. Use self-healing as a safety net, not a primary design pattern.

## Framework Folder Structure

\`\`\`
automation-framework/
├── src/main/java/
│   ├── base/                    # BaseTest, DriverManager
│   ├── pages/                   # Page Objects (raw POM)
│   ├── components/              # Shared UI fragments (Header, Footer)
│   ├── utils/                   # ConfigReader, ExcelUtils, WaitUtils, JSUtils
│   ├── api/                     # REST wrappers if mixed framework
│   └── constants/               # Timeouts, URLs, Messages
├── src/test/java/
│   ├── tests/                   # Test classes (grouped by feature)
│   ├── listeners/               # TestNG listeners
│   └── dataproviders/           # TestNG DataProviders
├── src/test/resources/
│   ├── config/
│   │   ├── qa.properties
│   │   └── staging.properties
│   ├── testdata/
│   │   ├── users.xlsx
│   │   └── orders.json
│   └── suites/
│       ├── smoke.xml
│       └── regression.xml
├── docker/
│   ├── docker-compose.yml
│   └── Dockerfile
├── Jenkinsfile
└── pom.xml / build.gradle
\`\`\`

## Best Coding Practices

- **DRY:** Centralize waits, locators, and browser setup
- **SOLID:** Single Responsibility for Page classes. Open/Closed for utilities
- **Constants:** Never hardcode timeouts. Use \`public static final Duration DEFAULT_WAIT = Duration.ofSeconds(15);\`
- **Data Independence:** Each test creates and cleans its own data via APIs
- **Avoid Thread.sleep:** Always a red flag. Replace with explicit waits
- **Soft vs Hard Asserts:** Use \`SoftAssert\` for suites. Use \`Assert\` for critical blockers
- **Logging:** SLF4J + Logback. Log every page transition and key action
    `
  },
  {
    id: 'debugging-scenarios',
    title: 'Real-Time Debugging Scenarios',
    content: `
## Scenario 1: Test passes locally, fails in CI (Headless Linux)

**Diagnosis:** Likely viewport size or font/element rendering difference.

**Fix:** Set window size explicitly. Use \`--headless=new\` (not old). Add \`shm_size\` to Docker. Capture screenshot on failure in CI and archive as artifact.

## Scenario 2: Intermittent \`StaleElementReferenceException\` at 3 PM daily

**Diagnosis:** Scheduled cache refresh or data sync causes React re-render.

**Fix:** Identify the trigger. Add wait for loading spinner post-login. Use \`refreshed()\` expected condition. Re-find element after known mutation points.

## Scenario 3: \`ElementClickInterceptedException\` on "Submit" button

**Diagnosis:** Sticky header or cookie consent banner overlays the button.

**Fix:** Scroll element to center of viewport via JS. Or use Actions \`moveToElement\` with offset. Or close the banner in \`@BeforeMethod\`.

## Scenario 4: Slow test suite (2 hours for 200 tests)

**Diagnosis:** Excessive implicit waits, redundant UI logins, non-parallel.

**Fix:** Remove implicit waits. Use API login to set cookies/sessionStorage before UI tests. Run parallel methods. Use headless for smoke. Profile with CDP performance logs.
    `
  },
  {
    id: 'senior-interview-qa',
    title: 'Frequently Asked Senior SDET Interview Questions',
    content: `
## Q1: Explain Selenium WebDriver architecture in depth

**Answer:** WebDriver is an HTTP client. Each language binding serializes commands to HTTP requests per W3C spec. The browser driver (e.g., chromedriver) acts as an HTTP server, translating commands into Chrome DevTools Protocol calls. The browser executes and returns a response. This decouples language bindings from browser internals.

## Q2: Selenium 3 vs Selenium 4 -- technical differences?

**Answer:** S4 adopted W3C protocol, deprecated JWP. Introduced native CDP access for network/console/performance. Added Relative Locators, SeleniumManager for auto driver download, new window/tab APIs, and full-page/element screenshots. Capabilities are now passed via Options classes, not \`DesiredCapabilities\`.

## Q3: How do you handle StaleElementReferenceException in a React application?

**Answer:** 1) Avoid Page Factory proxies; use By locators and re-find. 2) Wrap interactions in retry loops with re-acquisition. 3) Use \`ExpectedConditions.refreshed()\`. 4) Wait for React rendering to settle. 5) If unavoidable, catch SERE specifically and re-locate.

## Q4: Design a Selenium framework from scratch

**Answer Outline:**
1. Driver Layer: Factory + ThreadLocal Singleton for thread safety
2. Page Layer: Raw POM with By locators, fluent methods
3. Utility Layer: Config reader, explicit wait wrappers, JS utils, API helpers
4. Test Layer: TestNG, data providers, listeners for reporting/screenshots
5. Reporting: Allure/Extent with screenshot attachment
6. CI/CD: Jenkins pipeline with Docker Grid, parallel execution, artifact archival
7. Config: Environment-specific properties, browser parameterization

## Q5: Implicit vs Explicit -- which do you choose and why?

**Answer:** Explicit only. Implicit is global and non-deterministic when mixed with explicit. It penalizes negative tests. Explicit provides localized, condition-specific synchronization with clear failure messages.

## Q6: How do you run 500 tests in parallel without collisions?

**Answer:** \`parallel="methods"\` in TestNG. ThreadLocal ensures isolation. Use Selenium Grid 4 with Docker scaling. Ensure test data is unique per thread. Avoid static mutable state. Use database/API isolation.

## Q7: How do you test a Shadow DOM element?

**Answer:** If open shadow root, use \`element.getShadowRoot()\` (Selenium 4) then search within the SearchContext. If closed, use JavascriptExecutor to pierce the shadow boundary, or request developers to open it for testability.

## Q8: What is the best way to handle file downloads in headless Chrome?

**Answer:** Set Chrome profile prefs (\`download.default_directory\`, \`prompt_for_download=false\`). In headless mode, use CDP \`Page.setDownloadBehavior\`. Avoid OS-level file dialogs. Validate file existence and size post-download using Java NIO.

## Q9: How do you debug a flaky test?

**Answer:** 1) Add timestamps and verbose logs. 2) Capture screenshots/video at each step. 3) Check for AJAX race conditions. 4) Review application logs for errors. 5) Run in isolation vs suite (order dependency?). 6) Use retry analyzer temporarily. 7) Fix root cause; never rely on retry permanently.

## Q10: When would you use JavaScriptExecutor over WebDriver actions?

**Answer:** When WebDriver cannot simulate the event due to framework constraints (e.g., React ignoring sendKeys), or when an element is obscured by a non-interactable overlay. Always prefer WebDriver for user-like interactions; JS is the bypass for edge cases.
    `
  },
];

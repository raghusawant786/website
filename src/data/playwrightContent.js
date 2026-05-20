export const playwrightSections = [
  {
    id: 'installation-setup',
    title: 'Installation & Project Setup',
    icon: '⚙️',
    content: `
## Prerequisites

- Node.js LTS
- VS Code with Playwright Test extension
- npm or yarn

## Install Playwright

\`\`\`bash
npm init playwright@latest
npm install -D @playwright/test
npx playwright install
npx playwright install chromium
npx playwright install --with-deps
\`\`\`

## First Test

\`\`\`javascript
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('get started link opens installation page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
\`\`\`
    `,
  },
  {
    id: 'cli-commands',
    title: 'Playwright CLI Commands',
    icon: '⌨️',
    content: `
## Most Used Commands

\`\`\`bash
npx playwright test
npx playwright test tests/login.spec.js
npx playwright test --headed
npx playwright test --browser=firefox
npx playwright test --browser=all
npx playwright test -g "login test"
npx playwright test --project=chromium
npx playwright test --workers=4
npx playwright test --retries=2
npx playwright test --reporter=html
npx playwright show-report
npx playwright codegen https://site.com
npx playwright codegen --device="iPhone 13"
npx playwright debug tests/login.spec.js
npx playwright test --ui
npx playwright test --trace on
npx playwright show-trace trace.zip
npx playwright test --timeout=60000
npx playwright test --update-snapshots
PWDEBUG=1 npx playwright test
PWDEBUG=console npx playwright test
\`\`\`

**Interview Focus:** \`--ui\`, \`debug\`, traces, headed mode, retries, workers, and grep are common real-project commands.
    `,
  },
  {
    id: 'config-structure',
    title: 'Project Structure & Config',
    icon: '🗂️',
    content: `
## Recommended Structure

\`\`\`text
my-project/
  tests/
    login.spec.js
    dashboard.spec.js
  pages/
    LoginPage.js
  test-data/
    users.json
  playwright.config.js
  package.json
\`\`\`

## playwright.config.js

\`\`\`javascript
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    timeout: 30_000,
    expect: {
        timeout: 5000,
    },
    reporter: [
        ['html', { outputFolder: 'playwright-report' }],
        ['list'],
    ],
    use: {
        baseURL: 'https://myapp.com',
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        actionTimeout: 10_000,
        navigationTimeout: 15_000,
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } },
        { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
        { name: 'Mobile Safari', use: { ...devices['iPhone 13'] } },
    ],
});
\`\`\`
    `,
  },
  {
    id: 'locators-selectors',
    title: 'Locators & Selectors',
    icon: '🎯',
    content: `
## Locator Priority

Playwright recommends user-facing locators first because they are closer to how users and assistive technology interact with the app.

\`\`\`javascript
page.getByRole('button', { name: 'Submit' });
page.getByRole('textbox', { name: 'Email' });
page.getByRole('link', { name: 'Home' });
page.getByRole('heading', { name: 'Dashboard', level: 1 });
page.getByLabel('Email Address');
page.getByPlaceholder('Enter email');
page.getByText('Welcome back!');
page.getByAltText('Profile picture');
page.getByTitle('Close dialog');
page.getByTestId('submit-btn');
\`\`\`

## CSS and XPath

\`\`\`javascript
page.locator('#username');
page.locator('.btn-primary');
page.locator('input[type="email"]');
page.locator('form > div > input');
page.locator('li:nth-child(2)');
page.locator('input:visible');
page.locator('[data-cy="login-btn"]');

page.locator('//button[text()="Login"]');
page.locator('//input[@name="username"]');
page.locator('xpath=//div[@class="error"]');
\`\`\`

## Chaining and Filtering

\`\`\`javascript
page.locator('li').filter({ hasText: 'Laptop' });
page.locator('tr').filter({ has: page.locator('td.active') });
page.locator('li.product').nth(2);
page.locator('li.product').first();
page.locator('li.product').last();

const count = await page.locator('li').count();
const items = await page.locator('li').all();

for (const item of items) {
    console.log(await item.textContent());
}
\`\`\`
    `,
  },
  {
    id: 'user-actions',
    title: 'User Actions',
    icon: '🖱️',
    content: `
## Navigation, Clicks, and Input

\`\`\`javascript
await page.goto('https://example.com');
await page.goto('/dashboard');
await page.goBack();
await page.goForward();
await page.reload();

await page.getByRole('button').click();
await page.getByRole('button').dblclick();
await page.locator('#menu').click({ button: 'right' });
await page.locator('#item').click({ modifiers: ['Shift'] });
await page.locator('#btn').hover();
await page.locator('#btn').focus();

await page.getByLabel('Email').fill('user@example.com');
await page.getByLabel('Email').clear();
await page.getByLabel('Search').type('laptop', { delay: 100 });
await page.getByLabel('Pin').pressSequentially('1234');
\`\`\`

## Keyboard, Selects, Checkbox, Drag and Scroll

\`\`\`javascript
await page.keyboard.press('Enter');
await page.keyboard.press('Tab');
await page.keyboard.press('Control+A');
await page.keyboard.type('Hello World');

await page.getByLabel('Country').selectOption('India');
await page.getByLabel('Country').selectOption({ label: 'India' });
await page.getByLabel('Country').selectOption({ index: 2 });
await page.locator('#multi').selectOption(['red', 'blue']);

await page.getByLabel('Terms').check();
await page.getByLabel('Terms').uncheck();
await page.locator('#source').dragTo(page.locator('#target'));
await page.locator('#element').scrollIntoViewIfNeeded();
await page.mouse.wheel(0, 500);
\`\`\`
    `,
  },
  {
    id: 'assertions',
    title: 'Assertions',
    icon: '✅',
    content: `
## Auto-Retry Assertions

Always prefer async \`await expect\` assertions. They auto-retry until timeout.

\`\`\`javascript
const { expect } = require('@playwright/test');

await expect(page).toHaveTitle('My App');
await expect(page).toHaveTitle(/Dashboard/);
await expect(page).toHaveURL(/\\/dashboard/);

await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeChecked();
await expect(locator).not.toBeChecked();
await expect(locator).toBeEditable();
await expect(locator).toBeFocused();

await expect(locator).toHaveText('Welcome!');
await expect(locator).toHaveText(/Welcome/);
await expect(locator).toContainText('Error');
await expect(locator).toHaveValue('john@mail.com');
await expect(locator).toHaveAttribute('href', '/home');
await expect(locator).toHaveClass(/active/);
await expect(page.locator('li')).toHaveCount(5);
\`\`\`

## Soft Assertions and Polling

\`\`\`javascript
await expect.soft(page).toHaveTitle('App');
await expect.soft(locator).toBeVisible();

await expect(locator, 'Button should be enabled').toBeEnabled();

await expect.poll(async () => {
    return page.locator('li').count();
}, {
    timeout: 10000,
}).toBe(10);
\`\`\`
    `,
  },
  {
    id: 'waits-timeouts',
    title: 'Waits & Timeouts',
    icon: '⏱️',
    content: `
## Prefer Auto-Waiting

Playwright actions auto-wait for elements to be actionable. Avoid hard waits in real tests.

\`\`\`javascript
await page.getByRole('button').click();

await page.locator('#loading').waitFor({ state: 'hidden' });
await page.locator('#result').waitFor({ state: 'visible' });
await page.locator('#item').waitFor({ state: 'attached' });
await page.locator('#item').waitFor({ state: 'detached' });

await page.waitForURL('**/dashboard');
await page.waitForURL(/profile/);
\`\`\`

## Network and Custom Waits

\`\`\`javascript
const [response] = await Promise.all([
    page.waitForResponse('**/api/users'),
    page.getByRole('button', { name: 'Load' }).click(),
]);

console.log(await response.json());

await page.waitForLoadState('domcontentloaded');
await page.waitForLoadState('load');
await page.waitForFunction(() => window.isAppReady === true);

test.setTimeout(60_000);
await page.locator('#slow').click({ timeout: 20000 });
\`\`\`

**Interview Focus:** \`page.waitForTimeout()\` is useful for debugging, but it should not be used as a production test wait.
    `,
  },
  {
    id: 'screenshots-videos-traces',
    title: 'Screenshots, Videos & Traces',
    icon: '📸',
    content: `
## Screenshots and Visual Checks

\`\`\`javascript
await page.screenshot({
    path: 'screenshots/full.png',
    fullPage: true,
});

await page.locator('.chart').screenshot({
    path: 'chart.png',
});

const buffer = await page.screenshot();
test.info().attach('screenshot', {
    body: buffer,
    contentType: 'image/png',
});

await expect(page).toHaveScreenshot('home-page.png');
await expect(page.locator('.hero')).toHaveScreenshot('hero.png', {
    maxDiffPixels: 100,
    threshold: 0.2,
});
\`\`\`

## Videos and Traces

\`\`\`javascript
// playwright.config.js
use: {
    video: 'retain-on-failure',
    trace: 'on-first-retry',
}

const videoPath = await page.video().path();

await context.tracing.start({
    screenshots: true,
    snapshots: true,
});

await context.tracing.stop({
    path: 'trace.zip',
});
\`\`\`

\`\`\`bash
npx playwright show-trace trace.zip
\`\`\`
    `,
  },
  {
    id: 'hooks-fixtures',
    title: 'Hooks, Tags & Fixtures',
    icon: '🧰',
    content: `
## Hooks and Annotations

\`\`\`javascript
const { test, expect } = require('@playwright/test');

test.beforeAll(async () => {
    console.log('Starting test suite');
});

test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill('user@test.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
});

test.afterEach(async ({ page }) => {
    await page.screenshot({ path: 'after-each.png' });
});

test('normal test', async ({ page }) => {
    await expect(page).toHaveURL(/dashboard/);
});

test.skip('skip this test', async () => {});
test.fixme('broken test - fix later', async () => {});
test.slow('give 3x timeout', async () => {});
\`\`\`

## Custom Fixture

\`\`\`javascript
const { test: base } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');

exports.test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    loggedInPage: async ({ page }, use) => {
        await page.goto('/login');
        await page.getByLabel('Email').fill('admin@test.com');
        await page.getByLabel('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForURL('**/dashboard');
        await use(page);
        await page.goto('/logout');
    },
});
\`\`\`
    `,
  },
  {
    id: 'page-object-model',
    title: 'Page Object Model',
    icon: '🏗️',
    content: `
## LoginPage.js

\`\`\`javascript
class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByLabel('Email');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('.error-message');
    }

    async goto() {
        await this.page.goto('/login');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginAndExpectDashboard(email, password) {
        await this.login(email, password);
        await this.page.waitForURL('**/dashboard');
    }

    async getErrorMessage() {
        return this.errorMessage.textContent();
    }
}

module.exports = { LoginPage };
\`\`\`

## Using POM in Tests

\`\`\`javascript
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('valid login redirects to dashboard', async ({ page }) => {
        await loginPage.loginAndExpectDashboard('user@test.com', 'pass123');
        await expect(page).toHaveURL(/dashboard/);
    });

    test('invalid login shows error', async () => {
        await loginPage.login('wrong@email.com', 'wrong');
        await expect(loginPage.errorMessage).toContainText('Invalid credentials');
    });
});
\`\`\`
    `,
  },
  {
    id: 'dialogs-frames-shadow',
    title: 'Dialogs, Frames & Shadow DOM',
    icon: '🪟',
    content: `
## Dialogs

\`\`\`javascript
page.on('dialog', dialog => dialog.accept());
await page.getByRole('button', { name: 'Delete' }).click();

page.on('dialog', dialog => dialog.dismiss());

page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('Are you sure?');
    await dialog.accept();
});

page.on('dialog', async dialog => {
    console.log('Message:', dialog.message());
    await dialog.accept('My Input Value');
});
\`\`\`

## iFrames

\`\`\`javascript
const frame = page.frameLocator('#payment-iframe');

await frame.getByLabel('Card Number').fill('4111111111111111');
await frame.getByRole('button', { name: 'Pay' }).click();

const innerFrame = page.frameLocator('#outer').frameLocator('#inner');
await innerFrame.getByLabel('CVV').fill('123');

const myFrame = page.frame({ name: 'myframe' });
await myFrame.click('#submit');
\`\`\`

## Shadow DOM

\`\`\`javascript
await page.locator('my-component').getByRole('button').click();
await page.locator('#host >> .inner-button').click();
\`\`\`
    `,
  },
  {
    id: 'file-upload-download',
    title: 'File Upload & Download',
    icon: '📎',
    content: `
## File Upload

\`\`\`javascript
await page.getByLabel('Upload').setInputFiles('tests/files/doc.pdf');

await page.getByLabel('Upload').setInputFiles([
    'tests/files/doc1.pdf',
    'tests/files/doc2.pdf',
]);

await page.getByLabel('Upload').setInputFiles([]);

const fileChooserPromise = page.waitForEvent('filechooser');
await page.getByRole('button', { name: 'Choose File' }).click();
const fileChooser = await fileChooserPromise;
await fileChooser.setFiles('tests/files/image.jpg');
\`\`\`

## File Download

\`\`\`javascript
const downloadPromise = page.waitForEvent('download');
await page.getByRole('button', { name: 'Export CSV' }).click();
const download = await downloadPromise;

console.log('File name:', download.suggestedFilename());

await download.saveAs('./downloads/' + download.suggestedFilename());

const stream = await download.createReadStream();
\`\`\`
    `,
  },
  {
    id: 'api-testing',
    title: 'API Testing',
    icon: '🔌',
    content: `
## API Tests with request Fixture

\`\`\`javascript
const { test, expect } = require('@playwright/test');

test('GET users returns 200', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=1');

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data).toHaveLength(6);
});

test('POST creates a user', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'John',
            job: 'Developer',
        },
    });

    expect(response.status()).toBe(201);
    expect((await response.json()).name).toBe('John');
});

test('DELETE user', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
});
\`\`\`

## Reusable API Context

\`\`\`javascript
test('API context with base URL', async ({ playwright }) => {
    const apiContext = await playwright.request.newContext({
        baseURL: 'https://api.example.com',
        extraHTTPHeaders: {
            Accept: 'application/json',
        },
    });

    const response = await apiContext.get('/products');
    expect(response.ok()).toBeTruthy();
    await apiContext.dispose();
});
\`\`\`
    `,
  },
  {
    id: 'network-mocking',
    title: 'Network Interception & Mocking',
    icon: '🛜',
    content: `
## Intercept, Mock, and Inspect Requests

\`\`\`javascript
await page.route('**/*.{png,jpg,gif}', route => route.abort());
await page.route('**/ads/**', route => route.abort());

await page.route('**/api/users', route => {
    route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
            { id: 1, name: 'Alice', role: 'Admin' },
            { id: 2, name: 'Bob', role: 'User' },
        ]),
    });
});

await page.goto('/users');
\`\`\`

## Modify, Log, and Wait

\`\`\`javascript
await page.route('**/api/data', route => {
    route.continue({
        headers: {
            ...route.request().headers(),
            'X-Custom-Header': 'playwright',
        },
    });
});

page.on('request', request => {
    console.log('>>', request.method(), request.url());
});

page.on('response', response => {
    console.log('<<', response.status(), response.url());
});

const [request] = await Promise.all([
    page.waitForRequest('**/api/login'),
    page.getByRole('button', { name: 'Login' }).click(),
]);

console.log('Request payload:', request.postDataJSON());

await page.unroute('**/api/users');
\`\`\`
    `,
  },
  {
    id: 'multi-tab-browser',
    title: 'Multi-Tab & Multi-Browser',
    icon: '🧭',
    content: `
## Multi-Tab Testing

\`\`\`javascript
const newPage = await context.newPage();
await newPage.goto('https://example.com');

const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Open in new tab' }).click(),
]);

await newTab.waitForLoadState();
await expect(newTab).toHaveURL(/terms/);
await newTab.close();

const pages = context.pages();
await pages[0].bringToFront();
await pages[1].bringToFront();
\`\`\`

## Multiple Browser Contexts

\`\`\`javascript
test('two users in same test', async ({ browser }) => {
    const adminContext = await browser.newContext();
    const userContext = await browser.newContext();

    const adminPage = await adminContext.newPage();
    const userPage = await userContext.newPage();

    await adminPage.goto('/admin');
    await userPage.goto('/portal');

    await adminPage.getByRole('button', { name: 'Send Message' }).click();
    await expect(userPage.locator('.inbox')).toContainText('1 new message');

    await adminContext.close();
    await userContext.close();
});
\`\`\`
    `,
  },
  {
    id: 'authentication-storage',
    title: 'Authentication & Storage State',
    icon: '🔐',
    content: `
## Save Login State

\`\`\`javascript
const { test: setup } = require('@playwright/test');

setup('authenticate', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill('admin@test.com');
    await page.getByLabel('Password').fill('Password@123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/dashboard');

    await page.context().storageState({
        path: '.auth/admin.json',
    });
});
\`\`\`

## Reuse Storage State

\`\`\`javascript
projects: [
    {
        name: 'setup',
        testMatch: '**/auth.setup.js',
    },
    {
        name: 'chromium',
        dependencies: ['setup'],
        use: {
            storageState: '.auth/admin.json',
        },
    },
]

test.use({ storageState: '.auth/user.json' });
\`\`\`

## Cookies

\`\`\`javascript
await context.addCookies([{
    name: 'session',
    value: 'abc123',
    domain: 'example.com',
    path: '/',
}]);

const cookies = await context.cookies();
await context.clearCookies();
\`\`\`
    `,
  },
  {
    id: 'data-driven-tests',
    title: 'Parameterization & Data-Driven Tests',
    icon: '📚',
    content: `
## Inline Data

\`\`\`javascript
const credentials = [
    { email: 'admin@test.com', password: 'Admin@123', role: 'Admin' },
    { email: 'user@test.com', password: 'User@123', role: 'User' },
    { email: 'viewer@test.com', password: 'View@123', role: 'Viewer' },
];

for (const credential of credentials) {
    test('Login as ' + credential.role, async ({ page }) => {
        await page.goto('/login');
        await page.getByLabel('Email').fill(credential.email);
        await page.getByLabel('Password').fill(credential.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Welcome, ' + credential.role)).toBeVisible();
    });
}
\`\`\`

## From JSON and Test Case Matrix

\`\`\`javascript
const users = require('../test-data/users.json');

for (const user of users) {
    test('Test user ' + user.id, async ({ page }) => {
        await page.goto('/users/' + user.id);
        await expect(page.getByText(user.name)).toBeVisible();
    });
}

const testCases = [
    ['empty email', '', 'pass123', 'Email is required'],
    ['empty password', 'user@test.com', '', 'Password is required'],
    ['invalid combo', 'x@x.com', 'wrong', 'Invalid credentials'],
];

testCases.forEach(([name, email, password, error]) => {
    test('Login validation: ' + name, async ({ page }) => {
        await page.goto('/login');
        await page.getByLabel('Email').fill(email);
        await page.getByLabel('Password').fill(password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.locator('.error')).toContainText(error);
    });
});
\`\`\`
    `,
  },
  {
    id: 'reporters-allure',
    title: 'Reporters & Allure',
    icon: '📈',
    content: `
## Built-In Reporters

\`\`\`bash
npx playwright test --reporter=html
npx playwright test --reporter=list
npx playwright test --reporter=dot
npx playwright test --reporter=line
npx playwright test --reporter=json
npx playwright test --reporter=junit
\`\`\`

## Allure Setup

\`\`\`bash
npm install -D allure-playwright
npm install -g allure-commandline
npx playwright test
allure generate allure-results -o allure-report --clean
allure open allure-report
\`\`\`

\`\`\`javascript
// playwright.config.js
module.exports = defineConfig({
    reporter: [['allure-playwright']],
});

test('User login', async ({ page }) => {
    test.info().annotations.push(
        { type: 'story', description: 'User Authentication' },
        { type: 'severity', description: 'critical' },
    );

    await test.info().attach('after-login', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});
\`\`\`
    `,
  },
  {
    id: 'cicd',
    title: 'CI/CD - GitHub Actions',
    icon: '🚀',
    content: `
## GitHub Actions Workflow

\`\`\`yaml
name: Playwright Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run Tests
        run: npx playwright test
        env:
          BASE_URL: secret-base-url
          API_TOKEN: secret-api-token

      - name: Upload HTML Report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
\`\`\`

**Senior Tip:** Upload the report with \`if: always()\` so debugging artifacts are available even when tests fail.
    `,
  },
  {
    id: 'best-practices',
    title: 'Expert Tips & Best Practices',
    icon: '⭐',
    content: `
## Best Practices

- Prefer \`page.getByRole()\` because it is resilient and accessibility-friendly.
- Avoid \`page.waitForTimeout()\` in test logic.
- Use \`test.describe()\` to group related tests.
- Keep tests isolated with BrowserContext.
- Store secrets in environment variables or CI secrets.
- Use \`trace: 'retain-on-failure'\` for practical debugging.
- Use storage state to avoid repeated UI login.
- Tag tests using title patterns like \`@smoke\` and run them with grep.
- Seed test data through API when possible.
- Use \`fullyParallel: true\` only when tests are independent.
- Use \`test.describe.serial()\` for flows that must run in order.

## Interview Cheat Sheet

| Topic | Best Answer |
|-------|-------------|
| Locator strategy | Role, label, placeholder, text, test id, CSS/XPath last |
| Wait strategy | Auto-waiting and assertion waits |
| Debugging | UI mode, inspector, trace viewer, screenshots, videos |
| Auth | Save and reuse storage state |
| API + UI | Use APIRequestContext for setup and backend checks |
| Parallelism | Keep tests independent and avoid shared state |
| CI | Install browsers, run tests, upload reports |
    `,
  },
];

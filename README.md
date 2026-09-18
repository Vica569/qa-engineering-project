# QA Engineering Project

A hands-on project documenting my progression from QA analysis into QA Engineering through practical testing, automation, API validation, version control, cross-browser testing, CI/CD, and data-driven quality reporting.

This repository is built around practice rather than theory. I am using it to learn how the different parts of modern QA engineering fit together — from understanding requirements and validating expected behaviour to writing automated tests, testing APIs, investigating failures, managing code with Git, and eventually turning test results into useful quality insights.

The project will continue to evolve as I build new skills and apply them to practical QA scenarios.

## What This Project Is About

My background is in QA analysis and manual testing. This project is focused on expanding that foundation into engineering-focused QA skills.

The approach is simple:

**Understand → Test → Automate → Investigate → Improve → Document**

Rather than collecting tools for the sake of having them on a CV, I am using each tool for a specific QA purpose and documenting what I learn along the way.

### Current work

- Manual test scenarios and test cases
- UI test automation with Playwright and TypeScript
- API testing with Postman
- API response and data validation
- Git and GitHub workflows
- Playwright configuration and test organisation
- Cross-browser test execution
- Test assertions and failure investigation
- QA documentation and test evidence

### Planned areas

- API authentication and authorization
- More advanced Playwright automation
- Test data management
- CI/CD with GitHub Actions
- Cloud and cross-browser testing
- QA metrics and reporting
- Data validation and analysis
- Power BI quality dashboards
- Performance and security testing
- Practical AI-assisted QA workflows

Only work that has actually been completed or practised is presented as completed.

## Current Progress

### Manual Testing

**Status: Foundation established**

Manual testing remains an important part of the project because automation should be based on a clear understanding of expected behaviour.

Current practice includes:

- Requirements-based testing
- Positive and negative scenarios
- Boundary and robustness thinking
- Expected versus actual results
- Test execution and evidence
- Functional validation
- Login and authentication scenarios

One current practice exercise uses the public SauceDemo application to validate login behaviour across several scenarios.

### UI Test Automation

**Status: In progress**

Playwright is currently the main automation framework for this project.

Current work includes:

- Playwright with TypeScript
- UI element location
- User interaction automation
- Assertions
- URL validation
- Test fixtures
- `beforeEach` setup
- `baseURL` configuration
- Test isolation
- Chromium and Firefox execution
- Failure investigation

Current automated practice covers five login scenarios:

- Valid login
- Invalid password
- Invalid username
- Blank username
- Blank password

The tests are intentionally kept straightforward while the underlying concepts are being learned. The focus is on understanding why the test is written a certain way, not simply making the test pass.

### API Testing

**Status: In progress**

Postman is being used to build practical API testing experience.

Current work includes:

- HTTP GET requests
- Query parameters
- Request headers
- JSON responses
- HTTP status-code validation
- Response assertions
- Parameter validation
- Boundary and robustness testing
- Understanding the difference between positive, negative, and boundary testing
- Using the API contract or requirements to determine what the expected result should actually be

Current practice uses Postman Echo as a learning endpoint.

A key lesson from this work has been that a QA engineer should not invent an expected result simply because an input looks unusual. The expected behaviour must come from the requirements or the API's documented contract.

### Git & GitHub

**Status: Active**

Git and GitHub are being used as part of the normal development workflow rather than as separate topics.

Current workflow:

1. Make a change
2. Review the change
3. Stage the intended files
4. Commit with a meaningful message
5. Push to GitHub
6. Check repository status

This repository itself is part of that practice.

### Cross-Browser Testing

**Status: In progress**

The Playwright tests are being executed against multiple browser engines.

Current local execution has been successful with:

- Chromium
- Firefox

WebKit/Safari-style execution has also been investigated. A WebKit startup failure was traced to the local macOS/Playwright WebKit environment rather than the login test itself.

That experience is part of the learning process: a failed automated run does not automatically mean the test is wrong. The first step is to identify where the failure actually occurs.

For this project, WebKit testing can be revisited through an appropriate CI or cloud environment rather than changing valid test logic simply to work around a local browser-environment problem.

## Tools Currently Used

| Tool / Technology | Purpose |
|---|---|
| Playwright | UI test automation and browser testing |
| TypeScript | Automation test development |
| Postman | API testing and validation |
| Git | Version control |
| GitHub | Source control and project portfolio |
| VS Code | Development environment |
| Node.js | JavaScript/TypeScript runtime and Playwright tooling |
| npm | Package and project management |
| Chromium | Browser test execution |
| Firefox | Browser test execution |
| WebKit | Cross-browser testing and investigation |

### Planned / Upcoming

| Area | Planned Use |
|---|---|
| GitHub Actions | CI/CD and automated test execution |
| Cloud browser testing | Cross-browser coverage |
| SQL / data validation | Backend and database validation |
| QA metrics | Test and defect analysis |
| Power BI | QA reporting and quality dashboards |
| Performance testing | Application performance validation |
| Security testing | Practical security-focused QA checks |
| AI-assisted QA | Targeted use of AI for analysis, test generation and quality workflows |

The planned list is intentionally separate from the tools I am currently using.

## Project Structure

The project will grow as the learning path expands.

Current structure:

```text
qa-engineering-project/
├── .github/
├── practice/
│   └── login-testing/
│       ├── login-test-cases.md
│       └── login.spec.ts
├── tests/
│   └── example.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

Additional folders will be introduced when they serve a real purpose, such as API collections, test data, reports, CI/CD workflows, or larger automation projects.

## Testing Approach

The project follows a practical QA workflow rather than treating automation as the starting point.

### 1. Understand the requirement

What is the system supposed to do?

### 2. Identify scenarios

What should happen when the user provides valid, invalid, missing, unusual, or boundary input?

### 3. Establish expected behaviour

What should the application or API return?

### 4. Test manually where appropriate

Manual testing helps establish actual behaviour before deciding what should be automated.

### 5. Automate repeatable checks

Stable and repeatable scenarios can then be automated using Playwright or API testing tools.

### 6. Investigate failures

A failure should be analysed before deciding whether it is:

- A product defect
- A test defect
- An environment problem
- A configuration problem
- A data problem
- An expected behaviour that was misunderstood

### 7. Document the result

The purpose of testing is not only to produce PASS or FAIL. Good QA work should leave behind useful evidence and information that can support decisions.

## Automation Principles

The automation work in this repository follows a few principles:

- Keep tests focused on one meaningful behaviour.
- Avoid unnecessary duplication.
- Reuse common setup where appropriate.
- Keep configuration separate from test logic.
- Validate outcomes rather than simply performing clicks.
- Prefer stable selectors.
- Keep tests understandable to another QA engineer.
- Investigate failures before changing working test logic.
- Automate scenarios that provide repeatable value.
- Expand the framework gradually instead of adding complexity too early.

The use of `beforeEach` and `baseURL` in the current Playwright tests is an example of this progression: first understand the test, then improve its structure without losing clarity.

## API Testing Approach

API testing in this project is being developed around the main components of an API request and response.

**Request**

- Method
- Endpoint
- Query parameters
- Headers
- Request body
- Authentication

**Response**

- Status code
- Response headers
- Response body
- Returned data
- Error behaviour

The next stage is to move beyond simple GET requests into authentication and authorization scenarios, including understanding the practical difference between HTTP `401` and `403` responses.

## QA Reporting & Data

Testing produces data.

Over time, this project will capture useful QA information such as:

- Total tests
- Passed tests
- Failed tests
- Blocked tests
- Defects
- Severity
- Priority
- Regression results
- Browser results
- Automated versus manual coverage
- Test execution trends

The longer-term goal is to use this information for practical QA reporting and data analysis, including building a Power BI dashboard.

This is intended to connect two areas of my professional development:

**QA Engineering + Data Analytics / Business Intelligence**

The goal is not simply to make a dashboard look good. The objective is to turn testing data into information that helps explain product quality, testing coverage, recurring issues, and changes over time.

## Learning From Real QA Work

I have previous experience working as a QA Analyst, including functional testing, payment-flow validation, cross-browser/device testing, and large-scale website testing.

This repository is not intended to replace that experience. It is where I am building the additional engineering skills that sit around it.

That includes moving from:

**Manual execution → automation**

**UI testing → UI + API testing**

**Test results → test data**

**Local execution → CI/CD**

**Individual tests → maintainable test frameworks**

**Testing activity → measurable quality information**

The aim is to understand the full workflow rather than become dependent on one particular tool.

## Roadmap

### Completed / Practised

- Git and GitHub project workflow
- VS Code project setup
- Node.js and npm setup
- Playwright installation
- Playwright TypeScript configuration
- Manual login test scenarios
- Five automated login scenarios
- Playwright assertions
- `beforeEach` test setup
- `baseURL` configuration
- Chromium execution
- Firefox execution
- Cross-browser failure investigation
- Postman setup
- GET API testing
- Query parameter validation
- Request header validation
- JSON response validation
- Postman assertions
- Basic negative and boundary-testing concepts

### Next

- API authentication
- Authentication versus authorization
- HTTP 401 versus 403
- More realistic API test scenarios
- API test data and environments
- Expanded Playwright automation
- Better test organisation
- Page Object Model
- Test reporting
- GitHub Actions CI/CD
- Cloud browser testing
- QA metrics
- QA test data analysis
- Power BI dashboard
- Performance testing
- Security-focused QA
- Targeted AI-assisted QA workflows

This roadmap will change as the project develops.

## What I Want This Repository to Demonstrate

A strong QA Engineering portfolio should show more than a list of tools.

This project is intended to demonstrate that I can:

- Understand requirements before testing
- Think in terms of risk and expected behaviour
- Identify positive, negative, and boundary scenarios
- Test both user interfaces and APIs
- Write and maintain automated tests
- Work with TypeScript and Playwright
- Use Git and GitHub as part of an engineering workflow
- Investigate failures instead of blindly modifying tests
- Understand environments and browser differences
- Work with test data
- Measure and communicate quality
- Connect QA testing with data analysis
- Build toward CI/CD and cloud-based testing
- Use AI where it adds genuine value rather than replacing QA judgement

## Confidentiality

Some of my professional QA experience involves confidential client and company systems.

Private URLs, credentials, API keys, personal information, proprietary source code, internal tickets, confidential screenshots, payment information, and other restricted material will not be published in this repository.

Where professional experience is discussed for portfolio purposes, it will be described at an appropriate level and sanitised where necessary.

Public practice applications and APIs are used for hands-on learning where appropriate.

## About This Project

This is an evolving project.

The README, test suites, documentation, reports, and project structure will be updated as new QA Engineering concepts are learned and applied.

The objective is straightforward:

**Build the skills. Practise them. Understand them. Document them. Keep improving.**

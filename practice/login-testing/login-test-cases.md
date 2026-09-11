# Login Testing — SauceDemo

## Requirement

A user should be able to log in using valid credentials and access the inventory page.

## Test Cases

| ID | Test Scenario | Expected Result | Priority |
|---|---|---|---|
| TC-001 | Login with valid username and password | User is successfully logged in and the inventory page is displayed | High |
| TC-002 | Login with invalid password | Login is rejected and an appropriate error message is displayed | High |
| TC-003 | Login with invalid username | Login is rejected and an appropriate error message is displayed | High |
| TC-004 | Login with blank username | Login is rejected and an appropriate error message is displayed | Medium |
| TC-005 | Login with blank password | Login is rejected and an appropriate error message is displayed | Medium |

## Test Execution

| Test Case | Environment | Result | Actual Result |
|---|---|---|---|
| TC-001 | Chrome / Desktop | PASS | User successfully logged in and was taken to the Swag Labs inventory page. The product catalog, prices, Add to Cart buttons, sorting control, cart icon, and menu were displayed. |

| TC-002 | Chrome / Desktop | PASS | Login was rejected when an incorrect password was entered. The application displayed an appropriate authentication error message. |

| TC-004 | Chrome / Desktop | PASS | Login was rejected when the username field was left blank. The application displayed the message “Username is required.” |

| TC-005 | Chrome / Desktop | PASS | Login was rejected when the password field was left blank. The application displayed the message “Password is required.” |

| TC-003 | Chrome / Desktop | PASS | Login was rejected when an invalid username was entered. The application displayed the message “Username and password do not match any user in this service.” |
# SCRUM-101 Checkout Test Report

## 1. Executive Summary
- Scope: SauceDemo cart review, checkout validation, order summary, and confirmation flow.
- Total planned scenarios: 8
- Executed scenarios: 4 automated scenarios covering the critical workflow path and validation behavior.
- Status: PASS
- Notes: Functional validation completed for login, cart review, checkout validation, order overview, finishing the purchase, and returning to the product list.

## 2. Manual exploratory testing results
During live browser validation against the SauceDemo app:
- Login succeeded with standard_user / secret_sauce.
- The inventory page loaded correctly and displayed product details.
- An item could be added to the cart and reviewed in the cart page.
- The checkout form rejected empty required fields with the message "Error: First Name is required".
- Valid checkout data advanced to the overview page, where item total, tax, and total were visible.
- Completing checkout loaded the order confirmation page with the "Thank you for your order!" message.
- The user could return to the product list from the confirmation page.

## 3. Automated test results
The generated Playwright suite in `tests/saucedemo-checkout/checkout-flow.spec.ts` passed after selectors were stabilized.

### Automated scenarios executed
1. User can add an item and review cart details
2. Checkout form shows validation errors for empty required fields
3. User can complete a valid checkout and view order confirmation
4. User can return to the product list from the confirmation page

### Result
- Passed: 4
- Failed: 0
- Browser validation: Chromium execution passes via Playwright.

## 4. Defects log
No defects were identified in the core checkout path during this validation cycle.

| Bug ID | Severity | Title | Status |
| --- | --- | --- | --- |
| N/A | N/A | No production defects found in the exercised flow | Closed |

## 5. Test coverage analysis
Acceptance criteria coverage:
- Cart details visible: Covered
- Continue shopping / proceed to checkout: Covered
- Checkout validation errors: Covered
- Overview with totals and shipping/payment details: Covered
- Confirmation page and return flow: Covered
- Navigation and cart state edge behavior: Covered in the tested checkout and return paths

### Coverage assessment
- Manual coverage: Good
- Automated coverage: Good
- Gaps: Additional negative tests could be added for edge combinations such as zip code variations, duplicate items, and removal of items mid-flow.

## 6. Summary and recommendations
The SauceDemo checkout journey is functioning correctly for the primary happy path and critical validation path. The automation scripts are stable and can be extended with additional edge case scenarios for broader regression coverage.

Recommended next steps:
- Add more negative tests for empty zip, invalid zip patterns, and repeated cart changes.
- Expand automation to additional browser projects when wider regression coverage is needed.
- Add CI integration to run the Playwright suite on every change.

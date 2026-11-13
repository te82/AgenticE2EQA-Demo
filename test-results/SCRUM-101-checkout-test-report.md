# SCRUM-101 Checkout Test Report

## 1. Executive Summary

- Story under test: SCRUM-101 ecommerce checkout workflow
- Application under test: SauceDemo storefront at https://www.saucedemo.com/
- Test credentials: standard_user / secret_sauce
- Total test cases planned: 4 automated acceptance scenarios
- Test cases executed: 4
- Result: 4 passed, 0 failed, 0 blocked
- Overall status: PASS

## 2. Manual Exploratory Test Results

Manual validation confirmed that the SauceDemo login page loads correctly and exposes the expected login form and credentials. The login view displayed:

- Username field and Password field
- Login button
- Accepted usernames list including standard_user
- Shared password prompt: secret_sauce

This established the starting state for the cart and checkout flow validation.

## 3. Automated Test Results

The automated suite was run in Chromium and passed end-to-end:

- `tests/saucedemo-checkout/cart-review.spec.ts` — PASS
- `tests/saucedemo-checkout/checkout-validation-errors.spec.ts` — PASS
- `tests/saucedemo-checkout/complete-checkout-flow.spec.ts` — PASS
- `tests/saucedemo-checkout/order-completion.spec.ts` — PASS

### Command used

```bash
npx playwright test tests/saucedemo-checkout --project=chromium --reporter=line --workers=1
```

### Actual result

```text
Running 4 tests using 1 worker
  4 passed (7.5s)
```

## 4. Defects Log

No defects were identified during the current execution. All acceptance scenarios passed against the live SauceDemo site in the observed environment.

## 5. Test Coverage Analysis

The automated suite covered the main SCRUM-101 acceptance criteria:

- Cart review and item summary display
- Continue shopping and cart state integrity
- Checkout information validation for empty and incomplete fields
- Happy path checkout completion
- Final order completion confirmation and return to product list

Coverage status: complete for the core user story in this demo environment.

## 6. Summary and Recommendations

The checkout workflow is functioning as expected for the tested scenario set. The login, cart review, form validation, checkout review, final completion, and return-to-products flow all behaved correctly under Chromium.

Recommended follow-up:

- Add browser coverage for Firefox/WebKit if cross-browser validation is required
- Extend automated tests to edge conditions like invalid field combinations and cart persistence across sessions
- Keep the generated HTML report at `test-results/extent-report.html` for stakeholder review

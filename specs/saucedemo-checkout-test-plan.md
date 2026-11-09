# SCRUM-101 Checkout Test Plan

## User Story
As a customer, I want to review my cart, complete the checkout flow, and receive order confirmation so that I can purchase products successfully and confidently.

## Scope
This plan covers the complete checkout flow for the SauceDemo ecommerce experience: product selection, cart review, checkout form validation, review, completion, and return to inventory.

## Test Data
- Username: standard_user
- Password: secret_sauce
- Product set: Sauce Labs Backpack, Sauce Labs Bike Light
- Customer data: John Doe, 12345

## Acceptance Criteria Coverage
1. Cart page shows product details and pricing.
2. User can continue shopping or proceed to checkout.
3. Checkout form validates required fields and surfaces clear error messages.
4. Checkout overview displays order summary with tax and total.
5. Confirmation page appears after successful order completion.
6. Navigation and cart state integrity are preserved across the work flow.

## Test Scenarios

### 1. Cart Review and Navigation
- Steps:
  1. Log in as standard_user.
  2. Add Sauce Labs Backpack and Sauce Labs Bike Light to the cart.
  3. Open the cart.
  4. Validate product names, prices, and the checkout button.
  5. Click Continue Shopping and verify the user returns to inventory with the cart badge still showing 2 items.
- Expected Results:
  - Cart page loads with exactly 2 cart items.
  - Product names match the added items.
  - Checkout button is visible.
  - Continue Shopping returns to inventory and preserves cart count.

### 2. Validation Errors During Checkout
- Steps:
  1. Log in.
  2. Add one item to the cart and proceed to checkout.
  3. Attempt to continue without filling the form.
  4. Fill only First Name and retry.
  5. Fill First Name and Last Name and retry.
- Expected Results:
  - Error message appears for missing First Name.
  - Error message appears for missing Last Name.
  - Error message appears for missing Postal Code.

### 3. Happy Path Checkout Completion
- Steps:
  1. Log in.
  2. Add two items to the cart.
  3. Proceed through checkout.
  4. Enter valid personal details.
  5. Confirm the review screen and finish the order.
- Expected Results:
  - User reaches the checkout overview page.
  - Total amount with tax is displayed correctly.
  - Completion page shows Thank you for your order and a back-to-products option.

### 4. Order Completion and Return to Inventory
- Steps:
  1. Complete a valid checkout.
  2. Confirm the thank-you page.
  3. Click Back to Products.
  4. Validate the cart is empty and the user is back on the inventory page.
- Expected Results:
  - Confirmation page loads successfully.
  - Cart returns to empty state after returning to inventory.

## Risk Areas
- Required field validation must remain explicit and user friendly.
- Cart state should not be dropped when the user navigates back and forth.
- Total amount and order confirmation need to be consistent across payment and shipping review.

## Exit Criteria
- All core checkout flows pass in Chromium, Firefox, and WebKit.
- Validation and completion flows behave as expected.
- No critical defects remain open for the SCRUM-101 acceptance criteria.

# SauceDemo Checkout E2E Test Plan

## User Story Summary
As a customer, I want to review my cart, complete the checkout flow, and receive order confirmation so I can purchase products successfully and confidently.

## Application Under Test
- URL: https://www.saucedemo.com/
- Username: standard_user
- Password: secret_sauce

## Scope
This plan covers cart review, checkout, validation, confirmation, and edge cases for the SauceDemo ecommerce purchase journey.

## Acceptance Criteria Coverage
1. Cart page shows selected products with item names, descriptions, quantities, and pricing.
2. User can continue shopping or proceed to checkout from the cart.
3. Checkout form validates required fields and shows clear error messages for invalid or empty input.
4. Checkout overview displays ordered items, payment details, shipping details, and total amount including tax.
5. Completing checkout shows a confirmation page and allows return to the product list.
6. Workflow handles edge cases like invalid combinations, navigation back and forth, and cart integrity.

## Test Data
- Valid user credentials: standard_user / secret_sauce
- Valid checkout form values:
  - First Name: Jane
  - Last Name: Doe
  - ZIP Code: 12345
- Invalid data examples:
  - Empty first name
  - Empty last name
  - Empty postal code
  - Missing required field combinations

## Test Scenarios

### TC-01: Add products and review cart details
**Goal:** Verify the user can add products and review cart contents.

**Steps:**
1. Log in with valid credentials.
2. Add two products to the cart.
3. Open the cart.
4. Review product names, quantities, descriptions, and prices.

**Expected Results:**
- Products appear in the cart with correct details.
- Cart badge reflects number of items added.
- Cart total is displayed correctly.

### TC-02: Continue shopping from cart
**Goal:** Verify the user can return to products from the cart.

**Steps:**
1. Open the cart page.
2. Click Continue Shopping.
3. Confirm the product listing page is visible.

**Expected Results:**
- User is returned to the inventory page.
- Previously added items remain in the cart state unless removed.

### TC-03: Proceed to checkout from cart
**Goal:** Verify checkout can be initiated from cart.

**Steps:**
1. Add a product to cart.
2. Click the cart icon and select Checkout.
3. Confirm the checkout information page loads.

**Expected Results:**
- User navigates to the checkout form.
- Required fields are displayed.

### TC-04: Validate required checkout fields
**Goal:** Verify required validation errors appear for empty form values.

**Steps:**
1. Start checkout with a valid cart.
2. Leave all fields blank and click Continue.
3. Retry with only partial values.

**Expected Results:**
- Clear validation error messages appear.
- User remains on the checkout form until required fields are corrected.

### TC-05: Submit valid checkout information
**Goal:** Verify valid order information allows progress.

**Steps:**
1. Complete the checkout form with valid values.
2. Click Continue.

**Expected Results:**
- User is taken to the checkout overview page.
- Items, payment information, shipping information, and totals are displayed.

### TC-06: Review order overview and finalize purchase
**Goal:** Verify the overview page displays complete order information and allows purchase.

**Steps:**
1. Review the overview page.
2. Confirm the product list, price totals, and payment/shipping details.
3. Click Finish.

**Expected Results:**
- Overview shows item details and total including tax.
- Confirmation page loads after Finish.
- Order completion message is shown.

### TC-07: Confirmation page and return to products
**Goal:** Verify purchase completion is confirmed and the user can return to inventory.

**Steps:**
1. Complete checkout.
2. View confirmation page.
3. Click Back Home or Return to Products.

**Expected Results:**
- Thank-you confirmation appears.
- User returns to product list successfully.
- Cart count resets or reflects the expected post-purchase state.

### TC-08: Navigation and cart state integrity edge cases
**Goal:** Verify the checkout workflow behaves correctly when users navigate back and forth.

**Steps:**
1. Add items to cart.
2. Navigate back to products and cart repeatedly.
3. Continue to checkout, hit back, and change values.
4. Submit valid data after a prior invalid attempt.

**Expected Results:**
- Cart contents remain consistent.
- User is not blocked by stale or lost state.
- Validation behaves correctly across repeated navigation.

## Exit Criteria
- All above scenarios pass in the browser-based validation flow.
- Validation messages and navigation are correct.
- A complete checkout journey successfully ends in confirmation.

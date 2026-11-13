# SCRUM-101 Checkout Test Plan

## Objective
Validate the SauceDemo checkout journey end-to-end for a standard shopping flow, including cart review, form validation, order summary, confirmation, and navigation edge cases.

## Application Under Test
- URL: https://www.saucedemo.com/
- Credentials: standard_user / secret_sauce

## Scope
- Happy path purchase flow
- Cart review and item verification
- Checkout form validation and error handling
- Overview and total calculation validation
- Order completion confirmation and return flow
- Cart state and navigation edge cases

## Test Data
- Valid user: standard_user
- Valid password: secret_sauce
- Valid customer details: John Doe, 12345
- Products: Sauce Labs Backpack, Sauce Labs Bike Light
- Expected total for selected items: $43.18

## Test Scenarios

### 1. Successful login and product catalog access
**Goal:** Verify a valid user can sign in and view the product list.

**Steps**
1. Open the SauceDemo login page.
2. Enter `standard_user` in the username field.
3. Enter `secret_sauce` in the password field.
4. Click the Login button.

**Expected results**
- The user lands on the inventory page.
- Products are visible.
- The shopping cart badge is available.

---

### 2. Add products to cart and review cart contents
**Goal:** Verify the user can add items and confirm the cart details.

**Steps**
1. Log in successfully.
2. Add `Sauce Labs Backpack` and `Sauce Labs Bike Light` to the cart.
3. Open the shopping cart.

**Expected results**
- Two products appear in the cart.
- Each item shows name, price, and quantity.
- The cart page opens successfully when the cart icon is selected.

---

### 3. Continue shopping from cart
**Goal:** Verify the user can return to the product catalog without losing cart state.

**Steps**
1. Open the cart page with items in it.
2. Click the continue shopping button.
3. Confirm the inventory list is displayed again.
4. Return to the cart and confirm the items remain selected.

**Expected results**
- The inventory page loads correctly.
- The cart keeps its selected items.
- No cart data loss occurs during navigation.

---

### 4. Checkout form validation for empty required fields
**Goal:** Ensure the form blocks invalid submissions.

**Steps**
1. Open the cart and click Checkout.
2. Leave the First Name, Last Name, and Postal Code fields empty.
3. Click Continue.

**Expected results**
- Validation errors are displayed.
- The user stays on the checkout information page.
- The submission does not continue to the overview page.

---

### 5. Checkout form validation for partial or invalid data
**Goal:** Verify validation handles incomplete input combinations.

**Steps**
1. Open the checkout form.
2. Enter only a first name and leave the other fields empty.
3. Click Continue.
4. Repeat with only a last name or a postal code.

**Expected results**
- Each missing required field triggers a clear message.
- The page remains in the checkout step until valid data is entered.

---

### 6. Successful checkout overview and total calculation
**Goal:** Validate the summary page shows correct order details and totals.

**Steps**
1. Log in and add two products.
2. Go to cart and click Checkout.
3. Enter valid customer details: `John`, `Doe`, `12345`.
4. Click Continue.

**Expected results**
- The overview page displays both items.
- Payment information, shipping information, and item details are visible.
- The total amount matches the expected value of $43.18 including tax.

---

### 7. Complete the order and confirm success
**Goal:** Verify the final confirmation state after purchase completion.

**Steps**
1. Complete the valid checkout flow.
2. Click Finish on the overview page.

**Expected results**
- The order completion page loads.
- The message `Thank you for your order!` is displayed.
- A Back Home / Back to Products action is visible.

---

### 8. Return to products after order completion
**Goal:** Ensure the final confirmation page allows users to return to shopping.

**Steps**
1. Complete a successful checkout.
2. Click the return-to-products button.

**Expected results**
- The user is redirected to the product list page.
- The cart count resets or reflects the correct user flow according to app behavior.

---

### 9. Cart state integrity across navigation and checkout flow
**Goal:** Confirm cart state remains stable during browser navigation and user actions.

**Steps**
1. Add products to the cart.
2. Navigate back and forth between cart, inventory, and checkout.
3. Submit a valid order and then revisit the inventory page.

**Expected results**
- No duplicate or missing cart entries occur.
- The app behaves consistently during back/forward navigation.
- The checkout flow does not corrupt the product selection state.

## Exit Criteria
The checkout workflow is considered validated when all happy-path and validation scenarios pass, and no critical defects remain in core purchase flow behavior.

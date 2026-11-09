# SCRUM-101 - SauceDemo Checkout Test Plan

## Objective
Validate the end-to-end customer checkout experience from product selection through order confirmation.

## Application
SauceDemo storefront at https://www.saucedemo.com/

## Test Data
- Username: standard_user
- Password: secret_sauce
- Products used: Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Fleece Jacket
- Sample checkout data: John / Doe / 12345

## Scenarios

### 1. Complete Checkout Flow - Happy Path
1. Log in with valid credentials.
2. Add multiple products to the cart.
3. Open the cart and verify items.
4. Proceed to checkout.
5. Fill valid checkout information.
6. Review order totals and finish the order.
7. Confirm the order completion page appears.

Expected results:
- Products page loads after login.
- Cart count updates correctly.
- Cart page shows all selected products.
- Checkout overview shows item totals and tax.
- Order confirmation page appears with a success message.

### 2. Cart Review and Navigation
1. Add items to the cart.
2. Open the cart page.
3. Verify item detail display and cart actions.
4. Use Continue Shopping and Remove features.

Expected results:
- Cart preserves items while navigating.
- Prices and names remain visible.
- Product state updates after removal.

### 3. Validation Errors
1. Open checkout information form with items in the cart.
2. Click Continue without filling required fields.
3. Submit partial customer information and verify field-specific errors.
4. Re-enter valid data and continue.

Expected results:
- Error messages show: First Name is required, Last Name is required, Postal Code is required.
- Form remains on the same page until corrected.

### 4. Order Overview Verification
1. Complete customer information.
2. Review payment, shipping, and total details.
3. Validate item summary and price calculations.

Expected results:
- Payment information shows SauceCard #31337.
- Shipping details show Free Pony Express Delivery.
- Total matches item total plus tax.

### 5. Order Completion Confirmation
1. Finish the order.
2. Verify order confirmation messaging.
3. Return to the products page.

Expected results:
- Completion page displays the thank-you message.
- Cart is cleared after checkout completion.
- The user can start a fresh shopping session.

### 6. Edge Cases and Error Handling
1. Test special characters and long text in checkout fields.
2. Check rapid repeated clicks.
3. Navigate back and forward through the flow.

Expected results:
- Validation remains reliable and consistent.
- No duplicate orders or unexpected state changes occur.
- Cart state remains intact.

## Exit Criteria
The workflow passes when the happy path, validation checks, cart navigation, and order completion behaviors are each verified on the target application.

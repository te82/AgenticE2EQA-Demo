# SCRUM-101 - E-commerce Checkout Process Test Plan

## Application Overview

Comprehensive test plan for the SauceDemo e-commerce checkout process covering all user flows from cart review through order completion. Tests include positive scenarios, validation handling, navigation flows, and edge cases across the complete customer purchase journey.

## Test Scenarios

### 1. Checkout Process E2E Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Complete Checkout Flow - Happy Path

**File:** `tests/saucedemo-checkout/complete-checkout-flow.spec.ts`

**Steps:**
  1. Login to application with standard_user credentials
    - expect: User is successfully logged in
    - expect: Products page is displayed
  2. Add multiple products to cart (Backpack $29.99, Bike Light $9.99, Fleece Jacket $49.99)
    - expect: Cart badge shows correct item count
    - expect: Add to cart button changes to Remove
    - expect: Cart icon updates dynamically
  3. Navigate to cart page by clicking cart badge
    - expect: Cart page displays all added items
    - expect: Each item shows name, description, price, quantity
    - expect: Continue Shopping and Checkout buttons are visible
  4. Click Checkout button to proceed to information entry
    - expect: Checkout information page loads
    - expect: Form displays First Name, Last Name, Zip/Postal Code fields
    - expect: Cancel and Continue buttons are present
  5. Fill in checkout information (First Name: John, Last Name: Doe, Zip: 12345)
    - expect: All form fields accept valid data
    - expect: No validation errors appear
  6. Click Continue to proceed to overview
    - expect: Checkout overview page loads
    - expect: All ordered items are displayed with quantities
    - expect: Payment information shows SauceCard #31337
    - expect: Shipping shows Free Pony Express Delivery
    - expect: Price breakdown shows Item total: $89.97, Tax: $7.20, Total: $97.17
  7. Click Finish to complete order
    - expect: Order confirmation page displays
    - expect: Success message 'Thank you for your order!' is shown
    - expect: Order dispatch message is displayed
    - expect: Back Home button is present
  8. Click Back Home button
    - expect: Returns to products page
    - expect: Cart badge is cleared/removed
    - expect: All products show Add to cart buttons

#### 1.2. Cart Review Functionality - AC1

**File:** `tests/saucedemo-checkout/cart-review.spec.ts`

**Steps:**
  1. Login and add items with different prices to cart
    - expect: Items are successfully added to cart
  2. Navigate to cart page and verify item details display
    - expect: All items show correct name, description, price
    - expect: Quantity column displays correct values
    - expect: Individual prices are visible for each item
  3. Verify navigation options in cart
    - expect: Continue Shopping button is present and functional
    - expect: Checkout button is present and functional
    - expect: Remove buttons are available for each item
  4. Test Continue Shopping functionality
    - expect: Returns to products page
    - expect: Cart contents are preserved
    - expect: Product states reflect cart contents
  5. Test Remove item functionality
    - expect: Item is removed from cart
    - expect: Cart count updates
    - expect: Product button changes to Add to cart

#### 1.3. Checkout Information Entry Validation - AC2

**File:** `tests/saucedemo-checkout/checkout-validation-errors.spec.ts`

**Steps:**
  1. Navigate to checkout information page with items in cart
    - expect: Checkout information form is displayed
    - expect: All required fields are present
  2. Click Continue without filling any fields
    - expect: Error message displays 'Error: First Name is required'
    - expect: Red X indicators appear on all empty fields
    - expect: Form remains on same page for correction
  3. Fill only First Name and click Continue
    - expect: Error message displays 'Error: Last Name is required'
    - expect: Visual indicators persist for empty fields
  4. Fill First Name and Last Name, leave Zip empty and click Continue
    - expect: Error message displays 'Error: Postal Code is required'
    - expect: Form validation prevents progression
  5. Test error message dismissal functionality
    - expect: Error message can be dismissed using X button
    - expect: Form remains accessible for correction
  6. Fill all fields with valid data and proceed
    - expect: Form accepts valid data
    - expect: Successfully progresses to checkout overview

#### 1.4. Order Overview Verification - AC3

**File:** `tests/saucedemo-checkout/order-completion.spec.ts`

**Steps:**
  1. Complete checkout information and reach overview page
    - expect: Checkout overview page loads successfully
  2. Verify item summary display
    - expect: All ordered items are listed with QTY and Description
    - expect: Item details match cart contents
    - expect: Individual prices are displayed
  3. Verify payment and shipping information
    - expect: Payment Information shows 'SauceCard #31337'
    - expect: Shipping Information shows 'Free Pony Express Delivery!'
  4. Verify price calculations
    - expect: Item total shows sum of all item prices
    - expect: Tax calculation is accurate (8% rate)
    - expect: Total amount includes tax
    - expect: All monetary values are formatted correctly
  5. Verify navigation options
    - expect: Cancel button is present and functional
    - expect: Finish button is present and functional

#### 1.5. Order Completion Confirmation - AC4

**File:** `tests/saucedemo-checkout/order-completion.spec.ts`

**Steps:**
  1. Complete entire checkout flow up to Finish button
    - expect: Checkout overview page is displayed with all details
  2. Click Finish button to complete order
    - expect: Order confirmation page loads
    - expect: Page title shows 'Checkout: Complete!'
  3. Verify success messaging
    - expect: Success message 'Thank you for your order!' is displayed
    - expect: Order dispatch message confirms delivery
    - expect: Pony Express image/icon is shown
  4. Verify cart clearing functionality
    - expect: Cart badge is no longer visible
    - expect: Cart has been cleared of all items
  5. Test Back Home navigation
    - expect: Back Home button returns to products page
    - expect: All products show Add to cart buttons
    - expect: User can start new shopping session

## Execution Notes

- Primary app URL: https://www.saucedemo.com/
- Username: standard_user
- Password: secret_sauce
- Browser target: Chromium desktop
- Focus: cart review, checkout validation, order completion, and navigation integrity

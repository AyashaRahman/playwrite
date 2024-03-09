const { test, expect } = require("@playwright/test");

test("Product Add and SignUp", async ({ page }) => {
  /*1. Launch browser(Chrome) & 2. Navigate to url 'http://automationexercise.com'*/
  await page.goto("http://automationexercise.com");

  /*3. Verify that home page is visible successfully*/
  await expect(page).toHaveTitle(/Automation Exercise/);

  /*4. Add products to cart*/
  await page.locator(".productinfo > .btn").first().click();
  await page.getByText("Continue Shopping").click();

  /*5. Click 'Cart' button*/
  await page.locator(".nav a").nth(2).click();

  /*6. Verify that cart page is displayed*/
  await expect(page).toHaveTitle(/Automation Exercise - Checkout/);

  /*7. Click Proceed To Checkout*/
  await page.getByText("Proceed To Checkout").click();

  /*8. Click 'Register / Login' button*/
  await page.getByText("Register / Login").nth(1).click();

  /*9. Fill all details in Sign up and create account. Please use an unique email address each time to run the test successfully.*/
  await page.locator("[data-qa=signup-name]").fill("ayashadola");
  await page.locator("[data-qa=signup-email]").fill("ayasha+8@gmail.com");
  await page.locator("[data-qa=signup-button]").click();
  await page.locator("#id_gender2").check();
  await page.locator('[data-qa="password"]').fill("123456");
  await page.locator('[data-qa="days"]').selectOption("6");
  await page.locator('[data-qa="months"]').selectOption("January");
  await page.locator('[data-qa="years"]').selectOption("1996");
  await page.locator("#newsletter").check();
  await page.locator("#optin").check();
  await page.locator('[data-qa="first_name"]').fill("Ayasha");
  await page.locator('[data-qa="last_name"]').fill("Rahman");
  await page.locator('[data-qa="company"]').fill("Ali Express");
  await page.locator('[data-qa="address"]').fill("5/14, Block E, Lalmatia");
  await page.locator('[data-qa="country"]').selectOption("India");
  await page.locator('[data-qa="state"]').fill("Delhi");
  await page.locator('[data-qa="city"]').fill("Delhi");
  await page.locator('[data-qa="zipcode"]').fill("1205");
  await page.locator('[data-qa="mobile_number"]').fill("01715030023");
  await page.locator('[data-qa="create-account"]').click();

  /*10. Verify 'ACCOUNT CREATED!' and click 'Continue' button*/
  await expect(page).toHaveTitle(/Automation Exercise - Account Created/);
  await page.locator('[data-qa="continue-button"]').click();

  /*11. Verify ' Logged in as username' at top*/
  await page.getByText("ayashadola").isVisible();

  /*12.Click 'Cart' button*/
  await page.locator(".nav a").nth(2).click();

  /*13. Click 'Proceed To Checkout' button*/
  await page.getByText("Proceed To Checkout").click();

  /*14. Verify Address Details and Review Your Order*/
  await expect(page).toHaveTitle(/Automation Exercise - Checkout/);

  /*15. Enter description in comment text area and click 'Place Order'
   */
  await page
    .locator('textarea[name="message"]')
    .fill("Please deliver the products ASAP.");
  await page.getByText("Place Order").click();

  /*16. Enter payment details: Name on Card, Card Number, CVC, Expiration date*/
  await page.locator('[data-qa="name-on-card"]').fill("Ayasha Rahman");
  await page.locator('[data-qa="card-number"]').fill("1234 345678 87654");
  await page.locator('[data-qa="cvc"]').fill("602");
  await page.locator('[data-qa="expiry-month"]').fill("June");
  await page.locator('[data-qa="expiry-year"]').fill("2025");

  /*17. Click 'Pay and Confirm Order' button*/
  await page.locator('[data-qa="pay-button"]').click();

  /*18. Verify the success message 'Your order has been placed successfully!'*/
  await expect(page).toHaveTitle(/Automation Exercise - Order Placed/);
});

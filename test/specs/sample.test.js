const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const CartPage = require('../pageobjects/cart.page');

describe('SauceDemo', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
        expect(await DashboardPage.isDashboardDisplayed()).toBe(true);
    });

    it('should add an item to the cart', async () => {
        await CartPage.addItemToCart();
        expect(await CartPage.isItemAddedToCart()).toBe(true);
    });
});

class CartPage {
  get addToCartButton() {
    return $("#add-to-cart-sauce-labs-backpack");
  }
  get cartBadge() {
    return $(".shopping_cart_badge");
  }

  async addItemToCart() {
    await this.addToCartButton.click();
  }

  async isItemAddedToCart() {
    return this.cartBadge.isDisplayed();
  }
}

module.exports = new CartPage();

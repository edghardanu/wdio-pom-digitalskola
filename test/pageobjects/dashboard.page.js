class DashboardPage {
  get dashboardHeader() {
    return $(".title");
  }

  async isDashboardDisplayed() {
    return this.dashboardHeader.isDisplayed();
  }
}

module.exports = new DashboardPage();

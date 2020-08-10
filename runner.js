const { Builder, By, Key, until } = require("selenium-webdriver");

const { tinder } = require("./pages");

const {
  likeProfiles,
  allowPopUps,
  loginWithGoogle,
  switchToWindow,
} = require("./support");

(async function runner() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get(tinder.host);

    await driver.sleep(5000);

    await driver.findElement(By.className(tinder.googleLogin)).click();

    const openWindows = await driver.getAllWindowHandles();

    await switchToWindow(driver, openWindows[1]);

    await loginWithGoogle(
      driver,
      "kingsley.campbell.hunter@gmail.com",
      "eS3k,xzy6M:F4Q)("
    );

    await switchToWindow(driver, openWindows[0]);

    await allowPopUps(driver);
    await likeProfiles(driver);
  } finally {
    await driver.quit();
  }
})();

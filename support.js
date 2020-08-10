const { By, Key } = require("selenium-webdriver");

const { google, tinder } = require("./pages");

module.exports = {
  likeProfiles: async (driver) => {

    // SET 1 HOUR TIMER HERE !!!
    while (true) {
      try {
        await driver.sleep(70);
        await driver.findElement(By.xpath(tinder.like)).click();
      } catch (error) {
        await driver.findElement(By.xpath(tinder.notInterested)).click();
      }
    }
  },
  allowPopUps: async (driver) => {
    for (const notifications of Object.values({ ...tinder.popups })) {
      await driver.sleep(2000);
      await driver.findElement(By.xpath(notifications)).click();
    }
    // wait for location to set
    await driver.sleep(2000);
  },
  loginWithGoogle: async (driver, username, password) => {
    await driver
      .findElement(By.xpath(google.username))
      .sendKeys(username, Key.RETURN);

    await driver.sleep(1000);

    await driver
      .findElement(By.xpath(google.password))
      .sendKeys(password, Key.RETURN);
  },
  switchToWindow: async (driver, window) => {
    await driver.switchTo().window(window);
    await driver.sleep(2000);
  },
};

const webdriver = require("selenium-webdriver");
const  chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

var chromeOptions = new chrome.Options();
chromeOptions.addArguments("start-maximized");

async function sessionTwo() {
    let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

    await driver.get("https://www.facebook.com/");
}

sessionTwo();
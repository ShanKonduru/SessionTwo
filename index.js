const webdriver = require("selenium-webdriver");
const  chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

var chromeOptions = new chrome.Options();
chromeOptions.addArguments("start-maximized");
//// chromeOptions.addArguments("incognito");
//// chromeOptions.addArguments("headless");

/*
start-maximized: Opens Chrome in maximize mode
incognito: Opens Chrome in incognito mode
headless: Opens Chrome in headless mode
disable-extensions: Disables existing extensions on Chrome browser
disable-popup-blocking: Disables pop-ups displayed on Chrome browser
make-default-browser: Makes Chrome default browser
version: Prints chrome browser version
disable-infobars: Prevents Chrome from displaying the notification ‘Chrome is being controlled by automated software
*/

async function sessionTwo() {
    let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

    await driver.get("https://www.google.com/");
}

sessionTwo();
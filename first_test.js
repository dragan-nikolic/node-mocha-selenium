const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder().
  withCapabilities(webdriver.Capabilities.chrome()).
  build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
driver.findElement(webdriver.By.value('Google Search')).click();
driver.quit();

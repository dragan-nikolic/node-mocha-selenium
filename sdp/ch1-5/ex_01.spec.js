const test = require('selenium-webdriver/testing');   // selenium wrappers around mocha's BDD interface
                                                      // that waits for a promise to resolve before
                                                      // continuing further
const webdriver = require('selenium-webdriver');  // this is Selenium!
 
test.describe('Example 01', () => {
  test.before(() => {
    const driver = new webdriver.Builder().forBrowser('chrome').build()
  });

  test.after(() => {
    driver.quit();
  });

  test.it('Example 01 Test 01', () => {
    driver.get('http://awful-valentine.com');
    
    const searchInput = driver.findElement(webdriver.By.id('searchinput'));
    searchInput.clear();
    searchInput.sendKeys("cheese");

    driver.findElement(webdriver.By.id('searchsubmit')).click();
  });
});

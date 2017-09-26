const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');
 
test.describe('Example 01', () => {


  test.it('Example 01 Test 01', async () => {
    const driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    await driver.get('http://awful-valentine.com');
    
    const searchInput = driver.findElement(webdriver.By.id('searchinput'));
    searchInput.clear();
    searchInput.sendKeys("cheese");
    driver.findElement(webdriver.By.id('searchsubmit')).click();
    await driver.quit();
  });
});

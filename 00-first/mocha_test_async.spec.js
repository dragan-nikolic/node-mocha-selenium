// same as mocha_test.spec.js but does not require call to done()
const assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Google Search', function() {
  test.it('should work', async function() {
    const driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    driver.get('http://www.google.com');
    
    const searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'simple programmer');
    });
    driver.quit();
  });
});
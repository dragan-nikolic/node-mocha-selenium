const assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Google Search', function() {
  test.it('should work - promise', function(done) {
    const driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    driver.get('http://www.google.com').then(
      () => {
        const searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('simple programmer');
        searchBox.getAttribute('value').then(
          (value) => {
            assert.equal(value, 'simple programmer');
            driver.quit().then(
              () => {
                done();
              },
              (err) => {
                done(err);
              }
            );
          },
          (err) => {
            done(err);
          }
        );
      },
      (err) => {
        done(err);
      }
    );
  });
});

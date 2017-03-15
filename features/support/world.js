'use strict';

var webdriver = require('selenium-webdriver');
var buildChromeDriver = function() {
    return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
};
var driver = buildChromeDriver();


var getDriver = function() {
  return driver;
};

var World = function World() {
  var defaultTimeout = 3000;
  this.webdriver = webdriver;
  this.driver = driver;

  this.waitFor = function(cssLocator, handler) {
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, defaultTimeout).catch(function(e) {
      handler(e);
      });
  };
};

module.exports.World = World;
module.exports.getDriver = getDriver;

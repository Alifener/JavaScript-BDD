'use strict';

module.exports = function() {
    this.World = require('../support/world.js').World;
    var githubUrl = "https://github.com";
    var user;
    this.Given(/^I navigate to GitHub to sign up$/, function (callback) {
        this.driver.get(githubUrl);
        var signUpButton = this.driver.findElement({ css: '.text-bold.site-header-link[href^="/join"]'});
        signUpButton.click();
        callback();
    });

    this.When(/^I use "([^"]*)" as an (?:already|non) taken username to register$/, function (username, callback) {
        this.user = username;
        var username_input = this.driver.findElement({ css: '#user_login'});
        username_input.clear();
        username_input.sendKeys(username);
        callback();
    });

    this.Then(/^I should see an error message$/, function (callback) {
        this.waitFor('.error', function(ex) {
            throw "Error message check failed due to: " + ex.message;
        });
        callback();
    });

    this.Then(/^I should not see an error message$/, function (callback) {
        this.waitFor('.form-control.is-autocheck-successful', function(ex) {
            throw "Username check failed due to: " + ex.message;
        });
        callback();
    });


};

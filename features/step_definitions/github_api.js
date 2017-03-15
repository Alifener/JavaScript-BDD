'use strict';

var request = require('request');
var chai = require('chai');
var expect =  chai.expect;
var assert = chai.assert;

var github_api_step_definitions = function () {
    var githuburl = "https://api.github.com/users/";

    var user;
    var http_result = {};
    this.Given(/^I have a github "([^"]*)" username$/, function (username, callback) {
        user = username;
        callback();
    });

    this.When(/^I call github user api endpoint$/, function (callback) {
        var myopts = {
            url: githuburl + user,
            timeout: 5000,
            headers: {
                'User-Agent': 'request'
            }
        };
        var handleResp = function (err, resp, body) {
            http_result.response = resp;
            http_result.error = err;
            http_result.body = body;
            callback();
        };
        request(myopts, handleResp);

    });

    this.Then(/^I should be able to verify the username$/, function (callback) {
        if (!http_result.error && http_result.response && http_result.response.statusCode == 200) {
            var info = JSON.parse(http_result.body);
            expect(info.name).to.equal(user);
            //console.log(info.name);
            //console.log(user);
            callback();
        } else {
            assert.fail(http_result.response, "");
        }
    });
};
module.exports = github_api_step_definitions;
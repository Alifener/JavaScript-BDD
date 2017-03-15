Feature: Github API verifying username
  In order to verify an username on Github API
  As an user
  I should see the username in the API Response

  Scenario: API returns correct full name
    Given I have a github "PhotoBox" username
    When  I call github user api endpoint
    Then  I should be able to verify the username


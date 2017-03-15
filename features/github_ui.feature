Feature: Github UI username availability
  In order to shows availability of a username
  As an user
  I should see a notification regarding username availability

  Scenario: Availability of a username
    Given I navigate to GitHub to sign up
    When  I use "photobox" as an already taken username to register
    Then  I should see an error message
    When  I use "a-photobox-999" as an non taken username to register
    Then  I should not see an error message

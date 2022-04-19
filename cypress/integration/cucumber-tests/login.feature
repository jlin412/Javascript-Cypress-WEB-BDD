Feature: WP Login

  Background:
    Given User navigates to WP login page

  Scenario: Login into account with correct credentials
    When User enters valid credentials combination
    And User click on enters
    Then System shows admin backoffice page

  Scenario: Login into account with incorrect credentials
    When User enters an incorrect credentials combination
    And User click on enters
    Then System shows an error message
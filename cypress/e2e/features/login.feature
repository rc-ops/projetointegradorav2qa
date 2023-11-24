Feature: Realização de login

  Scenario: Login with valid information
    Given The user is at the login page
    When The user enters the username "standard_user"
    And The user enters the password "secret_sauce"
    And The user clicks on the login button
    Then Check the url of the page

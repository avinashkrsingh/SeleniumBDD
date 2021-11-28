Feature:  Lloydspharmacy I would like to register so I can

  #This is a typical scenario Example. Every Scenario starts with "Scenario:" keyword.
  #Scenarios are represented in Given When Then syntax

#  Scenario: Register a customer successfully
#    Given i navigate to the Lloydspharmacy "HOME" page
#    And i click "SIGN_IN" on the Home Page
#    And i click on Register for New Registration
#    When i fill in the registration form on New Registration page
#    Then i am registered successfully and can view "My Account Summary" page
#    When i click "SIGN_OUT" on the Home Page
#    Then i am signed out successfully and can view Sign In Page

@gui
  Scenario Outline: Negative combinations for user login scenarios
    Given i navigate to the Lloydspharmacy "HOME" page
#    When i click "SIGN_IN" on the Home Page
#    And i enter loginId "<loginId>" and password "<password>"
#    And i click on Sign In button on the Login Page
#    Then i can see the validation message "<validationMessage>"



    Examples:
      | loginId | password | validationMessage      |
      | invalid | invalid  | error.incorrectDetails |
      |         |          | error.enterLogin       |


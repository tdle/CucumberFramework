Feature: Log into account
	Existing user should be able to log into account using correct credentials
	
Scenario Outline: Login to account with credentials
	Given user navigates to "<url>"
	When user clicks on the login portal button
	And User enters username "<username>"
	And User enters password "<password>"
	And User clicks on the login button
	Then user should be presented with validation "<message>"
		
	Examples: Test Data
	|			          url		  	   | username | password   | 	  message      |
	|	http://www.webdriveruniversity.com | tdle     | testuser1  | validation failed |
	
Feature: Submit data to webdriveruniversity.com using contact us form

Scenario Outline: Submit valid data via contact us form
	Given user navigates to "<url>"
	When user clicks on the contact us button
	And user enters first name
	And user enters last name
	| woods | jackson | jones |
	When user enters email
	And user enters comment
	| example comment one | example comment two |
	When I click on the submit button
	Then the information should successfully be submitted via the contact us form
	
	Examples:
	|                  url               |
	| http://www.webdriveruniversity.com |
	
package stepDefinitions;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;

public class LoginSteps extends DriverFactory  {
	
	@When("^user clicks on the login portal button$")
	public void user_clicks_on_the_login_portal_button() throws Exception {
		getDriver().findElement(By.cssSelector("a[id='login-portal']")).click();
	}
	
	@Given("^User enters username \"([^\"]*)\"$")
	public void user_enters_a_username(String username) throws Throwable {
		for (String windHandle : getDriver().getWindowHandles()) {
			getDriver().switchTo().window(windHandle);
		}
		
		getDriver().findElement(By.id("text")).sendKeys(username);

		//tab code
		// allows user to enter customer user name as specified in the Feature
		// file
	}
	
	@Given("^User enters password \"([^\"]*)\"$")
	public void user_enters_a_password(String password) throws Throwable {
		getDriver().findElement(By.id("password")).sendKeys(password);

		// allows user to enter customer password as specified in the Feature
		// file
	}
	
	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Exception {
		getDriver().findElement(By.cssSelector("button[id='login-button']")).click();

	}

	@Then("^user should be presented with validation \"([^\"]*)\"$")
	public void user_should_be_presented_with_validation(String message) throws Exception {
		Alert alert = getDriver().switchTo().alert();
		assertEquals(alert.getText().toString().toLowerCase().replaceAll("\\s",  ""), message.toLowerCase().replaceAll("\\s", ""));
		alert.accept();
		
		/*
		 * switches to alert on screen
		 * prints out alert text
		 * Asserts the alert text is correct, as stated in the data table in the feature file
		 */
	}
	

}

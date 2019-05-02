package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;

public class ContactUsSteps extends DriverFactory {
	
	@When("^user clicks on the contact us button$")
	public void user_clicks_on_the_contact_us_button() throws Exception {
		getDriver().findElement(By.cssSelector("a[id='contact-us']")).click();
	}
	
	@When("^user enters first name$")
	public void user_enters_first_name() throws Throwable {
		
		for (String windHandle : getDriver().getWindowHandles()) {
			getDriver().switchTo().window(windHandle);
		}
	
		ContactUsPage.enterFirstName("Tom");
	}
	
	@When("^user enters last name$")
	public void user_enters_last_name(DataTable dataTable) throws Throwable {
		ContactUsPage.enterLastName(dataTable, 0, 1);
	}
	
	@When("^user enters email$")
	public void user_enters_email() throws Exception {
		ContactUsPage.enterEmailAddress("tdle@test.com");
	}
	
	@When("^user enters comment$")
	public void i_enters_comment(DataTable dataTable) throws Throwable{
		ContactUsPage.enterComments(dataTable, 0, 1);
	}
	
	@When("^I click on the submit button$")
	public void i_click_on_the_submit_button() throws Exception {
		ContactUsPage.clickOnSubmitButton();
	}
	
	@Then("^the information should successfully be submitted via the contact us form$")
	public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Exception {
		Thread.sleep(3000);
		WebElement thanksContactUsPage = getDriver().findElement(By.id("contact_reply"));
		
		//Expected Actual
		Assert.assertEquals("thankyouforyourmessage!", thanksContactUsPage.getText().toLowerCase().replaceAll("[ ()0-9]", ""));
		
		/*
		 * Thread.sleep waits for 3 seconds
		 * WebElement called thanksContactUsPage and then add the locator
		 * Assert is asserting the thank you message is valid, call the element you created, which is thanksContactUsPage, then getting the text from that alert, moving all - 
		 * characters to lower case, then using a regex statement to replace empty spaces, brackets and numbers with an empty space
		 * Remember to use both [ and ] to end the regex statement
		 */
	}
}

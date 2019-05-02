package stepDefinitions;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;


public class ProductSteps extends DriverFactory {
	
	@Given("^user navigates to \"([^\"]*)\" website$")
	public void use_navigates_to_website(String url) {
		getDriver().get(url);
	}
	
	@When("^user clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String locator) throws Exception {
		Thread.sleep(3000);
		getDriver().findElement(By.cssSelector(locator)).click();
	}
	
	@Then("^user should be presented with a promo alert$")
	public void user_should_be_presented_with_a_promo_alert() throws Exception {
		ProductsPage.printSpecialOffersVoucherCode();
		ProductsPage.clickOnButton_Popup();
	}

}

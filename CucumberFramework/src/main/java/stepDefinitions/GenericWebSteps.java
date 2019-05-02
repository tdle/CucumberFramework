package stepDefinitions;

import cucumber.api.java.en.Given;
import utils.DriverFactory;


public class GenericWebSteps extends DriverFactory{
	
	@Given("^user navigates to \"([^\"]*)\"$")
	public void user_navigates_to(String url) throws Throwable {
		getDriver().get(url);
	}	
	
	@Given("^user waits for (\\d+) seconds$")
	public void user_waits_for_seconds(int arg1) throws Throwable {
		Thread.sleep(arg1 * 1000);
		System.out.println("And user waits for " + arg1 + "seconds");
	}
}
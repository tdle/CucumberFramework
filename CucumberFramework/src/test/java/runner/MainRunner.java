package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions (
		features = {"src/test/java//features"},
		glue = {"stepDefinitions"},
		monochrome = true,
		tags = {},
		plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
		)

//features = pointing CucumberOptions to feature package
//glue code = points to the steps package
//Monochrome - changes the output to the console
//Tags - Links to the scenarios within steps package
//Plug-in - allows for use of reporting and other third party

public class MainRunner extends AbstractTestNGCucumberTests {
	
}

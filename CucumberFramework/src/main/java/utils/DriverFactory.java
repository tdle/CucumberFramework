package utils;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;

import pageObjects.ContactUs_Page;
import pageObjects.Products_Page;

public class DriverFactory {
	
	public static WebDriver driver;
	public static ContactUs_Page ContactUsPage;
	public static Products_Page ProductsPage;

	public WebDriver getDriver() {
		
		try {
			// Read Config
			Properties p = new Properties();
			FileInputStream fi = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\java\\properties\\config.properties");
			p.load(fi);
			String browser = p.getProperty("browser");
			
			switch (browser) {
			
			/*
			 * switch statement lets you select the browser you want
			 */

			case "firefox":
				// code
				if (null == driver) {
					System.setProperty("webdriver.gecko.driver", Constant.GECKO_DRIVER_DIRECTORY);
					DesiredCapabilities capabilities = DesiredCapabilities.firefox();
					capabilities.setCapability("marionette", true);
					driver = new FirefoxDriver();
					driver.manage().window().maximize();
				}
				
				break;

			case "chrome":
				// code
				if (null == driver) {
					System.setProperty("webdriver.chrome.driver", Constant.CHROME_DRIVER_DIRECTORY);
					driver = new ChromeDriver();
					driver.manage().window().maximize();
				}
				
				break;
			}
		} catch (Exception e) { 
			System.out.println("Unable to load browser: " + e.getMessage());
			e.printStackTrace();
		} finally {
			driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
			ContactUsPage = PageFactory.initElements(driver, ContactUs_Page.class);
			ProductsPage = PageFactory.initElements(driver, Products_Page.class);
		}
		return driver;
	}
}

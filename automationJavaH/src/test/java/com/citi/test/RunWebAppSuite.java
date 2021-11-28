package com.citi.test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = "C:\\Users\\Avinash Kumar Singh\\Downloads\\cucumber_testng_java-master\\src\\test\\resources\\features\\web\\WebRegister.feature", tags = {"@gui"}, monochrome = true, plugin = {
        "pretty", "html:target/cucumber-report/webapp",
        "json:target/cucumber-report/webapp/cucumber.json",
        "rerun:target/cucumber-report/webapp/rerun.txt"},
        glue = "com.citi.test")
public class RunWebAppSuite extends AbstractTestNGCucumberTests {

}

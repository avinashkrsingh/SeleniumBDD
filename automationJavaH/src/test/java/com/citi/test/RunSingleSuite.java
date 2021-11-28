package com.citi.test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = "C:\\Users\\Avinash Kumar Singh\\Downloads\\cucumber_testng_java-master\\src\\test\\resources\\features\\web\\WebRegister.feature", monochrome = true, tags = "@gui", plugin = {
        "pretty", "html:target/cucumber-report/single",
        "json:target/cucumber-report/single/cucumber.json",
        "rerun:target/cucumber-report/single/rerun.txt"},
        glue = "com.citi.test")
public class RunSingleSuite extends AbstractTestNGCucumberTests {
}

package com.citi.test.step_definitions.gui;


import com.citi.test.framework.helpers.UrlBuilder;
import cucumber.api.java.en.Given;


public class NavigationSteps {


    @Given("^i navigate to the Lloydspharmacy \"(.*?)\" page$")
    public void i_navigate_to_the_website_page(String pageName) throws Throwable {
        if (pageName.equals("HOME")) {
            UrlBuilder.startAtHomePage();
        }
    }


}
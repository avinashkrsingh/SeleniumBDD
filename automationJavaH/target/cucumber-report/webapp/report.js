$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Avinash%20Kumar%20Singh/Downloads/cucumber_testng_java-master/src/test/resources/features/web/WebRegister.feature");
formatter.feature({
  "name": "Lloydspharmacy I would like to register so I can",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Negative combinations for user login scenarios",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gui"
    }
  ]
});
formatter.step({
  "name": "i navigate to the Lloydspharmacy \"HOME\" page",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "loginId",
        "password",
        "validationMessage"
      ]
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "error.incorrectDetails"
      ]
    },
    {
      "cells": [
        "",
        "",
        "error.enterLogin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Negative combinations for user login scenarios",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gui"
    }
  ]
});
formatter.step({
  "name": "i navigate to the Lloydspharmacy \"HOME\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.i_navigate_to_the_website_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative combinations for user login scenarios",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gui"
    }
  ]
});
formatter.step({
  "name": "i navigate to the Lloydspharmacy \"HOME\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.i_navigate_to_the_website_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
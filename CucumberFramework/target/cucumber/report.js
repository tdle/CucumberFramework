$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Log into account",
  "description": "Existing user should be able to log into account using correct credentials",
  "id": "log-into-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login to account with credentials",
  "description": "",
  "id": "log-into-account;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be presented with validation \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "log-into-account;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 13,
      "id": "log-into-account;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com",
        "tomdale",
        "testuser1",
        "validation failed"
      ],
      "line": 14,
      "id": "log-into-account;login-to-account-with-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4966806867,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to account with credentials",
  "description": "",
  "id": "log-into-account;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username \"tomdale\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters password \"testuser1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be presented with validation \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "GenericWebSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 971496603,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_portal_button()"
});
formatter.result({
  "duration": 103072926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomdale",
      "offset": 22
    }
  ],
  "location": "LoginSteps.user_enters_a_username(String)"
});
formatter.result({
  "duration": 1204494703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser1",
      "offset": 22
    }
  ],
  "location": "LoginSteps.user_enters_a_password(String)"
});
formatter.result({
  "duration": 107422357,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 99859045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 42
    }
  ],
  "location": "LoginSteps.user_should_be_presented_with_validation(String)"
});
formatter.result({
  "duration": 15705450,
  "status": "passed"
});
formatter.after({
  "duration": 740157362,
  "status": "passed"
});
formatter.uri("contactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the contact us button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters first name",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters last name",
  "rows": [
    {
      "cells": [
        "woods",
        "jackson",
        "jones"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters email",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters comment",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 16,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com"
      ],
      "line": 17,
      "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3926806599,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"http://www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the contact us button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters first name",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters last name",
  "rows": [
    {
      "cells": [
        "woods",
        "jackson",
        "jones"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters email",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters comment",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com",
      "offset": 19
    }
  ],
  "location": "GenericWebSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 1173466775,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_clicks_on_the_contact_us_button()"
});
formatter.result({
  "duration": 468945342,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enters_first_name()"
});
formatter.result({
  "duration": 1411432202,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enters_last_name(DataTable)"
});
formatter.result({
  "duration": 162866420,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enters_email()"
});
formatter.result({
  "duration": 196108902,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enters_comment(DataTable)"
});
formatter.result({
  "duration": 225378757,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 673757731,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 3162493728,
  "status": "passed"
});
formatter.after({
  "duration": 684950795,
  "status": "passed"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "Products page",
  "description": "",
  "id": "products-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate promo code alert is visable when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visable-when-clicking-on-the-special-offers-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visable-when-clicking-on-the-special-offers-link;",
  "rows": [
    {
      "cells": [
        "url",
        "button"
      ],
      "line": 9,
      "id": "products-page;validate-promo-code-alert-is-visable-when-clicking-on-the-special-offers-link;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
        "#container-special-offers"
      ],
      "line": 10,
      "id": "products-page;validate-promo-code-alert-is-visable-when-clicking-on-the-special-offers-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3596794242,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Validate promo code alert is visable when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visable-when-clicking-on-the-special-offers-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"http://www.webdriveruniversity.com/Page-Object-Model/products.html\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \"#container-special-offers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "GenericWebSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 538725922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#container-special-offers",
      "offset": 16
    }
  ],
  "location": "ProductSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 3118665284,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 2511054782,
  "status": "passed"
});
formatter.after({
  "duration": 667695465,
  "status": "passed"
});
});
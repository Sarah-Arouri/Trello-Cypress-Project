import {
  After,
  Before,
  Given,
  Then,
  When,
} from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import HideTemplateFromListActions from "../../../pageObjects/regressionTests/hideTemplateFromList/actions.cy";
import HideTemplateFromListAssertions from "../../../pageObjects/regressionTests/hideTemplateFromList/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const hideTemplateFromListAction = new HideTemplateFromListActions();
const hideTemplateFromListAssertion = new HideTemplateFromListAssertions();

const boardName = "newBoard";

before(() => {
  cy.loginTrelloWeb();
  //To Create New Board
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
  //To Get Lists
  cy.get("@boardResponse").then((response) => {
    sharedDataUtil.getList(response.body.id).as("listResponse");
  });
  // To Create New Card With Template
  cy.get("@listResponse").then((response) => {
    sharedDataUtil
      .createNewCard(response.body[0].id, "Card1", true)
      .as("cardResponse");
  });
});

Given("Navigate to the Board", () => {
  cy.wait(6000);

  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

When("Clicks On Card Name On List",()=>{
    cy.wait(1000);
    hideTemplateFromListAction.clicksOnCard();
});

When("Clicks On Hide Template Button",()=>{
    hideTemplateFromListAction.clickOnHide();
});

Then("Card Hide Successfully",()=>{
  hideTemplateFromListAssertion.cardHide();
})

After(() => {
  cy.wait(3000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedDataUtil.deleteBoard(data.body.id);
  });
});

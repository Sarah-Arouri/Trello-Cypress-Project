import {
  After,
  Before,
  Given,
  Then,
  When,
} from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import DeleteExistingCardActions from "../../../pageObjects/regressionTests/deleteExistingCard/actions.cy";
import DeleteExistingCardAssertions from "../../../pageObjects/regressionTests/deleteExistingCard/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const deleteExistingCardAction = new DeleteExistingCardActions();
const deleteExistingCardAssertion = new DeleteExistingCardAssertions();
const boardName = "newBoard";
//const url = "https://trello.com/";
const cardName = "Card1";

before(() => {
  cy.loginTrelloWeb();
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
  cy.get("@boardResponse").then((response) => {
    sharedDataUtil.getList(response.body.id).as("listResponse");
  });
  cy.get("@listResponse").then((response) => {
    sharedDataUtil.createCard(response.body[0].id).as("cardResponse");
  });
});

Given("Navigate to the Board", () => {
  cy.wait(6000);

  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

When("Clicks On The Card", () => {
  deleteExistingCardAction.clicksOnCard();
});

When("Clicks The Archive Button On Actions", () => {
  cy.wait(3000);
  deleteExistingCardAction.clicksOnArchiveButton();
});

When("Clicks On Delete Button", () => {
  deleteExistingCardAction.clicksOnDeleteButton();
});

When("Clicks ON Confirm Delete Button", () => {
  deleteExistingCardAction.clicksOnConfirmButton();
});

Then("The Card Will Be Delete Successfully", () => {
  deleteExistingCardAssertion.cardNotExist();
});

After(() => {
  cy.wait(3000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedDataUtil.deleteBoard(data.body.id);
  });
});

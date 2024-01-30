import {
  After,
  Before,
  Given,
  Then,
  When,
} from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import UpdateListNameActions from "../../../pageObjects/regressionTests/updateListName/actions.cy";
import UpdateListNameAssertions from "../../../pageObjects/regressionTests/updateListName/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const updateNewListAction = new UpdateListNameActions();
const updateNewListAssertion = new UpdateListNameAssertions();

const boardName = "newBoard";
const listOfNames = ["UpdatedToDo", "UpdatedDoing", "UpdatedDone"];

before(() => {
  cy.loginTrelloWeb();
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
});

Given("Navigate to the board successfully", () => {
  cy.wait(6000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedAction.openBoard(data.body.url);
  });
});

When("Clickes On Listes Title And Changes The Title", () => {
  cy.wait(6000);
  for (let i = 0; i < listOfNames.length; i++) {
    updateNewListAction.updatesTitle(i, listOfNames[i]);
  }
});

Then("The Titles Will Be Updated", () => {
  cy.wait(6000);
  for (let i = 0; i < listOfNames.length; i++) {
    cy.wait(1000);
    updateNewListAssertion.listesOfUpdatedNames(listOfNames[i]);
  }
});

After(() => {
  cy.wait(3000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedDataUtil.deleteBoard(data.body.id);
  });
});

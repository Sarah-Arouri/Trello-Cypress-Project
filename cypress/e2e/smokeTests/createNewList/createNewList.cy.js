import {
  After,
  Before,
  Given,
  Then,
  When,
} from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import CreateNewListActions from "../../../pageObjects/smokeTests/createNewList/actions.cy";
import CreateNewCardAssertions from "../../../pageObjects/smokeTests/createNewCard/assertions.cy";
import CreateNewListAssertions from "../../../pageObjects/smokeTests/createNewList/assertions.cy";


const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const createNewListAction = new CreateNewListActions();
const createNewListAssertion = new CreateNewListAssertions();

const boardName = "newBoard";
const listName = "newList";

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

When("Clicks on the add new list button",()=>{
  createNewListAction.clickesOnListButton();
});

When("Types the title on enter list title field",()=>{
    createNewListAction.typesOnTitleField(listName);
});

When("Clicks on Add List button",()=>{
    cy.wait(3000);
    createNewListAction.clickesOnAddListButton();
});

Then("The list will be added successfully",()=>{
    cy.wait(3000);
    createNewListAssertion.newListExists(listName);
})

After(() => {
  cy.wait(3000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedDataUtil.deleteBoard(data.body.id);
  });
});

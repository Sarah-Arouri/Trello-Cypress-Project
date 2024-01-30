import {
  After,
  Before,
  Given,
  Then,
  When,
} from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import CreateNewTemplateActions from "../../../pageObjects/regressionTests/createNewTemplate/actions.cy";
import CreateNewTemplateAssertions from "../../../pageObjects/regressionTests/createNewTemplate/assertions.cy";


const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const createNewTemplateAction = new CreateNewTemplateActions();
const createNewTemplateAssertion = new CreateNewTemplateAssertions();

const boardName = "newBoard";
const tempName = "newTemp";

before(() => {
  cy.loginTrelloWeb();
  //To Create New Board
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
  //To Get Lists
  cy.get("@boardResponse").then((response) => {
    sharedDataUtil.getList(response.body.id).as("listResponse");
  });
  
});

Given("Navigate to the Board", () => {
  cy.wait(6000);

  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

When("Clicks On New Template Button",()=>{
   createNewTemplateAction.clicksOnAddTemplate();
});

When("Clicks On Create Template Button",()=>{
    createNewTemplateAction.clicksOnCreateTemplate();
});

When("Types On Title Field",()=>{
    cy.wait(3000);
    createNewTemplateAction.typesTitleOfTemplate(tempName);
});

When("Clicks On Add Button",()=>{
    createNewTemplateAction.clicksOnAddButton();
});

Then("Template Create Successfully",()=>{
    createNewTemplateAssertion.templateExist();
});

After(() => {
  cy.wait(3000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedDataUtil.deleteBoard(data.body.id);
  });
});

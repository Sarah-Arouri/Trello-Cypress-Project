import {
  After,
  Before,
  Given,
  Then,
  When,
} from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import CreateNewCardActions from "../../../pageObjects/smokeTests/createNewCard/actions.cy";
import CreateNewCardAssertions from "../../../pageObjects/smokeTests/createNewCard/assertions.cy";



const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const createNewCardAction = new CreateNewCardActions();
const createNewCardAssertion = new CreateNewCardAssertions();

const boardName = "newBoard"; //+ Math.floor(Math.random()*100);
const cardName = "Card1";
// //let  boardId,boardUrl;

before(() => {
  cy.loginTrelloWeb();
//   //Another Way To Get The Response
//   // sharedDataUtil.createNewBoard(boardName).then((response)=>{
//   //     boardId = response.body.id
//   //     boardUrl = response.body.url;
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
});

Given("Navigate to the Board", () => {
  cy.wait(6000);
//   //sharedAction.openBoard(boardUrl);

  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedAction.openBoard(data.body.url);
  });
});

When("Click On Add To Card Button", () => {
  cy.wait(3000);
  cy.screenshot({capture:"fullPage"})
  cy.wait(6000)
  createNewCardAction.clickOnAddToCardButtons();
});

When("Write The Title Of The New Card", () => {
  cy.wait(3000);
  createNewCardAction.typeInTitleField(cardName);
});

When("Click on Add Card Button", () => {
  cy.wait(3000);
  createNewCardAction.clickOnAddCardButton();
});

Then("The Card Will Be Added Successfully", () => {
  cy.wait(3000);
  createNewCardAssertion.checkCardExist(cardName);
});

After(() => {
  cy.wait(3000);
  //sharedDataUtil.deleteBoard(boardId);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedDataUtil.deleteBoard(data.body.id);
  });
});

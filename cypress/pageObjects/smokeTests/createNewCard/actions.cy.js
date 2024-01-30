class CreateNewCardActions {
   clickOnAddToCardButtons(){
    cy.get("[data-testid='list-add-card-button']").first().click();
    return this;
   };

   typeInTitleField(cardName){
    cy.get("[data-testid='list-card-composer-textarea']").clear().type(cardName);
    return this;
   };

   clickOnAddCardButton(){
    cy.get("[data-testid='list-card-composer-add-card-button']").click();
    return this;
   }
}
export default CreateNewCardActions;

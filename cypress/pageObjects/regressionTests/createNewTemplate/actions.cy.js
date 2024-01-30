class CreateNewTemplateActions {
   clicksOnAddTemplate(){
      cy.get("[data-testid='TemplateCardIcon']").first().click();
      return this;
   };

   clicksOnCreateTemplate(){
    cy.get("[data-testid='create-new-template-card-button']").click();
    return this;
   };

   typesTitleOfTemplate(tempName){
    cy.get("[data-testid='create-template-card-composer']").first().type(tempName);
    return this;
   };

   clicksOnAddButton(){
    cy.get("[data-testid='new-template-card-submit-button']").click();
    cy.wait(1000);
    cy.get(".js-close-window").click();
    return this;
   }
}
export default CreateNewTemplateActions;
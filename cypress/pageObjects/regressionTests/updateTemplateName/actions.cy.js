class UpdateTemplateNameActions {
   clicksOnCard(){
    cy.get("[data-testid='card-name']").first().click({force:true});
    return this;
   };

   updateCardName(tempName){
    cy.get(".js-card-detail-title-input").clear().type(tempName);
    cy.wait(1000);
    cy.get(".js-close-window").click();
    return this;
   };
}
export default UpdateTemplateNameActions;
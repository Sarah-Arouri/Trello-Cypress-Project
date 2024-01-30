class DeleteExistingCardActions {
   clicksOnCard(){
    cy.get("[data-testid='list-cards']").first().click();
    return this;
   };

   clicksOnArchiveButton(){
    cy.get(".js-archive-card").click();
    return this;
   };

   clicksOnDeleteButton(){
      cy.get(".js-delete-card").click();
      return this;
   };

   clicksOnConfirmButton(){
     cy.get("[type='submit']").click();
     return this;
   };
}

export default DeleteExistingCardActions;
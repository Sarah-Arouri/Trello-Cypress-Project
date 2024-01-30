class HideTemplateFromListActions{
    clicksOnCard(){
        cy.get("[data-testid='card-name']").first().click({force:true});
        return this;
       };

     clickOnHide(){
        cy.get(".js-archive-card").click();
        cy.get(".dialog-close-button").click();
        return this;
     }  
}
export default HideTemplateFromListActions;
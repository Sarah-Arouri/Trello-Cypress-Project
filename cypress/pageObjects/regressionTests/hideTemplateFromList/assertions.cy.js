class HideTemplateFromListAssertions{
    cardHide(){
        cy.get("[data-testid='list-cards']").should("be.empty");
        return this;
       };

}
export default HideTemplateFromListAssertions;
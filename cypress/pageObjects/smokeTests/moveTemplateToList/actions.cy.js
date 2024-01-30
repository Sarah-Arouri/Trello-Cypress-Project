class MoveTemplateToListActions {
    clicksOnCard(){
        cy.get("[data-testid='card-name']").first().click({force:true});
        return this;
       };

    clicksOnMove(){
        cy.get(".js-move-card").click();
        return this;
    };

    clicksOnlist(){
        cy.get("[data-testid='move-card-popover-select-list-destination']").select("Doing");
        return this;
    };

    clicksMoveButton(){
        cy.get("[data-testid='move-card-popover-move-button']").click();
        cy.get(".icon-md icon-close").click();
        return this;
    };
}
export default MoveTemplateToListActions;

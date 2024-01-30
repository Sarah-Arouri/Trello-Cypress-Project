class DeleteExistingCardAssertions{
    cardNotExist(){
        cy.get("[data-testid='trello-card']").should("not.exist");
        //cy.get("[data-testid='list-cards']").should("be.empty");
        return this;
    }
}
export default DeleteExistingCardAssertions;
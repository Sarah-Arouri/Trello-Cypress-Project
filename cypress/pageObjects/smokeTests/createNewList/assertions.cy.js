class CreateNewListAssertions {
   newListExists(listName){
    cy.get("[data-testid='list-name']").should("contain",listName);
    return this;
   }
}
export default CreateNewListAssertions;
class UpdateListNameAssertions {
  listesOfUpdatedNames(listOfNames) {
    cy.get("[data-testid='list-name-textarea']").should("contain", listOfNames);

    return this;
  }
}
export default UpdateListNameAssertions;

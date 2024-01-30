class CreateNewListActions {
  clickesOnListButton(){
    cy.get("[data-testid='list-composer-button']").click();
    return this;
  };

  typesOnTitleField(listName){
    cy.get("[data-testid='list-name-textarea']").last().clear().type(listName);
    return this;
  };

  clickesOnAddListButton(){
    cy.get("[data-testid='list-composer-add-list-button']").last().click();
    return this;
  }
}
export default CreateNewListActions;
class UpdateListNameActions{
    updatesTitle(index,listOfNames){
     cy.get("[data-testid='list-name']").eq(index).type(listOfNames);
     return this;
    }
}
export default UpdateListNameActions;
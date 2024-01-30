class CreateNewTemplateAssertions {
  templateExist(){
    cy.get("[data-testid='card-front-badges']").should("contain","This card is a template.");
    return this;
  };
}
export default CreateNewTemplateAssertions;
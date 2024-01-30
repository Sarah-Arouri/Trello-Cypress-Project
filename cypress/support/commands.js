// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginTrelloWeb", (email, passward) => {
    cy.visit("https://trello.com/login");
    cy.wait(3000);
    cy.fixture("example.json").then((loginData)=>{
      cy.get("#user").clear().type(loginData.email);
      cy.get("#login").click();
      cy.wait(3000);
      const password = loginData.password;
      cy.origin("https://id.atlassian.com/",{args:password},(password)=>{
         cy.get("#password").clear().type(password);
         cy.get("#login-submit").click();
         cy.wait(6000);
    })
})
})

import "cypress-localstorage-commands";

Cypress.Commands.add("login", function () {
  cy.get('input[name="email"]').type("mateusgomesbarros@hotmail.com");
  cy.get('input[name="password"]').type("@Idontgive199");
  cy.contains("span", "Entrar").click();

});

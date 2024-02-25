import "cypress-localstorage-commands";

Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.request({
    method: "POST",
    url: "https://api.vturb.com.br/auth/login.json",
    body: {
      login: {
        email: "contatoarqalexsoares@gmail.com",
        password: "Alex3d0809@",
      },
    },
  }).then((response) => {
    let tokenJWT = response.body.token;
    cy.setLocalStorage("access_token", tokenJWT);
    cy.setCookie("access_token", tokenJWT);
    cy.route({
      method: "POST",
      url: "https://api.vturb.com.br/auth/login.json",
      response: { token: tokenJWT }, // Pode ajustar conforme necessário
    });
  });

  cy.get("#firstName").type("Mateus");
  cy.get("#lastName").type("Gomes");
  cy.get("#email").type("mateus.gomes@vturb.com");
  cy.get("#open-text-area").type("Teste");
  cy.get('button[type="submit"]').click();
});

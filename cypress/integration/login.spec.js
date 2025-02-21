// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />

describe("VTurb", function () {
  before(() => {
    // Configura o Cypress para preservar cookies entre os testes
    Cypress.Cookies.defaults({
      preserve: ["access_token"] // Substitua "jwtToken" pelo nome do seu cookie JWT
    });
  });

  beforeEach(() => {
    // Visita apenas a página de login
    cy.visit("https://login.vturb.com");

    // Certifique-se de que a página não será recarregada
    cy.server();
    
  });

  it("Autenticação e Uso de Token JWT", function () {
    // Realiza a autenticação na aplicação
    cy.get('input[name="email"]').type("mateusgomesbarros@hotmail.com");
    cy.get('input[name="password"]').type("@Idontgive199");
    cy.contains("span", "Entrar").click();
  
  });
});

// it('exibe mensagem de erro ao submeter o formulário com um email de formatação inválida', function(){
//     cy.get('#firstName').type('Mateus')
//     cy.get('#lastName').type('Gomes')
//     cy.get('#email').type('mateus.gomes@vturb,com')
//     cy.get('#open-text-area').type('Teste')
//     cy.get('button[type="submit"]').click()

//     cy.get('.error').should('be.visible')
//   })
//   it('Verificação se contém apenas números', function(){
//     cy.get('#phone')
//     .type('abcdefghij')
//     .should('have.number', '')
//   })
//   it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
//     cy.get('#firstName').type('Mateus')
//     cy.get('#lastName').type('Gomes')
//     cy.get('#email').type('mateus.gomes@vturb.com')
//     cy.get('#phone-checkbox').click()
//     cy.get('#open-text-area').type('Teste')
//     cy.get('button[type="submit"]').click()

//     cy.get('.error').should('be.visible')
//   })

//   it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
//     cy.get('#firstName')
//     .type('Mateus')
//     .should('have.value', 'Mateus')
//     .clear()
//     .should('have.value', '')
//     cy.get('#lastName')
//     .type('Gomes')
//     .should('have.value', 'Gomes')
//     .clear()
//     .should('have.value', '')
//     cy.get('#email')
//     .type('mateusgomes@hotmail.com')
//     .should('have.value', 'mateusgomes@hotmail.com')
//     .clear()
//     .should('have.value', '')
//     cy.get('#phone')
//     .type('999836351')
//     .should('have.value', '999836351')
//     .clear()
//     .should('have.value', '')

//   })
//   it.only('envia formulário com sucesso usando comando customizado', function() {

//     cy.fillMandatoryFieldsAndSubmit()

//     cy.get('.success').should('be.visible')
// })

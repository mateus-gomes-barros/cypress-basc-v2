Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Mateus')
    cy.get('#lastName').type('Gomes')
    cy.get('#email').type('mateus.gomes@vturb.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})
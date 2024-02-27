/// <reference types="Cypress" />

describe("VTurb", function () {
    before(() => {
      Cypress.Cookies.defaults({
        preserve: ["access_token"] 
      });
    });
  
    
    it("Acessando pagina de videos", function () {
     cy.visit("https://login.vturb.com");   
    //   cy.login()
      cy.contains("a", "Meus vídeos").click();
      cy.get('.ant-table-body').scrollTo(0,500)

      cy.contains('lead_03').click()
    });
  
  });
  
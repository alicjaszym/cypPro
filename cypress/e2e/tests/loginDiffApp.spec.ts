

describe("share login context", () => {
 
 
  beforeEach(() => {
     
   
    cy.login(Cypress.env('user_name'), Cypress.env('user_password'))
    
  })
    
      it("login", () => {
        cy.visit("/web/index.php/dashboard/index")
        cy.get('.orangehrm-dashboard-widget-header').should("exist")
      
      })

      it("test logged already", () => {
        cy.visit("/web/index.php/dashboard/index")
        cy.get('.orangehrm-dashboard-widget-header').contains("Time at Work")
      })

    
  })
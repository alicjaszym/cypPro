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
declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): void;
  }
}
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.session(`session created for ${username}`, () => {
      cy.intercept("**/web/index.php/api/v2/dashboard/employees/subunit").as('logged')
      cy.visit("/web/index.php/auth/login")
      cy.get("[name='username']").clear().type(username)
      cy.get("[name='password']").clear().type(password)
      cy.get("[type='submit']").click()
      cy.wait('@logged').then((res) => {
        expect(res.response?.statusCode).eq(200)
      })
  }, {
    cacheAcrossSpecs:true
  })
})
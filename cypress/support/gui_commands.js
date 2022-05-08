Cypress.Commands.add('login', () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')

  const loginFn = () => {
    cy.visit('/login')
    cy.get('[data-qa="field-email"]').type(username)
    cy.get('[data-qa="field-password"]').type(password, { log: false })
    cy.get('[data-qa="button-submit"]').click()
    cy.url({ timeout: 10000 }).should('contain','/workspaces/')
  }

  cy.session(username, loginFn)
})

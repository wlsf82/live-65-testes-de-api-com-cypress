describe('Typeform GUI tests', () => {
  beforeEach(() => {
    cy.login()
    cy.formsCleanup()
    cy.createSampleForm().should(({ status, body }) => {
      expect(status).to.eq(201)
      cy.visit(`/form/${body.id}/results#summary`)
      cy.get('[data-qa="summary-tab"')
        .should('have.attr', 'aria-selected', 'true')
    })
  })

  it('sees "No signs of movement" when accessing the Result\'s Summary tab', () => {
    cy.contains('No signs of movement...')
      .should('be.visible')
  })
})

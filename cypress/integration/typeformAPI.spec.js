const sampleForm = require('../fixtures/sampleForm.json')

describe('Typeform API tests', () => {
  it('retrieves my user information', () => {
    cy.getUserInfo().should(({ status, body }) => {
      const { alias, email, language } = body
  
      expect(status).to.eq(200)
      expect(alias).to.eq('Walmyr Filho')
      expect(email).to.eq(Cypress.env('username'))
      expect(language).to.eq('en')
    })
  })
  
  it('retrieves form responses', () => {
    const formId = Cypress.env('formId')
    cy.getFormResponses(formId).should(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.total_items).to.eq(body.items.length)
    })
  })
  
  context('Cleanup before start', () => {
    beforeEach(() => cy.formsCleanup())

    it('creates a sample form', () => {
      cy.createSampleForm().should(({ status, body }) => {
        const { fields, title, type } = body
        expect(status).to.eq(201)
        expect(fields.length).to.eq(sampleForm.fields.length)
        expect(title).to.eq(sampleForm.title)
        expect(type).to.eq(sampleForm.type)
      })
    })
  })
})

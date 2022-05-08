const sampleForm = require('../fixtures/sampleForm.json')

const API_URL = Cypress.env('API_BASE_URL')
const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`

Cypress.Commands.add('getUserInfo', () => {
  cy.request({
    method: 'GET',
    url: `${API_URL}me`,
    headers: { authorization }
  })
})

Cypress.Commands.add('getFormResponses', formId => {
  cy.request({
    method: 'GET',
    url: `${API_URL}forms/${formId}/responses`,
    headers: { authorization }
  })
})

Cypress.Commands.add('formsCleanup', () => {
  cy.request({
    method: 'GET',
    url: `${API_URL}forms`,
    headers: { authorization },
  }).should(({ status, body }) => {
    expect(status).to.eq(200)
    body.items.forEach(item => {
      if (item.title === sampleForm.title) {
        cy.request({
          method: 'DELETE',
          url: `${API_URL}forms/${item.id}`,
          headers: { authorization },
        }).should(({ status }) => {
          expect(status).to.eq(204)
        })
      }
    })
  })
})

Cypress.Commands.add('createSampleForm', () => {
  cy.request({
    method: 'POST',
    url: `${API_URL}forms`,
    headers: { authorization },
    body: sampleForm
  })
})
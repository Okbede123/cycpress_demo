describe.skip('select option 1', () => {
  it('demo select 1', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://app.endtest.io/guides/docs/how-to-test-dropdowns/')
    cy.get("input[type='text']").type("fdfsd")
    cy.get("select#pets").select('dog')
    cy.get("select#pets").select('Rabbit').should('have.value','rabbit')
  })
})

describe('select option 2', () => {
  it('demo select 1', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://demoqa.com/select-menu')
    cy.get("select#oldSelectMenu").select('Green').should('have.value','2')
  })
})
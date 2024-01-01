require('@cypress/xpath');

describe('scroll down, scroll up', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.scrollTo('bottom')
    cy.wait(3000)
    cy.scrollTo('top')
  })
})


describe.only('scroll element', () => {
  it('passes', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://www.quangcaogiatot.com')
    cy.wait(3000)
    cy.xpath("(//h2/a)[11]").scrollIntoView();

  })
})
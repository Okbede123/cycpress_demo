require('@cypress/xpath');

describe('screen shot', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.screenshot('my-image')
  })
})


describe.only('template spec', () => {
  it('passes', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://www.quangcaogiatot.com')
    cy.xpath("(//a[text()='Tải game'])[1]").screenshot("take_screenshot_test")
  
  })
})
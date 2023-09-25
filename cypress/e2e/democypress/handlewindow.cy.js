require('@cypress/xpath');


describe.skip('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.encodedna.com/javascript/demo/open-new-window-using-javascript-method.htm')
    cy.xpath("//input[@value='Open window in a new tab']").click()
    cy.wait(3000)
    cy.xpath("//a[text()='Web Development Tools']").should("be.visible").click()
    cy.xpath("//h2[text()='Hello,']").should("be.visible")
  })
})

describe.skip('template spec 2', () => {
  it('passes', () => {
    cy.visit('https://www.encodedna.com/javascript/demo/open-new-window-using-javascript-method.htm')
    cy.xpath("//input[@value='Open a new window']").click()
    cy.wait(3000)
    cy.xpath("//div[text()='The Markup with a Script']").should("be.visible")
  })
})

describe('Example to demonstrate the handling of new browser windows in cypress', () => {


  it('Handling new Browser Window', function () {
      cy.visit('https://alapanme.github.io/testing-cypress.html')
      cy.window().then((win) => {
          cy.stub(win, 'open', url => {
              win.location.href = 'https://the-internet.herokuapp.com/';
          }).as("popup")
      })
      cy.get('button').click()
      // cy.get('@popup')
      //     .should("be.called")
      // cy.wait(3000)
      // cy.get('button').click()

      cy.origin('https://the-internet.herokuapp.com/', () => {
      cy.get('h1.heading').should('be.visible')
      cy.get('h1.heading').invoke('text').then((text) =>{
        cy.log('text la '+ text)
      })
      })

      cy.visit('https://alapanme.github.io/testing-cypress.html')
      cy.window().then((win) => {
          cy.stub(win, 'open', url => {
              win.location.href = 'https://the-internet.herokuapp.com/';
          }).as("popup")
      })
      cy.get('button').click()

      cy.origin('https://the-internet.herokuapp.com/', () => {
        cy.get('h1.heading').should('be.visible')
        cy.get('h1.heading').invoke('text').then((text) =>{
          cy.log('text la '+ text)
        })
        })
  })
})
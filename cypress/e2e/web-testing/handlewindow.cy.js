require('@cypress/xpath');


describe('handle auto switch window tab', () => {
  it('passes testcase 1', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://www.encodedna.com/javascript/demo/open-new-window-using-javascript-method.htm')
    cy.xpath("//input[@value='Open window in a new tab']").click()
    cy.wait(3000)
    cy.xpath("//a[text()='Crop image without losing its quality']").should("be.visible").click()
    cy.xpath("//input[@value='Select Image']").should("be.visible")
    cy.wait(3000)
  })
})
//pending, chưa handle đc
describe.only('handle auto switch window', () => {
  it('passes testcase 2', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://www.encodedna.com/javascript/demo/open-new-window-using-javascript-method.htm')

    // cy.wait(3000)
    cy.window().then((win) => {
      cy.stub(win, 'open', url => {
          win.location.href = 'https://www.encodedna.com/2013/09/open-new-window-using-javascript-window-open-demo.htm';
      }).as("popup")
  })
      cy.xpath("//input[@value='Open a new window']").click()
  cy.get('@popup')
      .should("be.called")
  cy.get('h1')
      .should('have.text', 'A New Popup Window')
  cy.title().then((title) =>{
    cy.log("title la " + title)
  })
    cy.get('h1').invoke('text').then((text) =>{
        cy.log('text la '+ text)
      })
    
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
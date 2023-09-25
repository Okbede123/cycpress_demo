require('@cypress/xpath');


describe.skip('template spec', () => {
  it('passes', () => {
    cy.visit('http://thethinkingtester.blogspot.com/2018/01/testing-buttons.html')
    cy.wait(3000)
    cy.get("input[value='Subscribe']").trigger('click')
    cy.drag
  })
})

describe('template spec', () => {
  it('passes', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })


    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    cy.wait(3000)
    cy.get("div#box3").trigger('mousedown', { button: 0 }).trigger('mousemove').get("div#box106").trigger("mouseup");

    // cy.get("div#box106").trigger('mousemove').trigger('mouseup');
  })
})
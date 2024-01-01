describe('get title , get url', () => {
  it('title , url', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    
    cy.visit('https://www.quangcaogiatot.com')
    cy.title().then((title) =>{
      cy.log("title la " + title)
    })
    cy.url().then((url) =>{
      cy.log("url la " + url)
    })
  })
})
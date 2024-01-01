require('@cypress/xpath');

describe('upload file', () => {
  it('passes', () => {
    cy.visit('https://tus.io/demo')
    cy.get("input[type=file]").selectFile("C:\\Users\\Hung Phat\\Desktop\\cycpress\\cypress\\testanh.jpg")
    
  })
})
describe('template spec', () => {
  it.skip('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get("div[class='container'] > h1",{timeout: 15000})
    cy.get("div[class='banner'] > div > p > a[href= 'https://www.cypress.io']",{withinSubject: cy.get('a')}).should('be.visible')
  })

  it("cy get withinsubject", ()=> { 
    cy.visit("https://qavbox.github.io/demo/signup/"); 
    cy.get("div[class='line'] > input", {withinSubject : document.getElementById('username')}).first().type("ok") 
})
})
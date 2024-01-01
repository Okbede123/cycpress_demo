

require('@cypress/xpath');


describe('shadow dom 1', () => {
  it('passes', () => {
    cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm')
    cy.xpath("//smart-ui-menu").shadow().find("smart-menu").should("be.visible")
    cy.wait(3000)
    cy.xpath("//smart-ui-menu").shadow().find("div[class='smart-menu-item-label-container'] > div").first().should("be.visible").click()
  })
})



describe('handle iframe in iframe the nay', () => {
  it('passes', () => {
    cy.visit('https://seleniumbase.io/w3schools/iframes')
    cy.get("iframe[id='iframeResult']")
    .then(($frame) =>{
      const $body = $frame.contents().find('body')
      cy.wrap($body).find("h2").should('be.visible').invoke('text').then((text) =>{
        cy.log("gia tri la " + text)
      })
      cy.wrap($body).find("p").invoke('text').then((text2) =>{
        cy.log("gia tri 2 la " + text2)
      })
        cy.wrap($body).find("iframe[title='Iframe Example']").then(($frame2) =>{
          const $body2 = $frame2.contents().find('body')
          cy.wrap($body2).find('h1').should('be.visible')
        })
    })
    cy.xpath("//div[@id='textarea']").should('be.visible')
  })
})
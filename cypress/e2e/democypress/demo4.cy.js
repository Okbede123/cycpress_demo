
require('@cypress/xpath');


describe.skip('get list element', () => {
  it('passes', () => {
    cy.visit('https://designsystem.digital.gov/components/checkbox/')
    //tim element theo text trên U
       cy.xpath("//input[@type='checkbox' and @value='sojourner-truth']//parent::div//label").each(($b) =>{
      cy.get($b).should("be.visible")
      cy.xpath("//label[text()='Sojourner Truth']//parent::div/input").check()
      cy.get($b).click()
    })
  })
})

describe.skip('get list element 2', () => {
  it('passes', () => {
    cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    cy.get('[type="checkbox"]').should('be.visible')
    cy.get("input[type='checkbox']").first().check()
    cy.get("input[type='checkbox']").first().should('be.checked')
    cy.get("input[type='checkbox']").first().uncheck()
    cy.get("input[type='checkbox']").first().should('not.be.checked')
    cy.get("input[type='checkbox']").should('have.length',6)
    // tim thang con form trong cái element blockquote nay

    cy.xpath("(//blockquote[@class='Example'])[1]").find("form").should('be.visible')
    // cy.get("input[type='checkbox']").each(($d) =>{
    //   cy.get($d).check()
    // })
  })
})


describe('get list element 2', () => {
  it('passes', () => {
    cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    // cy.get('[type="checkbox"]').should('be.visible')
    // chon check box co value la red vs yellow. voi dieu kien check box co atribute value
    cy.get("input[type='checkbox']").check(['red', 'yellow'])
    // cy.get("input[type='checkbox']").first().should('be.checked')
    // cy.get("input[type='checkbox']").first().uncheck()
    // cy.get("input[type='checkbox']").each(($d) =>{
    //   cy.get($d).check()
    // })
  })
})
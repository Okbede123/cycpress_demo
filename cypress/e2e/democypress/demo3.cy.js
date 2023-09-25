require('@cypress/xpath');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/v4')
    //tim element theo text trên UI
    cy.contains("UserID").should("be.visible")
    cy.xpath("//input[@name='uid']").type("AmEgYbe")
    cy.get("input[name='uid']").should("have.value","AmEgYbe")
    // tim tbody co tr va mong muon co 5 phan tu
    cy.xpath("//tbody").find("tr").should(($tr) => {
      expect($tr).to.have.length(5)
    })
  })
})


describe('template spec 2', () => {
  it('passes', () => {
    cy.visit('/v4')
    //tim element theo text trên UI
    cy.contains("UserID").should("be.visible")
    cy.xpath("//input[@name='uid']").type("mngr525281")
    cy.xpath("//input[@name='password']").type("AmEgYbe")
    cy.xpath("//input[@name='btnLogin']").type('{enter}')
  })
})





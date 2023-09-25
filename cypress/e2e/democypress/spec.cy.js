require('@cypress/xpath');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/v4/')
    // cy.get("input[name='uid']").type("fdfd")
    cy.xpath("//input[@name='uid']").type("mngr516480")
    cy.xpath("//input[@name='password']").type("adEgAmy")
    cy.xpath("//input[@name='btnLogin']").click()
    expect(true).to.equal(true)
    cy.url().should('include','manager/Managerhomepage.php')
  })
})

describe('template spec2', () => {
  it('passes', () => {
    cy.visit('/v4/')
    // cy.get("input[name='uid']").type("fdfd")
    cy.xpath("//input[@name='uid']").type("mngr516480")
    cy.xpath("//input[@name='password']").type("adEgAmysd")
    cy.xpath("//input[@name='btnLogin']").click()
    expect(true).to.equal(true)
    cy.url().should('include','manager/Managerhomepage.php')
  })
})
require('@cypress/xpath');

function typeElement(element,value){
  cy.xpath(element).type(value)
}

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/v4')
  })

  it('displays two todo items by default  remove atribute', () => {
    typeElement("//input[@name='uid']","mngr525281")
    cy.xpath("//input[@name='password']").type("AmEgYbe")
    cy.xpath("//input[@name='btnLogin']").click()
    if(cy.xpath("//td[text()='Manger Id : mngr525281']").should("be.visible"))
    {
      cy.xpath("//a[text()='New Customer']").click()
    }
    cy.xpath("//input[@name='name']").type("okbede")
    //remove 1 attribute, tham so type la tham so truyen atribute muon xoa vao
    cy.xpath("//input[@name='dob']").invoke('removeAttr','type')
    cy.xpath("//input[@name='dob']").type("07/09/2023")
    cy.xpath("//textarea[@name='addr']").type("119 tran duy hung")
    cy.xpath("//input[@name='city']").type("ha noi")
    cy.xpath("//input[@name='state']").type("tran duy hung")
    cy.xpath("//input[@name='pinno']").type("123123123")
    cy.xpath("//input[@name='telephoneno']").type("0982342341")
    cy.xpath("//input[@name='emailid']").type("sdfgsfg@gmail.com")
    cy.xpath("//input[@name='password']").type("123123")
    cy.xpath("//input[@name='sub']").click()
  })


  it('displays two todo items by default lan 2', () => {
    typeElement("//input[@name='uid']","mngr525281")
    cy.xpath("//input[@name='password']").type("AmEgYbe")
    cy.xpath("//input[@name='btnLogin']").click()
    if(cy.xpath("//td[text()='Manger Id : mngr525281']").should("be.visible"))
    {
      cy.xpath("//a[text()='New Customer']").click()
    }
    cy.xpath("//input[@name='name']").type("okbede")
    //remove 1 attribute, tham so type la tham so truyen atribute muon xoa vao
    cy.xpath("//input[@name='dob']").invoke('removeAttr','type')
    cy.xpath("//input[@name='dob']").type("07/06/2023")
    cy.xpath("//textarea[@name='addr']").type("6 quang trung")
    cy.xpath("//input[@name='city']").type("ha noi")
    cy.xpath("//input[@name='state']").type("quang trung")
    cy.xpath("//input[@name='pinno']").type("123123123")
    cy.xpath("//input[@name='telephoneno']").type("0971273123")
    cy.xpath("//input[@name='emailid']").type("thantaig@gmail.com")
    cy.xpath("//input[@name='password']").type("123123")
    cy.xpath("//input[@name='sub']").click()
  })

  describe('displays two todo items by default lan 3, remove atribute', () => {
    it('test ti',() =>{
      typeElement("//input[@name='uid']","mngr525281")
      cy.xpath("//input[@name='password']").type("AmEgYbe")
      cy.xpath("//input[@name='btnLogin']").click()
      if(cy.xpath("//td[text()='Manger Id : mngr525281']").should("be.visible"))
      {
        cy.xpath("//a[text()='New Customer']").click()
      }
      cy.xpath("//input[@name='name']").type("okbede")
      //remove 1 attribute, tham so type la tham so truyen atribute muon xoa vao
      cy.xpath("//input[@name='dob']").invoke('removeAttr','type')
      cy.xpath("//input[@name='dob']").type("07/06/2023")
      cy.xpath("//textarea[@name='addr']").type("6 quang trung")
      cy.xpath("//input[@name='city']").type("ha noi")
      cy.xpath("//input[@name='state']").type("quang trung")
      cy.xpath("//input[@name='pinno']").type("123123123")
      cy.xpath("//input[@name='telephoneno']").type("0971273123")
      cy.xpath("//input[@name='emailid']").type("thantaig@gmail.com")
      cy.xpath("//input[@name='password']").type("123123")
      cy.xpath("//input[@name='sub']").click()
    })

  })


})

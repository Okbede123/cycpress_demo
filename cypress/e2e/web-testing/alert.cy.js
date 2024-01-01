require('@cypress/xpath');

describe('get text alert', () => {
  it('text alert', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://demo.automationtesting.in/Alerts.html')
    cy.contains("Alert with OK").click()
    cy.xpath("//button[contains(text(),'click the button to display an  alert box:')]").click()
    cy.on("window:alert", (mesage) =>{
        cy.log("get message alert " + mesage)
    })
  })
})


describe('click ok alert', () => {
  it('click ok alert', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://demo.automationtesting.in/Alerts.html')
    cy.contains("Alert with OK & Cancel ").click()
    cy.xpath("//button[contains(text(),'click the button to display a confirm box ')]").click()
    // cy.on("window:alert", (mesage) =>{
       cy.window().then((win) =>{
        win.confirm()
       })
        
    // })
    cy.contains("You pressed Ok").should("be.visible")
  })
})


describe('click dismiss alert', () => {
  it('click dismiss alert', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://demo.automationtesting.in/Alerts.html')
    cy.contains("Alert with OK & Cancel ").click()
    cy.xpath("//button[contains(text(),'click the button to display a confirm box ')]").click()
    cy.on("window:confirm", (s) => {
      return false;
   });
    // cy.on("window:alert", (mesage) =>{
    //    cy.window().then((win) =>{
    //     win.confirm()
    //    })
        
    // })
    cy.contains("You Pressed Cancel").should("be.visible")
  })
})


describe.only('input text alert', () => {
  it('input text alert', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.visit('https://demo.automationtesting.in/Alerts.html')
    cy.contains("Alert with Textbox ").click()
    cy.window().then(function(p){
      cy.stub(p, "prompt").returns("okbede");
      cy.xpath("//button[contains(text(),'click the button to demonstrate the prompt box ')]").click()
    })

    
  })
})

describe('Tutorialspoint Test', function () {
  // test case
  it("Scenario 1", function () {
     //URL launch
     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
     //handling prompt alert
     cy.window().then(function(p){
        //stubbing prompt window
        cy.stub(p, "prompt").returns("okbede");
        // click on Click for JS Prompt button
        cy.get(':nth-child(3) > button').click()
        // verify application message on clicking on OK
        cy.get('#result').contains('You entered: Tutorialspoint')
     });
  });
});  
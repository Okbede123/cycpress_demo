describe('set variable environment, get variable environment', () => {
  it('testcase1', () => {
    const varget = Cypress.env('baseUrl')
    cy.log(varget + " bien mt")
    // cy.log(Cypress.env('dev').baseUrl + " bien mt")
    cy.log(Cypress.env('api_server'))
    cy.log(Cypress.env('bienTest') + " get bien test")
    if(varget.includes("ok")){
      cy.log("run vao if")
    }
    else{
      cy.log("run vao else")
    }
    cy.wait(4000)
  })
})

describe('set variable environment, get variable environment', () => {
  it('testcase2', () => {
    const varget = Cypress.env('baseUrl')
    cy.log(varget + " bien mt")
    // cy.log(Cypress.env('dev').baseUrl + " bien mt")
    cy.log(Cypress.env('api_server'))
    cy.log(Cypress.env('bienTest') + " get bien test")
    if(varget.includes("ok")){
      cy.log("run vao if")
    }
    else{
      cy.log("run vao else")
    }
    cy.wait(4000)
  })
})


// describe('set variable environment, get variable environment 2', () => {
//   it('passes', () => {
//     const varget = Cypress.env('baseUrl')
//   })
// })


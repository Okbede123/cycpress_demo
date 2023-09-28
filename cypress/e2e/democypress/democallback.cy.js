describe.skip('template spec', ()=>{
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    var gettest = test1(3,()=>{
      return 4
    })
    cy.log(gettest)
  })
})

function test2(){
  return 8
}

describe('template spec 2', ()=>{
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    var gettest = test1(4,test2)

    cy.log(gettest)
  })


})


// function getVisit(){
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//     var gettest = test1(3,()=>{
//       return 4
//     })
//     cy.log(gettest)
//   })
// }

function test1(value1 ,value2){
  return value1 + value2()
}
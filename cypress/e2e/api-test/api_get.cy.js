

describe('api get, log header, response,request, handle header', () => {
  it("api get",() =>{
    cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users',
          qs: {page: 2}
    }).then((response) =>{
      expect(response.body.data[0].id).equal(7)
      expect(response.body.data).has.length(6)
      cy.log( "header " + JSON.stringify(response.headers))
      cy.log("all " + JSON.stringify(response.allRequestResponses))
      cy.log(JSON.stringify(response.body.data[0]));
      cy.log( "header date " + JSON.stringify(response.headers.date))
      cy.log( "header content-type " + response.headers["content-type"])
    })
  })
})


describe('api get, 2 query', () => {
  it("api get",() =>{
    cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users',
          qs: {page: 2,test:"fd"}
    }).then((response) =>{
      cy.log("all " + JSON.stringify(response.allRequestResponses))
    })
  })
})

describe('api get, log header, validate value', () => {
  it("api get",() =>{
    cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users',
          qs: {page: 2}
    }).then((response) =>{
      cy.log("length " + response.body.data.length)
      response.body.data.forEach((index) => {
          if(index.id == 7){
            cy.log(JSON.stringify(index))
          }
      })
      var value = response.body.data[0].email
      if(value.includes("michael")){
        cy.log("co chua include")
      }
      if(value === "michael.lawson@reqres.in"){
        cy.log(" === ")
      }
      expect(response.body.data[0].email).include("michael")
      expect(response.body.data[0].id).equal(7)

    })
  })
})
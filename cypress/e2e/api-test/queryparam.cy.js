describe('query param', () => {

  it("demo query param",() =>{


    cy.request({


          method: 'GET',
          url: 'https://reqres.in/api/users',
          qs: {page: 2}
    }).then((response) =>{
      expect(response.body.data[0].id).equal(7)
      expect(response.body.data).has.length(6)
    })
    
  })
})
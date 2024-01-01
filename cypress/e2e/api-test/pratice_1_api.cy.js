describe('bring api to another api', () => {
  it("api get",() =>{

    var response_get

    cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users',
          qs: {page: 2}
    }).then((response) => {

      response_get = response.body.data[0].last_name
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body:{
          "name": response_get,
          "job": "leader"
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('job','leader')
        cy.log(JSON.stringify(response.allRequestResponses))
      })
    })
  })
})



context("call file json", () => {
  it("file json", () => {
    var bodyset;
    cy.fixture('body_remove.json').then((data) =>{
      bodyset = data
      bodyset.name = 'okbede'
      delete bodyset.address
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: bodyset
  }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('job','leade1r')
      expect(response.body.name).to.equal('okbede')
      })
    })
  })
})


context("post /users", () => {
  it.only("post demo", () => {
    cy.request({

          method: 'POST',
          url: 'https://reqres.in/api/users',
          body:{
            "name": "morpheus",
            "job": "leader"
          }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('job','leader')
      expect(response.body.name).to.equal('morpheus')
    })
  })
})

context("post /users 2", () => {
  it.only("post demo 2", () => {

    var bodyset;

    cy.fixture('bodyjs/body.json').then((data) =>{
      bodyset = data
      bodyset.name = 'okbede'

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


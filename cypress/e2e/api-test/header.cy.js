describe('header', () => {

  it('demo header', () => {

    cy.request({

      method: 'GET',
      url: 'https://api.getpostman.com/collections',
      headers:{
        "X-API-Key": 'PMAK-64032f29aa0bed48225a64f7-965565221f997e2246730307e9251aab88',
      "Content-Type": "application/json"
    }
      
    }).then((response) =>{
      expect(response.status).to.equal(200)
    })
  })
})
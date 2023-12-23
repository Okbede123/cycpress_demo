describe('form data', () => {

  it('form data', () => {


    cy.fixture('testanh.jpg','binary').then((file) => Cypress.Blob.binaryStringToBlob(file))
    .then((blod) =>{
      var formdata = new FormData();
      formdata.append("photo", blod, "testanh.jpg");
      formdata.append("chat_id","-1001413805746")
      cy.request({

        method: 'POST',
        url: 'https://api.telegram.org/bot5902090142:AAHLR0qxyKdl6YVQjQY8dyoy49Gtp6Gocdc/sendPhoto',
        headers:{
        "Content-Type": "multipart/form-data"
      },
        body: formdata
        
      }).then((response) =>{
        expect(response.status).to.equal(200)
      })
    })

  })
})
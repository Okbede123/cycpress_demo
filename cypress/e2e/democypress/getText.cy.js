require('@cypress/xpath');

describe.skip('get text', () => {
  it('passes', () => {
    cy.visit('https://demo.guru99.com/v4/')
    var gettext = 'ok'

    cy.xpath("//h2[text()='Guru99 Bank']").invoke('text').then((text) =>{
      expect(text).to.equal('Guru99 Bank')
        gettext = text
        cy.log("gia tri la " + text)
        cy.log('text get trong ra la '+ gettext)
        
     })

     cy.log('text get ra la '+ gettext)
     
  })
})

describe('get list element', () =>{
  it('get list test', () =>{
    cy.visit("https://designsystem.digital.gov/components/checkbox/")


    var testlist = []

    cy.xpath("//div[@class='usa-checkbox']/label").invoke('text').then(($gettext) =>{
        cy.log('text la tren ' + $gettext)
    })

    cy.xpath("//div[@class='usa-checkbox']/label").each((item)=>{
      expect(item).to.have.length(1)
      cy.log('text la duoi ' + item.text())
      testlist.push(item.text())
      cy.log('ben trong lambda'+testlist[0])
    })
    cy.log('ben ngoai lambda'+testlist[0])

    //multiple click
    cy.xpath("//div[@class='usa-checkbox']/label").click({multiple : true})
  

    // cy.get("//div[@class='usa-checkbox']/label").invoke('text').array.forEach(element => {
    //       cy.log('text la ' + element)
    // });
  })


})

describe.skip('demo',()=>{
  it('test',() =>{
    var arraytest = [2,5,7]
    arraytest.forEach(value=>{
      cy.log(value)
    })
  })
})


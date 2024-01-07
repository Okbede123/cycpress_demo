require('@cypress/xpath');

describe('template spec', () => {
 it('passes',async () => {
  
  const result = await plusNumber()
  cy.log(result + " ket qua")

  })
})

function plusNumber(){
  return 5 + 3
}


describe('get list element', () =>{
  it('get list test', () =>{
    // chua demo dc
    cy.visit("https://designsystem.digital.gov/components/checkbox/")

    var testlist = []

    cy.xpath("//div[@class='usa-checkbox']/label").each( async (item)=>{
      testlist = await inputList(item.text(),testlist)
    })
    cy.log("gia tri dau tien ben ngoai " + testlist[0])
  })
})

function inputList(value , testlist){
  testlist.push(value)
  return testlist

}

function someAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Giả sử đây là một công việc mất thời gian
      resolve('Work done!');
    }, 1000);
  });
}